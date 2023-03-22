import { Component } from "react";
import { Typography } from "@mui/material";
import './Header.css';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            inputWidth: '120px'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ inputWidth: '180px' });
        setTimeout(() => {
            this.setState({ inputWidth: '180px' });
        }, 0);
    }

    render() {
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
                    <input onClick={this.handleClick} style={{ width: this.state.inputWidth, transition: 'width 0.2s ease-in-out' }} type="text" placeholder="Пошук тренування" />
                </div>
            </>
        )
    }
}
