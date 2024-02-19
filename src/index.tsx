import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SurvivalMap from './pages/survivalMap';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/survival/map" element={<SurvivalMap/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
