import logo from './logo.svg';
import './HomePage.css';

function HomePage() {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <img src={logo} className="HomePage-logo" alt="logo" />
        <p>
          Edit <code>src/HomePage.js</code> and save to reload.
        </p>
        <p>Bite</p>
      </header>
    </div>
  );
}

export default HomePage;
