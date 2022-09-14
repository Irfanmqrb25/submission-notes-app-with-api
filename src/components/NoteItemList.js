import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from 'prop-types';

function NoteItemList({ notes, onDelete, onArchive }) {
    return (
        <section className="notes-list">
            {notes.map((note) => (
                <NoteItem 
                key={note.id} 
                id={note.id} 
                onDelete={onDelete} 
                onArchive={onArchive}
                isArchive={note.archived}
                {...note} />))
            }
        </section>
    )
}

NoteItemList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object.isRequired),
}

export default NoteItemList;