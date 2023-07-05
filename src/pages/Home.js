import '../styles/App.css';
import MyMap from '../components/MyMap';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MyMapAll from '../components/MyMapAll';
import Footer from '../components/Footer';

export default function Home({ entries }) {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const getAllPositions = async () => {
      const URI = `${process.env.REACT_APP_LITGUIDEBERLIN_API}/entries`;

      try {
        const response = await axios.get(URI);
        // console.log(response.data);
        const entries = response.data;
        const positions = entries.map((entry) => {
          return { position: [entry.latitude, entry.longitude], key: entry._id};
        });
        // console.log(positions);

        setPositions(positions);
      } catch (error) {
        console.error(error);
      }
    };

    getAllPositions();
  }, []);

  return (
    <div className="home">
      <Header />
      <main>
        <h1>. . .</h1>
        <MyMapAll positions={positions} />
      </main>
      <Footer />
    </div>
  );
}
