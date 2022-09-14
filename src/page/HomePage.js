import React from "react";
import { useSearchParams } from 'react-router-dom';
import { getAllNotes, } from "../utils/local-data";
import NoteItemList from "../components/NoteItemList";
import NoteListEmpty from "../components/NoteListEmpty";
import SearchBar from "../components/SearchBar";
import AddButton from "../components/AddButton";

function HomepageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}


class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: getAllNotes(),
            keyword: props.defaultKeyword || '',
        }
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this)
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });
        this.props.keywordChange(keyword);
    }


    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });

        const noteIsActive = notes.filter((note) => {
            return note.archived === false
        });

        return (
            <section className="homepage">
                <h2>Catatan Aktif</h2>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                {noteIsActive.length > 0 ? <NoteItemList notes={noteIsActive}  />
                    : <NoteListEmpty/>}

                <AddButton />
            </section>
        )
    }
}

export default HomepageWrapper;