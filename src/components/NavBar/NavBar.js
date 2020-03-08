import React from 'react';
import SearchBar from './SearchBar';
import instaLogo from '../../assets/instagram.png';
import SVGIcon from '../SVGIcon';
import faHome from '../../assets/icons/house.svg';
import faHeart from '../../assets/icons/heart.svg';
import faExplore from '../../assets/icons/magnifying-glass.svg';
import ProfileIcon from '../ProfileIcon';
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
                            <li> <SVGIcon icon={faHome} /> </li>
                            <li> <SVGIcon icon={faExplore} /> </li>
                            <li> <SVGIcon icon={faHeart} /> </li>
                            <li> <ProfileIcon /> </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;