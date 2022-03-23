import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../src/Assets/font/font.scss';
import '../src/Assets/style/_grid.scss';
import '../src/Assets/style/_reset.scss';
import './App.css';
import RouterWrapper from './Pages/Routers/RouterWrapper';

function App() {
  return (
    <BrowserRouter>
      <Route path={'/'} component={RouterWrapper} />
    </BrowserRouter>
  );
}

export default App;
