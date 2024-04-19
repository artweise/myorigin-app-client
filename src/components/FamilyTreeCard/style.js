import styled, { css } from 'styled-components';
import { NEUTRAL_SHADES, GREEN_SHADES } from '../../utilities/globalStyles';

export const StyledFamilyTreeCard = styled.div`
  ${({ color = GREEN_SHADES[300] }) => css`
    height: 24vw;
    background: ${NEUTRAL_SHADES.WHITE};
    box-shadow: 4px 4px 16px 4px #d4d4d4;
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    border-top: 64px solid ${color};
    &:hover {
      box-shadow: 4px 4px 16px 4px #ababab;
    }
  `}
`;

export const EmptyCard = styled(StyledFamilyTreeCard)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-top: 64px solid ${NEUTRAL_SHADES[500]};
  .MuiSvgIcon-root.MuiSvgIcon-fontSizeLarge {
    width: 60%;
    height: 60%;
    fill: ${NEUTRAL_SHADES[600]};
  }
`;

export const Description = styled.div`
  height: 60%;
`;
