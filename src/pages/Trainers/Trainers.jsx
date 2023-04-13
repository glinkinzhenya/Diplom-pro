import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TrainingCard from '../../components/Templates/Main/ComponentMain/TrainingCard';
import { trainersThunks } from '../../store/modules/trainers';
import './Trainers.css';

export default function Trainers() {
  const { trainers } = useSelector((state) => state.trainersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(trainersThunks.fetchTrainers());
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <div className='trainersWrapper'>
        {trainers.map((trainers) => (
          <TrainingCard
            trainingName={trainers.name}
            imageSrc={trainers.img}
            info={trainers.fullInfo}
            key={trainers.id}
            on={'on'}
          />
        ))}
      </div>
    </>
  );
}
