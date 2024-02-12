import React from 'react';
import ReactDOM from 'react-dom/client';
import { pdfjs } from 'react-pdf';

import reportWebVitals from './utilities/reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Catalog from "./pages/Catalog/Catalog";
import Collection from "./pages/Collection/Collection";
import Game from "./pages/Game/Game";
import Presentation from "./pages/Presentation/Presentation";
import MyEscapeTheme from "./assets/muiTheme";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyEscapeTheme>
      <Router>
        <Header />
        <main style={{ maxWidth: '1024px', marginBottom: '50px', marginInline: 'auto', paddingTop: '90px'}}>
          <Routes>
            <Route path='*' element={<PageNotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/ranking" element={<Home />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </main>
      </Router>
    </MyEscapeTheme>
  </React.StrictMode>
);

reportWebVitals(console.log);
