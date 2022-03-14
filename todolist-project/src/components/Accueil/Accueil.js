import './Accueil.css';
import React from "react";

function Accueil() {
  return (
    <div className="App">
      <header className="App-accueil">
      <a className="App-link" href='./newItem'>NewItem</a>
        <p>
          Accueil works !
        </p>
      </header>
    </div>
  );
}

export default Accueil;