import React from 'react';
import { Link } from 'react-router-dom';
import { LocaleConsumer } from '../context/LocaleContext';

function Navigation() {
    return (
        <LocaleConsumer>
            {
                ({ locale }) => {
                    return (
                        <nav className='navigation'>
                            <ul>
                                <li><Link to="/archives">{locale === "id" ? "Terarsip" : "Archived"}</Link></li>
                            </ul>
                        </nav>
                    )
                }
            }
        </LocaleConsumer>
    )
}

export default Navigation;
