import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './features/Header/Header';
import Preloader from './features/Preloader/Preloader';
import Main from './features/Main/Main';

function App() {

  return (
    <div className="container">
      <Header />
      {/* <Preloader /> */}
      <Main />
      {/* <Counter /> */}
      
    </div>
  );
}

export default App;
