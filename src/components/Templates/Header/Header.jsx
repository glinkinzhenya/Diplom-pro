import React, { useState } from 'react';
import './Header.css';
import { trainings } from '../Main/Main';

export default function Header() {
  const [inputWidth, setInputWidth] = useState('120px');

  const handleFocus = () => {
    setInputWidth('180px');
  };

  const handleBlur = () => {
    setInputWidth('120px');
  };

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    // Обработка нажатия кнопки 'ОК'
    {
      trainings.map(i => {
        if (i.name === inputValue) {
          console.log(inputValue);
          console.log(i.info);
        }
      });
    }
  };

  return (
    <>
      <h1 className='header-title'>Gym Team</h1>
      <div>
        <input
          onClick={handleFocus}
          onBlur={handleBlur}
          value={inputValue}
          onChange={handleInputChange}
          style={{ width: inputWidth, transition: 'width 0.2s ease-in-out' }}
          type='text'
          placeholder='Пошук тренування'
        />
        <button className='headerButton' onClick={handleButtonClick}>ОК</button>
      </div>
    </>
  );
}
