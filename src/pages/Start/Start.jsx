import React, { useEffect, useState } from 'react';
import './Start.css';

export default function Start() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const [text, setText] = useState('');
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showText) {
      const words = 'Ти вже спалив 10 калорій коли зайшов на цю сторінку. Так тримати. Обирай тренування!';
      let i = -1;
      const interval = setInterval(() => {
        setText((prevText) => prevText + words[i]);
        i += 1;
        if (i === (words.length - 1)) clearInterval(interval);
      }, 20);
      return () => clearInterval(interval);
    }
  }, [showText]);

  return (
    <>
      <div>
        <img className={isLoaded ? 'logo loaded' : 'logo'} alt='logo' src='./img/logoGymTeam.png' />
      </div>
      <div className='wtiteText'>{text}</div>
    </>
  );
}
