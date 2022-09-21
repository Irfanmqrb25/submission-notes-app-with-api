import React from "react";
import { MdOutlineUnarchive } from 'react-icons/md';
import PropTypes from 'prop-types';
function UnArchiveButton({ id, onUnArchive }) {
    return (
        <button className='action' type='button' title='Aktifkan' onClick={() => { onUnArchive(id); }}>
            <MdOutlineUnarchive />
        </button>
    )
}
UnArchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onUnArchive: PropTypes.func.isRequired,
}
export default UnArchiveButton;