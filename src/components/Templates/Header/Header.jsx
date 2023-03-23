import React, { useEffect, useState }  from "react";
import { Typography } from "@mui/material";
import './Header.css';
import { trainers } from "../../../api";

export default function Header() {
    const [inputWidth, setInputWidth] = useState('120px');

    const handleFocus = () => {
        setInputWidth('180px');
    };

    const handleBlur = () => {
        setInputWidth('120px');
    };

    const [trainersData, setClasses] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await trainers.fetch();
                setClasses(data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, [])

    console.log(trainersData);

    return (
        <>
            <Typography variant="h3" component="h2" color='white'>
                Gym Team
            </Typography>
            <div>
                <input
                    onClick={handleFocus}
                    onBlur={handleBlur}
                    style={{ width: inputWidth, transition: 'width 0.2s ease-in-out' }}
                    type="text"
                    placeholder="Пошук тренування"
                />
            </div>
        </>
    );
}