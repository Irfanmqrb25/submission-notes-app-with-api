import React, { useState, useEffect } from 'react';
import NoteDetail from '../components/NoteDetail';
import NoteListEmpty from '../components/NoteListEmpty';
import { deleteNote, archiveNote, unarchiveNote, getNote } from '../utils/network-data';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes, { func } from "prop-types";

function DetailPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [note, setNote] = useState('');

    async function onDeleteHandler(id) {
        await deleteNote(id);
        navigate('/');
    }

    async function onArchiveHandler(id) {
        await archiveNote(id);
        navigate('/');
    }

    async function onUnarchiveHandler(id) {
        await unarchiveNote(id);
        navigate('/archives');
    }

    useEffect(() => {
        getNote(id).then((data) => {
            setNote(data.data);
        });
    }, []);

    if (note === '') {
        return <NoteListEmpty /> ;
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