import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons'
//Components
import youtubeLogo from '../assets/youtube.png'

//Styles
import './navbar.css'

function navbar(props) {
    return (
        <div className="container-navbar">
            <nav className="navbar-component">
                <button className="navbar-component__menu" onClick={() => { props.toggleS() }}>
                    <FontAwesomeIcon className="navbar-component__menu__icon" icon={faBars} />
                </button>
                <a className="navbar-component__logo" href="/#">
                    <img src={youtubeLogo} width="30" height="30" alt="" />
                    <span className="navbar-component__logo__text">PaheTube</span>
                </a>
                <form className="navbar-component__form">
                    <input className="navbar-component__form__input" type="search" placeholder="Search videos" aria-label="Search" />
                    <button className="navbar-component__form__search" type="submit">
                        <FontAwesomeIcon className="navbar-component__form__logo" icon={faSearch} />
                    </button>
                </form>
                <button className="navbar-component__login_button">
                    <FontAwesomeIcon className="navbar-component__login_button__icon" icon={faUserCircle} />
                    <span className="navbar-component__login_button__text">LOGIN</span>
                </button>
                {/* <img src={lightsPhoto} alt="" className="navbar-component__login__pic" /> */}
            </nav>
        </div>
    )
}

export default navbar;
