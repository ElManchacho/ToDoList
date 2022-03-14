import './App.css'
import { createContext, useState, useContext, useMemo, React } from 'react';
import Header from './components/Header/Header';
import Accueil from './components/Accueil/Accueil';
import Footer from './components/Footer/Footer';
import NewItem from './components/newItem/newItem';
import {BsFillSunFill, BsMoonFill} from 'react-icons/bs';
//import {toDoItem} from './class/toDoItem';
import {
  Route, Routes
} from "react-router-dom";


const darkModeContext = createContext({
  theme: "Dark",
  toggleDarkMode: () => { },
});


function App() {
  const [theme, toggleDarkMode] = useState("Dark");
  const value = useMemo(
    () => ({ theme, toggleDarkMode }),
    [theme]
  );

  return (
    <>
      <darkModeContext.Provider value={value}>
        <Header/>
        <div className='App-header'>
          <div className='themeDisplayer'>
            <ThemeInput />
            <br/>
            <br/>
          </div>
        </div>
        <div className='App-content'>
          <Routes>
            <Route path="*" element={<Accueil />} />
            <Route exact path="/newItem" element={<NewItem />} />
          </Routes>
        </div>
        <Footer />
      </darkModeContext.Provider>
    </>
  );
}

function ThemeInput() {
  const { theme, toggleDarkMode } = useContext(darkModeContext);
  const changeHandler = event => {
    if (event.target.value === "Light") {
      toggleDarkMode(event.target.value = "Dark");
      document.documentElement.style.setProperty('--toggleThemeButtonColor', 'white');
      document.documentElement.style.setProperty('--toggleThemeButtonBackgroundColor', '#1b1d22');
      document.documentElement.style.setProperty('--headerColor', 'white');
      document.documentElement.style.setProperty('--headerLinkColor', 'white');
      document.documentElement.style.setProperty('--headerBackGroundColor', '#101114');
      document.documentElement.style.setProperty('--color', 'white');
      document.documentElement.style.setProperty('--backGroundColor', '#1b1d22');
    } else {
      toggleDarkMode(event.target.value = "Light");
      document.documentElement.style.setProperty('--toggleThemeButtonColor', '#1b1d22');
      document.documentElement.style.setProperty('--toggleThemeButtonBackgroundColor', 'white');
      document.documentElement.style.setProperty('--headerColor', '#101114');
      document.documentElement.style.setProperty('--headerLinkColor', '#101114');
      document.documentElement.style.setProperty('--headerBackGroundColor', 'rgb(173, 173, 173)');
      document.documentElement.style.setProperty('--color', '#1b1d22');
      document.documentElement.style.setProperty('--backGroundColor', 'white');
    }
  };
  return (
    <div>
      <button className="toggleThemeButton" onClick={changeHandler}>
        {(theme==="Dark" && <BsMoonFill/>) || <BsFillSunFill/>}
        </button>
      <span className='themeInfo'>&nbsp;{theme} mode&nbsp;</span>
    </div>
  );
}

export default App;