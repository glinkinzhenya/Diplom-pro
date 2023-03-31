import React, { useEffect, useState } from 'react';
import TrainingCard from './ComponentMain/TrainingCard';
import { classes } from '../../../api';
import './Main.css';

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
  localStorage.setItem('search', newTrainings);

  return (
      <div className='training_card_wrapper'>
      {trainingsData.map((training) => (
        <TrainingCard
          trainingName={training.name}
          imageSrc={training.image}
          info={training.fullInfo}
          key={training.id}
        />
      ))}
    </div>
  );
}
