import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Authors from './pages/Authors';
import ArticleDetail from './pages/ArticleDetail';
import Museums from './pages/Museums';
import About from './pages/About';
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
    <Routes>
      <Route path="/" element={<Home entries={entries} />} />
      <Route path="/authors" element={<Authors entries={entries} />} />
      <Route path="/museums" element={<Museums entries={entries} />} />
      <Route path="/about" element={<About />} />
      <Route path="/articleDetail" element={<ArticleDetail />} />
    </Routes>
  );
}
export default App;
