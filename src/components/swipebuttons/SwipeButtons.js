import React from 'react'
import './swipebuttons.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

const SwipeButtons = () => {
    return (
        <div className='swipebuttons'>
            <IconButton className='swipebuttons_repeat'>
                <ReplayIcon className='swipebuttons_button' fontSize='large' />
            </IconButton>
            <IconButton className='swipebuttons_left'>
                <CloseIcon className='swipebuttons_button' fontSize='large' />
            </IconButton>
            <IconButton className='swipebuttons_star'>
                <StarRateIcon className='swipebuttons_button' fontSize='large' />
            </IconButton>
            <IconButton className='swipebuttons_right'>
                <FavoriteIcon className='swipebuttons_button' fontSize='large' />
            </IconButton>
            <IconButton className='swipebuttons_lightning'>
                <FlashOnIcon className='swipebuttons_button' fontSize='large' />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
