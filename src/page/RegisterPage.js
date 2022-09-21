import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../utils/network-data';
import RegisterInput from '../components/RegisterInput';
import { LocaleConsumer } from '../context/LocaleContext';


function RegisterPage() {
    const navigate = useNavigate();

    async function onRegisterHandler(user) {
        const { error } = await register(user);
        if (!error) {
            navigate('/');
        }
    }

    return (
        <LocaleConsumer>
            {
                ({ locale }) => {
                    return (
                        <section className='register-page'>
                            <h2>
                                {locale === "id" ? "Isi form untuk mendaftar akun" : "Fill the form to register account"}
                            </h2>
                            <RegisterInput register={onRegisterHandler} />
                            <p>{locale === "id" ? "Sudah punya akun?" : "Already have an account?"}
                                <Link to="/">{locale === "id" ? " Login di sini" : " Login Here"}</Link>
                            </p>
                        </section>
                    )
                }
            }
        </LocaleConsumer>
    )
}

export default RegisterPage;