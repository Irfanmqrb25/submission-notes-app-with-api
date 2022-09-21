import React from 'react';
import PropType from 'prop-types';
import { MdLogout } from "react-icons/md";

function LogoutButton({name, logout}) {
    return (
        <button className='button-logout' type='button' onClick={logout}><MdLogout/> {name}</button>
    );
}

LogoutButton.propTypes = {
    logout: PropType.func.isRequired,
    name: PropType.string.isRequired,
};

export default LogoutButton;