import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import CTAButton from './components/CTAButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className='bg-black'>
      <Navigation />
      <App />
      <CTAButton />
      <Footer />
    </div>
  </BrowserRouter>
);


