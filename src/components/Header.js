import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({name}) => {
    return(
            <nav className='header'>
                <a href="/" className='siteTitle'>jp.</a>
                
                    <ul>
                        <li>
                            <a href="/">about</a>
                        </li>
                        <li>
                            <a href="/">resume</a>
                        </li>
                        <li>
                            <a href="/">projects</a>
                        </li>
                        <li>
                            <a href="/">blog</a>
                        </li>
                    </ul>
                </nav>
    )
}


 
export default Header;