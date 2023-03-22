import React from 'react';
import { Box, Grid, Item, styled } from '@mui/material';
import Header from './components/Templates/Header/Header'
import Footer from './components/Templates/Footer/Footer'
import NavBar from './components/Templates/NavBar/NavBar'
import Trains from './components/Templates/Main/Trainings'
import './App.css';
import { padding } from '@mui/system';

const HeaderWrapper = styled(Box)(() => ({
  height: '15vh',
  borderRadius: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0px 30px',
  backdropFilter: 'blur(5px)',
  background: 'rgba(0, 0, 0, 0.404)',
}));

const NavBarWrapper = styled(Box)(() => ({
  borderRadius: '20px',
  height: '67.6vh',
  backdropFilter: 'blur(5px)',
  background: 'rgba(0, 0, 0, 0.404)',
}));

const BodyWrapper = styled(Box)(() => ({
  backdropFilter: 'blur(5px)',
  background: 'rgba(0, 0, 0, 0.404)',
  borderRadius: '20px',
  height: '67.5vh',
  overflow: 'auto',
}));

const FooterWrapper = styled(Box)(() => ({
  height: '10vh',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '20px',
  justifyContent: 'space-between',
  padding: '0px 20px',

  backdropFilter: 'blur(5px)',
  background: 'rgba(0, 0, 0, 0.404)',
}));


function App() {
  return (
    <div className='App'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
        </Grid>
        <Grid item sm={2} md={2} lg={2} display={{ xs: "none", sm: "block" }}>
          <NavBarWrapper>
            <NavBar />
          </NavBarWrapper>
        </Grid>
        <Grid item xs={12} sm={10} md={10} lg={10}>
          <BodyWrapper>
            <Trains />
          </BodyWrapper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
