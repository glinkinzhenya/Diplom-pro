import React, { useState, useEffect } from 'react';
// import { trainings } from './Templates/Main/Main';
// import { nameButton } from './Templates/Main/ComponentMain/TrainingCard';
import './NameNextPage.css';
import { Button } from '@mui/material';


export default function NameNextPage() {

  let data = null;
  let time = [];

  const name = localStorage.getItem("newTrainings"); 

  let newName = JSON.parse(name);

  console.log(newName);


  const nameButton = localStorage.getItem("trainingName"); 

  {
    newName.map(i => {
      console.log(i);
      if (i.name === nameButton) {
        data = i;
      }
    });
  }

  // Получаем ключи с Днями
  console.log(data);
  const keys = Object.keys(data.days);



  // Таймер
  const [timeLeft, setTimeLeft] = useState(600);
  useEffect(() => {
    if (timeLeft <= 0) {
      // таймер истек
      clearInterval(timer);
    }
    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;



  // Выбор дня и времени
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [options2Disabled, setOptions2Disabled] = useState(true);

  const [huy, set] = useState([]);

  

  const handleOption1Change = (e) => {
    setSelectedOption1(e.target.value);

    time = data.days[e.target.value];
    set(time)
    console.log(time);

    setOptions2Disabled(false);
  };

  const handleOption2Change = (e) => {
    setSelectedOption2(e.target.value);
  };

  return (

    <>

      <div className='block'>
        {
          data.gallery.map((i) => (
            <div className='wrapper'>
              <img src={i} alt="" />
            </div>
          ))
        }
      </div>
      <h2 className="title">{data.fullInfo}</h2>

      <div className='position'>
        <p className='time'>Встигни записатись на тренування: {minutes}:{seconds < 10 ? '0' : ''}{seconds}</p>
      </div>

      <div className='input_form'>

        <div className='input_form_text'>
          <input type="text" placeholder='Ім`я' />
          <input type="number" placeholder='Телефон' />

          <Button sx={{ fontSize: '11px' }} size="small">Надіслати</Button>
        </div>

        <div className='formControl'>

          <select value={selectedOption1} onChange={handleOption1Change}>
            <option value="">Обрати день</option>
            {keys.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select value={selectedOption2} onChange={handleOption2Change} disabled={options2Disabled}>
            <option value="">Обрати час</option>
            {huy.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <p>Ви обрали день: {selectedOption1}</p>
          <p>та час: {selectedOption2}</p>

        </div>

      </div>

    </>
  );
}
