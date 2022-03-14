import './Header.css';
import React from "react";
import {Link} from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="App-header">
        <div className="content">
            <p className='App-logo'>My To Do List</p>
            <Link className="Header-link" to="/accueil">Accueil</Link>
          </div>
      </header>
    </div>
  );
}

export default Header;