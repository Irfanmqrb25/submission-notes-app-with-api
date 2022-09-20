import React, { useState, useEffect, useMemo } from 'react';
import HomePage from './page/HomePage';
import NoteBrand from './components/NoteBrand';
import Navigation from './components/Navigation';
import DetailPage from './page/DetailPage';
import ArchivePage from './page/ArchivePage';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import AddNotePage from './page/AddNotePage';
import RegisterPage from './page/RegisterPage';
import LoginPage from './page/LoginPage';
import ThemeContext from './context/ThemeContext';
import { addNote, archiveNote, deleteNote, getActiveNotes, getArchivedNotes, getUserLogged, putAccessToken, unarchiveNote } from './utils/network-data';

function App() {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(null);
  const [activeNotes, setActiveNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);
  const navigate = useNavigate();
  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme
    }
  }, [theme]);


  function toggleTheme() {
    setTheme((prevTheme) => {
      return prevTheme === 'light' ? 'dark' : 'light';
    });
  };

  function setNotes() {
    getActiveNotes().then(({ data }) => {
      setActiveNotes(data);
    });
    getArchivedNotes().then(({ data }) => {
      setArchiveNotes(data);
    });
  }

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setUser(data);
    navigate('/');
  }

  function onLogout() {
    putAccessToken('');
    setUser(null);
    navigate('/');
  }

  async function onAdd({ title, body }) {
    const response = await addNote({ title, body });
    setNotes();
  }

  async function onDelete(id) {
    await deleteNote(id);
    setNotes();
  }

  async function onArchive(id) {
    await archiveNote(id);
    setNotes();
  }

  async function onUnarchive(id) {
    await unarchiveNote(id);
    setNotes();
  }


  if (user === null) {
    return (
      <ThemeContext.Provider value={themeContextValue}>
        <div className='app-conatiner' data-theme={theme}>
          <header className='contact-app__header'>
            <NoteBrand />
            <Navigation name={''} logout={onLogout} />
          </header>
          <main>
            <Routes>
              <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      </ThemeContext.Provider>
    )
  }

  return (
    <div className="app-container">
      <header>
        <h1><Link to="/">Aplikasi Catatan</Link></h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/notes/new' element={<AddNotePage />} />
          <Route path='/archives' element={<ArchivePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
