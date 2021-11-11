import React from 'react'
import './header.css'
import PersonIcon from '@mui/icons-material/Person';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';

const Header = () => {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' className='header_icon' />
            </IconButton>
            <IconButton>
                <WhatshotIcon fontSize='large' className='header_logo' />
            </IconButton>
            <IconButton>
                <ForumIcon fontSize='large' className='header_icon' />
            </IconButton>
        </div>
    )
}

export default Header
