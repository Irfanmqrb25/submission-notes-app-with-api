import React from 'react';
import { showFormattedDate } from '../utils/index';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import UnArchiveButton from './UnArchiveButton';
import PropTypes from "prop-types";

function NoteDetail({ id, title, createdAt, body, onDelete, onArchive, onUnArchive, archived }) {

    return (
        <section className='detail-page'>
            <h3 className='detail-page__title'>{title}</h3>
            <p className='detail-page__createdAt'>{showFormattedDate(createdAt)}</p>
            <div className='detail-page__body'>{body}</div>
            <div className='detail-page__action'>
                {archived ? <UnArchiveButton id={id} onUnArchive={onUnArchive} /> 
                : <ArchiveButton id={id} onArchive={onArchive} /> }
                
                
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </section>
    )
}

NoteDetail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnArchive: PropTypes.func.isRequired,
    archived: PropTypes.bool.isRequired,
}

export default NoteDetail;
