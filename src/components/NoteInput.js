import React from "react";
import { HiCheck } from 'react-icons/hi'


class NoteInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState({ title: event.target.value });
    }

    onBodyChangeEventHandler(event) {
        this.setState({ body: event.target.innerHTML });
    }

    onSubmitEventHandler(event) {
        event.preventDefault()
        this.props.addNote(this.state)
    }


    render() {
        return (
            <section className="add-newpage">
                <div className="add-new-page__input">
                    <input
                    className="add-new-page__input__title"
                    placeholder="Catatan rahasia"
                    onChange={this.onTitleChangeEventHandler}
                    value={this.state.title}
                    />
                    <div
                    className='add-new-page__input__body'
                    contentEditable='true'
                    data-placeholder='Sebenarnya saya adalah ....'
                    onInput={this.onBodyChangeEventHandler}
                    value={this.state.body}>
                    </div>
                </div>
                <div className="add-new-page__action">
                    <button className="action" type="button" title="Simpan"
                    onClick={this.onSubmitEventHandler}>
                        <HiCheck />
                    </button>
                </div>
            </section >
        )
    }
}

export default NoteInput