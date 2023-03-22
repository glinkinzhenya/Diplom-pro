import { Component } from "react";
import { Box, styled } from "@mui/material";
import { trainers } from "../../../api";
import HalfRating from "../../NavBar/Rating";
import "./NavBar.css";

const NavBarWrapper = styled(Box)(() => ({
    padding: "20px",
    overflow: "scroll",
    height: "58vh",
}));

export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            trainersData: [],
        };
    }

    async componentDidMount() {
        try {
            const { data } = await trainers.fetch();
            this.setState({ trainersData: data });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const { trainersData } = this.state;

        return (
            <NavBarWrapper>
                <h2 className="popularPrograms">Популярні тренери</h2>
                {trainersData.map((trainer) => (
                    <div className="trainer" key={trainer.id}>
                        <img src={trainer.img} alt="" />
                        <div>{trainer.name}</div>
                        <HalfRating trainerImg={trainer.rating} />
                    </div>
                ))}
            </NavBarWrapper>
        );
    }
}