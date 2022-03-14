import './App.css'
import { createContext, useState, useContext, useMemo, React } from 'react';
import Header from './components/Header/Header';
import Accueil from './components/Accueil/Accueil';
import Footer from './components/Footer/Footer';
import NewItem from './components/newItem/newItem';
//import {toDoItem} from './class/toDoItem';
import {
  Route, Routes
} from "react-router-dom";


const darkModeContext = createContext({
  theme: "Light",
  toggleDarkMode: () => { },
});


function App() {
  const [theme, toggleDarkMode] = useState("Light");
  const value = useMemo(
    () => ({ theme, toggleDarkMode }),
    [theme]
  );

  return (
    <>
      <darkModeContext.Provider value={value}>
        <Header/>
        
        <ThemeInput />
        <UserInfo />
        <Routes>
          <Route exact path="/newItem" element={<NewItem />} />
          <Route path="*" element={<Accueil />} />
        </Routes>
        <Footer />
      </darkModeContext.Provider>
    </>
  );
}

function ThemeInput() {
  const { toggleDarkMode } = useContext(darkModeContext);
  const changeHandler = event => {
    if (event.target.value === "Light") {
      toggleDarkMode(event.target.value = "Dark");
      document.documentElement.style.setProperty('--toggleThemeButtonColor', 'white');
      document.documentElement.style.setProperty('--toggleThemeButtonBackgroundColor', '#1b1d22');
      document.documentElement.style.setProperty('--headerColor', 'white');
      document.documentElement.style.setProperty('--headerBackGroundColor', '#1b1d22');
      document.documentElement.style.setProperty('--color', 'white');
      document.documentElement.style.setProperty('--backGroundColor', '#1b1d22');
      document.documentElement.style.setProperty('--headerLinkColor', 'white');
    } else {
      toggleDarkMode(event.target.value = "Light");
      document.documentElement.style.setProperty('--toggleThemeButtonColor', '#1b1d22');
      document.documentElement.style.setProperty('--toggleThemeButtonBackgroundColor', 'white');
      document.documentElement.style.setProperty('--headerColor', '#1b1d22');
      document.documentElement.style.setProperty('--headerBackGroundColor', 'white');
      document.documentElement.style.setProperty('-color', '#1b1d22');
      document.documentElement.style.setProperty('--backGroundColor', 'white');
      document.documentElement.style.setProperty('--headerLinkColor', '#1b1d22');
    }
  };
  return (
    <button className="toggleThemeButton" onClick={changeHandler}>Swtich Mode</button>
  );
}

function UserInfo() {
  const { theme } = useContext(darkModeContext);
  return <span>{theme}</span>;
}

export default App;