import React, { useEffect, useState } from "react";
import TrainingCard from '../../Main/TrainingCard'
import { Box, styled } from '@mui/system';
import { classes } from "../../../api";

const TrainingCardWrapper = styled(Box)(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
    justifyContent: 'flex-start',
}));


export default function Trains() {
    const [trainingsData, setClasses] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await classes.fetch();
                setClasses(data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, [])



    return (
        <TrainingCardWrapper>

            {trainingsData.map(training => (
                <TrainingCard
                    trainingName={training.name}
                    imageSrc={training.image}
                    info={training.fullInfo}
                    key={training.id}
                />
            ))}
        </TrainingCardWrapper>
    )
}