import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import Header from './components/Header';
import Marketing from './components/Marketing';
const App = () => {
  return (
  <StylesProvider>
    <BrowserRouter>
      <Header />
      <Marketing />
    </BrowserRouter>
  </StylesProvider>
  )
}

export default App;