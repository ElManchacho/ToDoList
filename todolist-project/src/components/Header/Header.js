import './Header.css';
import React from "react";

function Header() {
  return (
    <div>
      <header className="App-header">
        <div className="content">
            <p className='logo'>My To Do List</p>
            <a className="link" href='./accueil'>Accueil</a>
          </div>
      </header>
    </div>
  );
}

export default Header;