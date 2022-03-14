import './Accueil.css';
import React from "react";
import {Link} from "react-router-dom";

function Accueil() {
  return (
    <div className="App">
      <header className="App-accueil">
      <Link className="Accueil-link" to="/newItem">NewItem</Link>
        <p>
          Accueil works !
        </p>
        
      </header>
    </div>
  );
}

export default Accueil;