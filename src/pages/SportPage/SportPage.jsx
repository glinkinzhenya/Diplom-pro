import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import CreateModal from '../../components/Templates/Main/ComponentMain/CreateModal';
import './SportPage.css';

let resetDay;
let resetTime;
let resetNumber;

export function reset() {
  resetDay('');
  resetTime('');
  resetNumber('');
}

export default function NameNextPage() {
  let data = null;
  let time = {};

  const name = localStorage.getItem('newTrainings');

  const newName = JSON.parse(name);
  const nameButton = localStorage.getItem('trainingName');

  if (nameButton === null) {
    data = newName;
  } else {
    newName.map((i) => {
      if (i.name === nameButton) {
        data = i;
      }
      return ('');
    });
  }

  // Получаем ключи с Днями
  const daysKeys = Object.keys(data.days);

  // Таймер
  const [timeLeft, setTimeLeft] = useState(600);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    if (timeLeft <= 0) {
      // таймер истек
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [timeLeft]);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Выбор дня и времени
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [optionsDisabled, setOptionsDisabled] = useState(true);
  const [optionsButtonDisabled, setOptionsButtonDisabled] = useState(true);

  const number = selectedOption3 - 1;

  const [dataTime, setDataTime] = useState({});

  resetDay = setSelectedOption1;
  resetTime = setSelectedOption2;
  resetNumber = setSelectedOption3;

  const dataTimeKeys = Object.keys(dataTime);

  const handleOption1Change = (e) => {
    setSelectedOption1(e.target.value);
    time = data.days[e.target.value];

    setDataTime(time);

    setOptionsDisabled(false);

    setSelectedOption2('');
    setSelectedOption3('');
  };

  const handleOption2Change = (e) => {
    setSelectedOption2(e.target.value);
    setOptionsButtonDisabled(false);
    setSelectedOption3(dataTime[e.target.value]);
  };

  const [open, setOpenModal] = useState(false);

  const putNumberDays = async () => {
    await fetch(`https://64148167e8fe5a3f3a087de9.mockapi.io/api/v1/classes/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        days: {
          ...data.days, [selectedOption1]: { ...data.days[selectedOption1], [selectedOption2]: number },
        },
      }),
    });

    setOpenModal(true);
  };

  return (
    <>
      <div className='block'>
        {
          data.gallery.map((i, index) => (
            <div key={index} className='wrapper'><img src={i} alt='' /></div>
          ))
        }
      </div>
      <h2 className='title'>{data.fullInfo}</h2>
      <div className='input_form'>
        <div className='input_form_text'>
          <input type='text' placeholder='Ім`я' />
          <input type='number' placeholder='Телефон' />
        </div>
        <div className='formControl'>
          <select value={selectedOption1} onChange={handleOption1Change}>
            <option disabled selected value=''>Обрати день</option>
            {daysKeys.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select value={selectedOption2} onChange={handleOption2Change} disabled={optionsDisabled}>
            <option value=''>Обрати час</option>
            {dataTimeKeys.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className='formControl-day'>
          <p>Ви обрали день: {selectedOption1}</p>
          <p>та час: {selectedOption2}</p>
          <p>залишилось місць: {selectedOption3}</p>
        </div>
        <div>
          <p className='time'>Встигни записатись на тренування: {minutes}:{seconds < 10 ? '0' : ''}{seconds}</p>
        </div>
        <Button disabled={optionsButtonDisabled} onClick={putNumberDays} sx={{ fontSize: '11px', border: '1px solid' }} size='small'>Записатись</Button>
        <h2 className='card-name'>{data.name}</h2>
      </div>
      <CreateModal
        open={open}
        handleOnClose={() => setOpenModal(false)}
        imageSrc={data.image}
        trainingName={`Ви обрали день: ${selectedOption1}`}
        info={`в ${selectedOption2} чекаємо Вас у нашому клубі!`}
        ok={true}
      />
    </>
  );
}
