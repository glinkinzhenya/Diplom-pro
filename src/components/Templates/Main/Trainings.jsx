import { Component } from "react";
import TrainingCard from "../../Main/TrainingCard";
import { Box, styled } from "@mui/system";
import { classes } from "../../../api";

const TrainingCardWrapper = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    padding: "20px",
    justifyContent: "flex-start",
}));

export default class Trains extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trainingsData: [],
        };
    }

    async componentDidMount() {
        try {
            const { data } = await classes.fetch();
            this.setState({ trainingsData: data });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const { trainingsData } = this.state;

        return (
            <TrainingCardWrapper>
                {trainingsData.map((training) => (
                    <TrainingCard
                        trainingName={training.name}
                        imageSrc={training.image}
                        info={training.fullInfo}
                        key={training.id}
                    />
                ))}
            </TrainingCardWrapper>
        );
    }
}
