import React from 'react';
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
  return (
    <NavBarWrapper>
      <h2 className='popularPrograms'>Меню</h2>
      <button className='item'>
        <Link
          style={{ display: 'block', padding: '10px' }}
          to={'/trainings'}
        >Вібир тренувань
        </Link>
      </button>
      <button className='item'>
        <Link
          style={{ display: 'block', padding: '10px' }}
          to={'/trainers'}
        >Наші тренери
        </Link>
      </button>
    </NavBarWrapper>
  );
}
