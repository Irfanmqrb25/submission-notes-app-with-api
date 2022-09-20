import React, { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { getActiveNotes } from "../utils/network-data";
import NoteItemList from "../components/NoteItemList";
import NoteListEmpty from "../components/NoteListEmpty";
import SearchBar from "../components/SearchBar";
import AddButton from "../components/AddButton";

function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = useState([]);
    const [keyword, setKeyword] = useState(() => {
        return searchParams.get('keyword') || ''
    });

    useEffect(() => {
        getActiveNotes().then(({ data }) => {
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
        <section className="homepage">
            <h2>Catatan Aktif</h2>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            {filteredNotes.length > 0 ? <NoteItemList notes={filteredNotes} />
                : <NoteListEmpty />}
            <AddButton />
        </section>
    )

}

export default HomePage;