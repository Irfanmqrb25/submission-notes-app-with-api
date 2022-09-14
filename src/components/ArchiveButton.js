import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArchive, MdOutlineUnarchive } from 'react-icons/md';

function ArchiveButton({id, onArchive, isArchive}) {
    const navigate = useNavigate();
    return (
            <button className='action' type='button' title='Arsipkan' onClick={() => {onArchive(id); navigate('/');}}>
                {isArchive ? <MdOutlineUnarchive/> : <MdOutlineArchive/> }
            </button>
    )
}

export default ArchiveButton;