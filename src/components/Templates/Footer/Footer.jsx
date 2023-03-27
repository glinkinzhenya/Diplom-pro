import React from 'react';
import CallBack from './ComponentFooter/CallBack';
import './Footer.css';

export default function footer() {
  return (
    <>
      <div>
        <a href='https://web.telegram.org/z/'>
          <img className='social'
            src='https://www.freepnglogos.com/uploads/telegram-png/telegram-software-wikipedia-2.png' alt='' />
        </a>
        <a href='https://www.facebook.com'>
          <img className='social'
            src='https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-clipart-flat-facebook-logo-png-icon-circle-22.png' alt='' />
        </a>
        <a href='https://www.instagram.com'>
          <img className='social'
            src='https://www.freepnglogos.com/uploads/instagram-icon/libris-mrs-librarian-instagram-logo-35.png' alt='' />
        </a>
      </div>
      <CallBack />
    </>
  );
}
