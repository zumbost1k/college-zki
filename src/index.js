import React from 'react';
import ReactDOM from 'react-dom';
import OneTimePadEncryption from './3laba';
import { HashRouter, Route, Routes } from 'react-router-dom';
import DoubleTranspositionCipher from './App';
import MagicSquareEncryption from './2laba';
import Navigation from './navigation';
import FourthTask from './4laba';
import FifthLaba from './5laba';
import SixthLaba from './6laba';
import Gammirovanie from './gammirovanie';
import Gamal from './gamal';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path='/1' element={<DoubleTranspositionCipher />} />
        <Route path='/2' element={<MagicSquareEncryption />} />
        <Route path='/3' element={<OneTimePadEncryption />} />
        <Route path='/4' element={<FourthTask />} />
        <Route path='/5' element={<FifthLaba />} />
        <Route path='/6' element={<SixthLaba />} />
        <Route path='/7' element={<Gammirovanie />} />
        <Route path='/8' element={<Gamal />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
