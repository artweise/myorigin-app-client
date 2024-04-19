import styled from 'styled-components';

export const PageContainer = styled.div`
  margin-top: 336px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FamilyTreesContainer = styled.div`
  display: grid;
  margin: 0 auto;
  width: 60vw;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  column-gap: 24px;
  row-gap: 24px;
`;
