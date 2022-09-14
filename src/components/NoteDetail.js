import React from 'react';
import { showFormattedDate } from '../utils/index';
import { useState } from 'react';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function NoteDetail({ id, title, createdAt, body, onDelete, onArchive, isArchive }) {

    return (
        <section className='detail-page'>
            <h3 className='detail-page__title'>{title}</h3>
            <p className='detail-page__createdAt'>{showFormattedDate(createdAt)}</p>
            <div className='detail-page__body'>{body}</div>
            <div className='detail-page__action'>
                <ArchiveButton id={id} onArchive={onArchive} isArchive={isArchive} />
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </section>
    )
}

export default NoteDetail;
