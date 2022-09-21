import React from "react";
import PropTypes from 'prop-types';
import { LocaleConsumer } from "../context/LocaleContext";


function SearchBar({ keyword, keywordChange }) {
    return (
        <LocaleConsumer>
            {
                ({ locale }) => {
                    return (
                        <section className="search-bar">
                            <input
                                type="text"
                                placeholder={locale === "id" ? "Cari berdasarkan judul ..." : "Search by title ..."}
                                value={keyword}
                                onChange={(event) => keywordChange(event.target.value)}
                            />
                        </section>
                    )
                }
            }
        </LocaleConsumer>
    )
}

SearchBar.propType = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired,
}

export default SearchBar;

