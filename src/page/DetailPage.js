import React from 'react';
import NoteDetail from '../components/NoteDetail';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';
import { useParams } from 'react-router-dom';
import PropTypes from "prop-types";

function DetailPageWrapper() {
    const { id } = useParams();

    function onDeleteHandler(id) {
        deleteNote(id);
    }

    function onArchiveHandler(id) {
        archiveNote(id);
    }

    function onUnArchiveHandler(id) {
        unarchiveNote(id);
    }

    return <DetailPage id={id} onDelete={onDeleteHandler} onArchive={onArchiveHandler} onUnArchive={onUnArchiveHandler} />;
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: getNote(props.id)
        }
    }

    render() {
        return (
            <NoteDetail {...this.state.note} onDelete={deleteNote} onArchive={archiveNote} onUnArchive={unarchiveNote} />
        )
    }
}

DetailPage.propTypes = {
    id: PropTypes.string.isRequired,
};

export default DetailPageWrapper;