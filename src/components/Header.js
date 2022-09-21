import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import { MdGTranslate } from "react-icons/md";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import Navigation from './Navigation';
import LogoutButton from './LogoutButton';
import ThemeContext from '../context/ThemeContext';
import LocaleContext from '../context/LocaleContext';
import { LocaleConsumer } from '../context/LocaleContext';

function Header({ name, logout }) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { toggleLocale } = useContext(LocaleContext);

    return (
        <LocaleConsumer>
            {
                ({ locale }) => {
                    return (
                        <header>
                            <h1><Link to="/">{locale === "id" ? "Aplikasi Catatan" : "Notes App"}</Link></h1>
                            {name ? <Navigation /> : ''}
                            <button className='toggle-locale' type='button' onClick={toggleLocale}><MdGTranslate /></button>
                            <button className='toggle-theme' type='button' onClick={toggleTheme}>{theme === 'light' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}</button>
                            {name ? <LogoutButton name={name} logout={logout} /> : ''}
                        </header>
                    )
                }
            }
        </LocaleConsumer>
    );
}

Header.propTypes = {
    logout: PropType.func.isRequired,
    name: PropType.string.isRequired,
};

export default Header;
