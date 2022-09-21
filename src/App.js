import React, { useState, useMemo, useEffect } from 'react';
import HomePage from './page/HomePage';
import DetailPage from './page/DetailPage';
import ArchivePage from './page/ArchivePage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AddNotePage from './page/AddNotePage';
import RegisterPage from './page/RegisterPage';
import LoginPage from './page/LoginPage';
import Header from './components/Header';
import ThemeContext from './context/ThemeContext';
import LocaleContext from './context/LocaleContext';
import { getUserLogged, putAccessToken } from './utils/network-data';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");
  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("locale", newLocale);
      return newLocale
    });
  };

  const localeContextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setUser(data);
    navigate('/');
  }

  useState(() => {
    async function setUserLogged() {
      const { data } = await getUserLogged();
      setUser(data);
    };
    setUserLogged();
  }, [user]);

  function onLogout() {
    putAccessToken('');
    setUser(null);
    navigate('/');
  }


  if (user === null) {
    return (
      <ThemeContext.Provider value={themeContextValue}>
        <LocaleContext.Provider value={localeContextValue}>
          <div className="app-container" data-theme={theme}>
            <Header name={''} logout={onLogout} />
            <main>
              <Routes>
                <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <div className="app-container" data-theme={theme}>
          <Header name={user.name} logout={onLogout} />
          <main>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/notes/new' element={<AddNotePage />} />
              <Route path='/archives' element={<ArchivePage />} />
              <Route path="/notes/:id" element={<DetailPage />} />
            </Routes>
          </main>
        </div>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
