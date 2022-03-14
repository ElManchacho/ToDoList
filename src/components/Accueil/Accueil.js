import './Accueil.css';
import React from "react";
import {Link} from "react-router-dom";

function Accueil() {
  return (
    <div className="App">
      <div className="App-accueil">
      <Link className="Accueil-link" to="/newItem">NewItem</Link>
        <p>
         Welcome to you To Do List !
        </p>
        
      </div>
    </div>
  );
}

export default Accueil;