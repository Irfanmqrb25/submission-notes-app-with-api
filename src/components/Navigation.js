import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

function Navigation({ logout, name}) {
    return(
        <nav className='navigation'>
            <ul>
                <li><Link to="/archives">Terarsip</Link></li>
                <li><button onClick={logout}>{name} <FiLogOut /></button></li>
            </ul>
        </nav>
    )
}

export default Navigation;