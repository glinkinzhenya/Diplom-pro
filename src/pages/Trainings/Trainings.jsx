import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TrainingCard from '../../components/Templates/Main/ComponentMain/TrainingCard';
import { trainingsThunks } from '../../store/modules/trainings';
import './Trainings.css';

export default function Trainings() {
  const { filterTrainings } = useSelector((state) => state.trainingsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(trainingsThunks.fetchTrainings());
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className='training_card_wrapper'>
      {filterTrainings.map((training) => (
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
