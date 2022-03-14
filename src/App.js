import './App.css'
import React from "react";
import Header from './components/Header/Header';
import Accueil from './components/Accueil/Accueil';
import Footer from './components/Footer/Footer';
import NewItem from './components/newItem/newItem';

import {
  Route, Routes
} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/newItem" element={<NewItem/>} />
        <Route path="*" element={<Accueil/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;