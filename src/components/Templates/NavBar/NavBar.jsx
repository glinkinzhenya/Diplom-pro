import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, styled } from '@mui/material';
import './NavBar.css';

const NavBarWrapper = styled(Box)(() => ({
  padding: '20px',
  height: '58vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export default function Navbar() {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowDiv(true);
    }, 2000);
  }, []);

  const opacity = {
    opacity: showDiv ? 1 : 0.0,
    transition: 'opacity 1s ease-in-out',
  };

  const displayBlock = () => {
    localStorage.setItem('displayBlock', 'true');
  };

  return (
    <NavBarWrapper>
      <h2 className='popularPrograms'>Меню</h2>
      <button onClick={displayBlock} style={opacity} className='item'>
        <Link
          style={{ display: 'block', padding: '10px' }}
          to={'/trainings'}
        >Вібир тренувань
        </Link>
      </button>
      <button style={opacity} className='item'>
        <Link
          style={{ display: 'block', padding: '10px' }}
          to={'/trainers'}
        >Наші тренери
        </Link>
      </button>
    </NavBarWrapper>
  );
}
