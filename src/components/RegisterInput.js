import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../customhooks/useInput';
import { register } from '../utils/network-data';
import { useNavigate } from "react-router-dom";

function RegisterInput() {
    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const navigate = useNavigate()
    const onSubmitEventHandler = (event) => {
        event.preventDefault();
        register({ name, email, password });
        navigate('/');
    }

    return (
        <div className="input-register">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={onNameChange} />
            <label htmlFor='email'>Email</label>
            <input type="email" id="email" value={email} onChange={onEmailChange} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" autoComplete="current-password" value={password} onChange={onPasswordChange} />
            <button type='button' onClick={onSubmitEventHandler}>Register</button>
        </div>
    )
}

export default RegisterInput;







