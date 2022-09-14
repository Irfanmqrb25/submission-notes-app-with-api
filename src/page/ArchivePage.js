import React from "react";
import NoteItemList from "../components/NoteItemList";
import SearchBar from "../components/SearchBar";
import NoteListEmpty from "../components/NoteListEmpty";
import { getArchivedNotes } from "../utils/local-data";


class ArchivePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getArchivedNotes(),
        };
    }

    render() {
        const notes = this.state.notes.filter((note) =>
            note.title.toLowerCase().includes(this.state.search)
        );
        const noteIsArchived = notes.filter((note) => {
            return note.archived === true
        });

        return (
            <section>
                <h2>Catatan Arsip</h2>
                <SearchBar />
                {noteIsArchived.length > 0 ? <NoteItemList notes={noteIsArchived} />
                    : <NoteListEmpty />}
            </section>
        );
    }
}

export default ArchivePage;