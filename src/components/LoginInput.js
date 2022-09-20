import useInput from "../customhooks/useInput";
import PropTypes from 'prop-types';

function LoginInput({ login }) {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const onSubmitEventHandler = (event) => {
        event.preventDefault();
        login({ email, password });
    }

    return (
        <div className="input-login">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={onEmailChange} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={onPasswordChange} />
            <button type='button' onClick={onSubmitEventHandler}>Login</button>
        </div>
    )
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired
}

export default LoginInput