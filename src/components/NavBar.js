import React from 'react';
import SearchBar from './SearchBar';
import instaLogo from '../assets/instagram.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faWpexplorer} from '@fortawesome/free-brands-svg-icons';
import './NavBar.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className="outerNav">
                <div className="innerNav">
                    <div style={{justifySelf: "start"}}> <img src={instaLogo} width={30}/> </div>
                    <div><SearchBar /></div>
                    <div style={{justifySelf: "end"}}>
                        <ul className="navMenu">
                            <li> <FontAwesomeIcon icon={faHome} /> </li>
                            <li> <FontAwesomeIcon icon={faWpexplorer} /> </li>
                            <li> <FontAwesomeIcon icon={faHeart} /> </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;