import '../styles/App.css';
import MyMap from '../components/MyMap';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function Home({ entries }) {
  return (
    <div className="home">
      <Header />
      <main>
        <h1>Main</h1>
        {entries.length > 0 ? (
          entries.map((entry) => {
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
                <MyMap lat={52.531377} lng={13.381777} />
              </article>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}
