import React from 'react';
import HomePage from './page/HomePage';
import Navigation from './components/Navigation';
import DetailPage from './page/DetailPage';
import ArchivePage from './page/ArchivePage';
import { Link, Routes, Route } from 'react-router-dom';
import AddNotePage from './page/AddNotePage';

function App() {
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
