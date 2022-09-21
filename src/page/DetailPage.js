import React, { useState } from 'react';
import NoteDetail from '../components/NoteDetail';
import { deleteNote, archiveNote, unarchiveNote, getNote } from '../utils/network-data';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes, { func } from "prop-types";

function DetailPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [note, setNote] = useState('');
    getNote(id).then((data) => {
        setNote(data.data);
    });
    function onDeleteHandler(id) {
        deleteNote(id);
        navigate('/')
    }
    function onArchiveHandler(id) {
        archiveNote(id);
        navigate('/');
    }
    async function onUnarchiveHandler(id) {
        unarchiveNote(id);
        navigate('/archives');
    }
    return (
        <NoteDetail
            {...note}
            id={id}
            onArchive={onArchiveHandler}
            onUnArchive={onUnarchiveHandler}
            onDelete={onDeleteHandler}
        />
    )
}

export default DetailPage;