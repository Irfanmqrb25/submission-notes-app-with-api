import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineUnarchive } from 'react-icons/md';
import PropTypes from 'prop-types';

function UnArchiveButton({ id, onUnArchive }) {
    const navigate = useNavigate();
    return (
        <button className='action' type='button' title='Aktifkan' onClick={() => { onUnArchive(id); navigate('/'); }}>
            <MdOutlineUnarchive />  
        </button>
    )
}

UnArchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onUnArchive: PropTypes.func.isRequired,
}

export default UnArchiveButton;