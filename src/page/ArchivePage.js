import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes } from "../utils/network-data";
import NoteItemList from "../components/NoteItemList";
import SearchBar from "../components/SearchBar";
import NoteListEmpty from "../components/NoteListEmpty";

function ArchivePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = useState([]);
    const [keyword, setKeyword] = useState(() => {
        return searchParams.get('keyword') || ''
    });

    useEffect(() => {
        getArchivedNotes().then(({ data }) => {
            setNotes(data);
        });
    }, []);

    function onKeywordChangeHandler(keyword) {
        setKeyword(keyword);
        setSearchParams({ keyword });
    }

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(
            keyword.toLowerCase()
        );
    })

    return (
        <section>
            <h2>Catatan Arsip</h2>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            {filteredNotes.length > 0 ? <NoteItemList notes={filteredNotes} />
                : <NoteListEmpty />}
        </section>
    )
}


export default ArchivePage;