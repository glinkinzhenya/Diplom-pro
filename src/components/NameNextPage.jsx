import React from "react";
import { trainings } from './Templates/Main/Main';
import { nameButton } from './Templates/Main/ComponentMain/TrainingCard';
import './NameNextPage.css';

export default function NameNextPage() {
  console.log(trainings);
  let data = null;

  {
    trainings.map(i => {
      if (i.name === nameButton) {
        console.log(i.name);
        console.log(i.info);
        data = i;
      }
    });
  }

  return (

    <>
      {/* <h1>{data.name}</h1>
            <h2>{data.info}</h2> */}
      {/* <img src={data.image} alt="" /> */}

      <div className='block'>
        {
          data.gallery.map((i) => (
            <div className='wrapper'>
              <img src={i} alt="" />
            </div>
          ))
        }
      </div>
      <h2>{data.fullInfo}</h2>
    </>
  );
}
