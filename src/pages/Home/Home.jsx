import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  PageContainer,
  Container,
  LogoContainer,
  FlexRow,
  logoTheme,
  sloganTheme,
  buttonTheme,
} from './style';
import { ThemeProvider } from '@mui/system';
import Button from '../../components/AppComponents/Button/Button';

const Home = () => {
  return (
    <>
      <Container>
        <PageContainer>
          <LogoContainer>
            <ThemeProvider theme={logoTheme}>
              <Typography variant='h2' sx={{ fontWeight: 500 }}>
                MY
              </Typography>
              <img
                width='100'
                height='100'
                src='https://img.icons8.com/carbon-copy/100/deciduous-tree.png'
                alt='deciduous-tree'
              />
              <Typography variant='h2' sx={{ fontWeight: 500 }}>
                ORIGIN
              </Typography>
            </ThemeProvider>
          </LogoContainer>
          <FlexRow>
            <ThemeProvider theme={sloganTheme}>
              <Typography variant='h4' sx={{ mt: 2, fontWeight: 900 }} gutterBottom>
                Every Leaf Tells a Story
              </Typography>
            </ThemeProvider>
          </FlexRow>
          <div style={{ marginTop: '0.5rem' }}>
            <ThemeProvider theme={buttonTheme}>
              <FlexRow>
                <Link to='/familytrees'>
                  <Button sx={{ mt: 6, fontWeight: 500, color: 'secondary' }}>Try now</Button>
                </Link>
              </FlexRow>
            </ThemeProvider>
          </div>
        </PageContainer>
      </Container>
    </>
  );
};

export default Home;
