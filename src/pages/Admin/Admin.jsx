import React from 'react';
import './Admin.css';

export default function Admin() {
  return (<>
    <div className='admin'>
      <input type="text" placeholder='Логін' />
      <input type="password" placeholder='Пароль' />
      <button>Надіслати</button>
    </div>

  </>);
}
