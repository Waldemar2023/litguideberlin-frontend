import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const getAllEntries = async () => {
      const URI = `${process.env.REACT_APP_LITGUIDEBERLIN_API}/entries`;

      try {
        const response = await axios.get(URI);
        // console.log(response.data);
        setEntries(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getAllEntries();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Header: LitGuideBerlin</h1>
        <nav className="Register">
          <button>Authors</button>
          <button>Museums</button>
          <button>About</button>
        </nav>
      </header>
      <main>
        <h1>Main</h1>
        {entries.length > 0 ? (
          entries.map((entry) => {
            return (
              <article className="entry-article" key={entry._id}>
                <h1>{entry.title}</h1>
                <h2>{entry.description}</h2>
                <img
                  className="entry-image"
                  src={entry.image}
                  alt={entry.title}
                />
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

// function App() {
//   return (
//     <div className="container">
//       {/* Your website content or components go here */}
//     </div>
//   );
// }

export default App;
