import React from 'react';
import { useNavigate } from "react-router-dom";
import { MdDeleteOutline } from 'react-icons/md';
import PropTypes from "prop-types";

function DeleteButton({ id, onDelete }) {
    const navigate = useNavigate();
    return (
            <button className='action' type='button' title='Hapus' onClick={() => {onDelete(id); }}>
                <MdDeleteOutline />
            </button>
    )
}

DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;