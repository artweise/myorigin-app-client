import styled from 'styled-components';
import { createTheme } from '@mui/material/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  justify-content: space-around;
  margin: -120px 0px -30px;
  padding-right: 50px;
`;

export const FlexRow = styled.div`
  display: flex;
  color: #34b38a;
`;

export const logoTheme = createTheme({
  typography: {
    fontFamily: ['Montserrat'].join(','),
  },
});

export const sloganTheme = createTheme({
  typography: {
    fontFamily: ['Dancing Script'].join(','),
  },
});
