import MyMap from '../components/MyMap';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Authors({entries}) {
  return (
    <div className="home">
      <Header />
      <main>
        <h1>. . .</h1>
        {entries.length > 0 ? (
          entries
            .filter((entry) => entry.entryType === 'Author')
            .map((entry) => {
              return (
                <article className="entry-article" key={entry._id}>
                  <h1>{entry.title}</h1>
                  <h2>{entry.description}</h2>
                  <Link to="/articleDetail">
                    <img
                      className="entry-image"
                      src={entry.image}
                      alt={entry.title}
                    />
                  </Link>
                  <MyMap lat={entry.latitude || 52.531377} lng={entry.longitude || 13.381777} />
                </article>
              );
            })
        ) : (
          <h1>Loading...</h1>
        )}
      </main>
      <Footer />
    </div>
  );
}
