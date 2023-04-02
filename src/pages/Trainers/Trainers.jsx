import React, { useEffect, useState } from 'react';
import { trainers } from '../../api';
import TrainingCard from '../../components/Templates/Main/ComponentMain/TrainingCard';
import './Trainers.css';

export default function Trainers() {
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
  }, []);

  return (
    <>
      <div className='trainersWrapper'>
        {trainersData.map((trainers) => (
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
