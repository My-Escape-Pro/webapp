import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './utilities/reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Catalog from "./pages/Catalog/Catalog";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <main style={{ maxWidth: '1024px', marginBottom: '50px', marginInline: 'auto', paddingTop: '90px'}}>
        <Routes>
          <Route path='*' element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </main>
    </Router>
  </React.StrictMode>
);

reportWebVitals(console.log);
