import React, { useState, useImperativeHandle, forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCompass, faPlay } from '@fortawesome/free-solid-svg-icons'

//Styles
import '../styles/sidebar.css'

const Sidebar = forwardRef((props, ref) => {

    const [value, setValue] = useState(true);

    const changeValue = () => {
        value ? setValue(false) : setValue(true);
        return value;
    };

    useImperativeHandle(ref, () => {
        return {
            changeValue: changeValue
        };
    });

    //Dinamic styles
    var moveIcons = {
        marginLeft: value ? '20px' : '175px',
    }

    var moveLeters = {
        opacity: value ? '100%' : '0%',
    }

    return (
        <div className="sidebar-container" style={{ marginLeft: value ? '0px' : '-160px' }}>
            <ul className="sidebar-container__list">
                <li>
                    <Link
                        style={{ textDecoration: 'none' }}
                        className="sidebar-container__list__link"
                        to="/"
                    >
                        <FontAwesomeIcon
                            className="sidebar-container__list__link__icon"
                            icon={faHome}
                            style={moveIcons}
                        />
                        <span style={moveLeters}>Home</span>
                    </Link>
                </li>
                <li>
                    <Link
                        style={{ textDecoration: 'none' }}
                        className="sidebar-container__list__link"
                        to="/explore"
                    >
                        <FontAwesomeIcon
                            className="sidebar-container__list__link__icon"
                            icon={faCompass}
                            style={moveIcons}
                        />
                        <span style={moveLeters}>Explore</span>
                    </Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'none' }} className="sidebar-container__list__link" to="/subscriptions">
                        <FontAwesomeIcon
                            className="sidebar-container__list__link__icon"
                            icon={faPlay}
                            style={moveIcons}
                        />
                        <span style={moveLeters}>Subscriptions</span>
                    </Link>
                </li>
            </ul>
            <hr />
        </div>
    )
});

export default Sidebar
