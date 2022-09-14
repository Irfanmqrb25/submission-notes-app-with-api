import React from 'react';
import NoteDetail from '../components/NoteDetail';
import { getNote, deleteNote, archiveNote } from '../utils/local-data';
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

    return <DetailPage id={id} onDelete={onDeleteHandler} onArchive={onArchiveHandler}/>;
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: getNote(props.id)
        }
    }

    render() {
        if (this.state.note === null) {
            return <p>Tidak ada catatan</p>
        }

        return (
            <NoteDetail {...this.state.note} onDelete={deleteNote} onArchive={archiveNote}/>
        )
    }
}

DetailPage.propTypes = {
    id: PropTypes.string.isRequired,
};

export default DetailPageWrapper;