import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Authors from './pages/Authors';
import ArticleDetail from './pages/ArticleDetail';
import Museums from './pages/Museums';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/authors" element={<Authors />} />
      <Route path="/museums" element={<Museums />} />
      <Route path="/about" element={<About />} />
      <Route path="/articleDetail" element={<ArticleDetail />} />
    </Routes>
  );
}
export default App;
