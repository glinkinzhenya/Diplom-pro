import React, { useEffect, useState } from 'react';
import {
  Box,
  styled,
} from '@mui/system';
import TrainingCard from './ComponentMain/TrainingCard';
import { classes } from '../../../api';

const TrainingCardWrapper = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  padding: '15px',
  justifyContent: 'flex-start',
  
}));

export let trainings = [];

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
  }, []);

  trainings = trainingsData;

  const newTrainings = JSON.stringify(trainingsData);
  localStorage.setItem('newTrainings', newTrainings);

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
