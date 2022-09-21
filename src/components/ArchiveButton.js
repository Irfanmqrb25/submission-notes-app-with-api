import React from "react";
import { MdOutlineArchive } from 'react-icons/md';
import PropTypes from "prop-types";

function ArchiveButton({ id, onArchive }) {
    
    return (
        <button className='action' type='button' title='Arsipkan' onClick={() => { onArchive(id); }}>
            <MdOutlineArchive />
        </button>
    )
}

ArchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onArchive: PropTypes.func.isRequired,
}

export default ArchiveButton;