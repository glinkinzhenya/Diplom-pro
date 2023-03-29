import React from 'react';
import { Box, Grid, styled } from '@mui/material';
import Header from '../components/Templates/Header/Header';
import Footer from '../components/Templates/Footer/Footer';
import NavBar from '../components/Templates/NavBar/NavBar';

import './GridTemplate.css';

const HeaderWrapper = styled(Box)(() => ({
    height: '14vh',
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
    height: '68.6vh',
    backdropFilter: 'blur(5px)',
    background: 'rgba(0, 0, 0, 0.404)',
}));

const BodyWrapper = styled(Box)(() => ({
    backdropFilter: 'blur(5px)',
    background: 'rgba(0, 0, 0, 0.404)',
    borderRadius: '20px',
    height: '68.5vh',
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

export default function GridTemplate({ children }) {
    return (
        <div className='GridTemplate'>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12}>
                    <HeaderWrapper>
                        <Header />
                    </HeaderWrapper>
                </Grid>
                <Grid item md={2} lg={2} display={{ xs: 'none', sm: 'none', md: 'block' }}>
                    <NavBarWrapper>
                        <NavBar />
                    </NavBarWrapper>
                </Grid>
                <Grid item xs={12} sm={12} md={10} lg={10}>
                    <BodyWrapper>
                        {children}
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

