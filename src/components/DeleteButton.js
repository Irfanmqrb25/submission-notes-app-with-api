import React from 'react';
import { useNavigate } from "react-router-dom";
import { MdDeleteOutline } from 'react-icons/md';

function DeleteButton({ id, onDelete }) {
    const navigate = useNavigate();
    return (
            <button className='action' type='button' title='Hapus' onClick={() => {onDelete(id); navigate('/');}}>
                <MdDeleteOutline />
            </button>
    )
}

export default DeleteButton;