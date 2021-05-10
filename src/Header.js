import React from 'react'
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import { IconButton, Icon } from '@material-ui/core';

function Header() {
    return (
        <div className='header'>
        <IconButton>
            <PersonIcon fontSize="large" className="header__icon"> </PersonIcon>
        </IconButton>

        <img className="header__logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder_logo_PNG2.png"
        alt=""></img>

        <IconButton>
            <ForumIcon fontSize="large" className="header__icon" ></ForumIcon>
        </IconButton>
        </div>   
    )
}

export default Header
