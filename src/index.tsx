import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SurvivalMap from './pages/survivalMap';
import SurvivalRanks from './pages/survivalRanks';
import CreativeMap from './pages/creativeMap';
import Rules from './components/Rules';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/rules" element={<Rules/>}/>
          <Route path="/survival/map" element={<SurvivalMap/>}/>
          <Route path="/survival/ranks" element={<SurvivalRanks/>}/>
          <Route path="/creative/map" element={<CreativeMap/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
