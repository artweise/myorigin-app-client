import React from 'react';
import { Typography } from '@mui/material';
import { Container, LogoContainer, FlexRow, logoTheme, sloganTheme } from './style';
import { ThemeProvider } from '@mui/system';

const Home = () => {
  return (
    <>
      <Container>
        <LogoContainer>
          <ThemeProvider theme={logoTheme}>
            <Typography
              variant='h2'
              align='center'
              width='8vw'
              sx={{ mt: 3, fontWeight: 500 }}
              gutterBottom
            >
              MY
            </Typography>
            <img
              width='100'
              height='100'
              src='https://img.icons8.com/carbon-copy/100/deciduous-tree.png'
              alt='deciduous-tree'
            />
            <Typography
              variant='h2'
              align='center'
              width='10vw'
              sx={{ mt: 3, fontWeight: 500 }}
              gutterBottom
            >
              ORIGIN
            </Typography>
          </ThemeProvider>
        </LogoContainer>
        <FlexRow>
          <ThemeProvider theme={sloganTheme}>
            <Typography
              variant='h4'
              align='center'
              width='50vw'
              sx={{ mt: 5, ml: 8, fontWeight: 900 }}
              gutterBottom
            >
              Every Leaf Tells a Story
            </Typography>
          </ThemeProvider>
        </FlexRow>
      </Container>
    </>
  );
};

export default Home;
