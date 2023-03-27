import React from 'react';
import { trainings } from './Templates/Main/Main';
import { nameButton } from './Templates/Main/ComponentMain/TrainingCard';




export default function NameNextPage() {
    console.log(trainings);
    let data = null;

    console.log(nameButton);
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
            <h1>{data.name}</h1>
            <h2>{data.info}</h2>
        </>
    );
}
