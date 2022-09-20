import React from 'react';
import { addNote } from '../utils/network-data';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';

function AddNotePage() {
    const navigate = useNavigate();

    function onAddNoteHandler(note) {
        addNote(note)
        navigate('/');
    }

    return (
            <NoteInput addNote={onAddNoteHandler} />
    )
}

export default AddNotePage;