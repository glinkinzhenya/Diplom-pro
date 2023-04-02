import React, { useEffect, useState } from 'react';
import TrainingCard from '../../components/Templates/Main/ComponentMain/TrainingCard';
import { classes } from '../../api';
import './Trainings.css';

export default function Trainings() {
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

  const newTrainings = JSON.stringify(trainingsData);
  localStorage.setItem('newTrainings', newTrainings);
  localStorage.setItem('searchLocal', newTrainings);

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
