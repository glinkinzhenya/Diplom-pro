import React from 'react';
import CallBack from './ComponentFooter/CallBack';
import './Footer.css';

export default function footer() {
  return (
    <>
      <div>
        <a href='https://www.instagram.com'>
          <img className='social' src='./img/instagram.png' alt='' />
        </a>
        <a href='https://www.facebook.com'>
          <img className='social' src='./img/facebook.png' alt='' />
        </a>
        <a href='https://web.telegram.org/z/'>
          <img className='social' src='./img/telegram.png' alt='' />
        </a>
      </div>
      <CallBack />
    </>
  );
}
