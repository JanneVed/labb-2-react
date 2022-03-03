import './App.css';
import Portfolio from './pages/Portfolio';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import NoPage from './pages/NoPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="portfolio" element={<Portfolio />}/>
          <Route path="*" element={<NoPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}; // basename='/labb-2-react'
