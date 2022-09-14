import React from "react";
import { useNavigate } from "react-router-dom";
import { HiPlus } from 'react-icons/hi';


function AddButton() {
    const navigate = useNavigate();
    const addNote = () => {
        navigate('/notes/new');
    }

    return (
        <div className='homepage__action'>
            <button className='action' title='Tambah' type='button' onClick={addNote}><HiPlus /></button>
        </div>
    )
}

export default AddButton;