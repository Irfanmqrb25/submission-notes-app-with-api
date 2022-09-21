import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from 'prop-types';

function NoteItemList({ notes }) {
    return (
        <section className="notes-list">
            {notes.map((note) => (
                <NoteItem 
                key={note.id} 
                id={note.id} 
                {...note} />))
            }
        </section>
    )
}

NoteItemList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object.isRequired),
}

export default NoteItemList;