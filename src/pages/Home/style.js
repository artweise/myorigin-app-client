import styled from 'styled-components';
import { createTheme } from '@mui/material/styles';
import { GREEN_SHADES, PURPLE_SHADES } from '../../utilities/globalStyles';

export const PageContainer = styled.div`
  margin-top: 336px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FlexRow = styled.div`
  display: flex;
  color: ${GREEN_SHADES[500]};
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

export const buttonTheme = createTheme({
  palette: {
    primary: {
      main: GREEN_SHADES[600],
    },
    secondary: {
      main: PURPLE_SHADES[700],
    },
  },
});
