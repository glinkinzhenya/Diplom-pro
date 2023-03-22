import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { trainers } from "../../../api";
import HalfRating from "../../NavBar/Rating";
import './NavBar.css';


const NavBarWrapper = styled(Box)(() => ({
    padding: '20px',
    overflow: 'scroll',
    height: '58vh',
}));



export default function Navbar() {

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

    return (
        <NavBarWrapper>
            <h2 className="popularPrograms">Популяні тренери</h2>
            {trainersData.map(trainers => (
                <div className="trainer">
                    <img src={trainers.img} alt="" />
                    <div>{trainers.name}</div>
                    <HalfRating
                        trainerImg={trainers.rating}
                        key={trainers.id}
                    />
                </div>
            ))}
        </NavBarWrapper>
    )
}