import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import { MdGTranslate } from "react-icons/md";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import Navigation from './Navigation';
import LogoutButton from './LogoutButton';
import ThemeContext from '../context/ThemeContext';

function Header({ name, logout }) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header>
            <h1><Link to="/">Aplikasi Catatan</Link></h1>
            {name ? <Navigation /> : ''}
            <button className='toggle-locale' type='button'><MdGTranslate /></button>
            <button className='toggle-theme' type='button' onClick={toggleTheme}>{theme === 'light' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}</button>
            {name ? <LogoutButton name={name} logout={logout} /> : ''}
        </header>
    );
}

Header.propTypes = {
    logout: PropType.func.isRequired,
    name: PropType.string.isRequired,
};

export default Header;