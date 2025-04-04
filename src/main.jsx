import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invitation" element={
          <div className="text-center text-white bg-black min-h-screen flex items-center justify-center text-2xl">
            청첩장 페이지입니다 (추후 구현)
          </div>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
