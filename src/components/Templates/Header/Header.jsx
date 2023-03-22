import React, { useEffect, useRef, useState }  from "react";
import { Typography } from "@mui/material";
import './Header.css';

export default function Header() {
    const [inputWidth, setInputWidth] = useState('120px');

    const handleClick = () => {
        setInputWidth('180px');
        setTimeout(() => {
            setInputWidth('180px');
        }, 0);
    };


    return (
        <>
            <Typography
                variant="h3"
                component="h2"
                color='white'
            >
                Gym Team
            </Typography>
            <div>
                <input onClick={handleClick} style={{ width: inputWidth, transition: 'width 0.2s ease-in-out' }} type="text" placeholder="Пошук тренування" />
            </div>
        </>

    )
}