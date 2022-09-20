import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArchive } from 'react-icons/md';
import PropTypes from "prop-types";

function ArchiveButton({ id, onArchive }) {
    const navigate = useNavigate();
    
    return (
        <button className='action' type='button' title='Arsipkan' onClick={() => { onArchive(id); navigate('/'); }}>
            <MdOutlineArchive />
        </button>
    )
}

ArchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onArchive: PropTypes.func.isRequired,
}

export default ArchiveButton;
