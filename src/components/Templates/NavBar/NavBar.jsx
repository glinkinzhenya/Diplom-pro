import React, { useEffect, useState } from 'react';
import { Box, styled } from '@mui/material';
import { trainers } from '../../../api';
import Rating from './ComponentNavBar/Rating';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBarWrapper = styled(Box)(() => ({
  padding: '20px',
  overflow: 'scroll',
  height: '58vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export default function Navbar() {
  // const [trainersData, setClasses] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data } = await trainers.fetch();
  //       setClasses(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   })();
  // }, []);

  return (
    <NavBarWrapper>
      <h2 className='popularPrograms'>Меню</h2>
      <button className='item'>
        <Link
          to={`/gym_team`}
        >Вібир тренувань
        </Link>
      </button>
      <button className='item'>
        <Link
          to={`/gym_team/trainers`}
        >Наші тренери
        </Link>
      </button>
    </NavBarWrapper>
  );
}
