import React, { useState } from 'react';
import NoteDetail from '../components/NoteDetail';
import { deleteNote, archiveNote, unarchiveNote } from '../utils/network-data';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes, { func } from "prop-types";
import { getNote } from '../utils/network-data';
import { showFormattedDate } from '../utils/index';
import DeleteButton from '../components/DeleteButton';
import ArchiveButton from '../components/ArchiveButton';
import UnArchiveButton from '../components/UnArchiveButton';

// function DetailPageWrapper() {
//     const { id } = useParams();

//     function onDeleteHandler(id) {
//         deleteNote(id);
//     }

//     function onArchiveHandler(id) {
//         archiveNote(id);
//     }

//     function onUnArchiveHandler(id) {
//         unarchiveNote(id);
//     }

//     return <DetailPage id={id} onDelete={onDeleteHandler} onArchive={onArchiveHandler} onUnArchive={onUnArchiveHandler} />;
// }

// class DetailPage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             note: getNote(props.id)
//         }
//     }

//     render() {
//         return (
//             <NoteDetail {...this.state.note} onDelete={deleteNote} onArchive={archiveNote} onUnArchive={unarchiveNote} />
//         )
//     }
// }

// DetailPage.propTypes = {
//     id: PropTypes.string.isRequired,
// };

// export default DetailPageWrapper;

function HomePage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [note, setNote] = useState('');

    getNote(id).then((data) => {
        setNote(data.data);
    });

    function onDeleteHandler(id) {
        deleteNote(id);
    }

    function onArchiveHandler(id) {
        archiveNote(id);
    }

    async function onUnarchiveHandler(id) {
        unarchiveNote(id);
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

export default HomePage;