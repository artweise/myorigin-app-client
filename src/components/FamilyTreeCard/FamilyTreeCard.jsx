import { Typography, Tooltip } from '@mui/material';

import { StyledFamilyTreeCard, Description } from './style';

const FamilyTreeCard = ({ familyTree }) => {
  return (
    <StyledFamilyTreeCard color={familyTree.color}>
      <Typography variant='h5' sx={{ mb: 2 }} noWrap={true}>
        {familyTree.title}
      </Typography>
      <Description>
        {familyTree?.description && (
          <Typography variant='body1' gutterBottom>
            {familyTree?.description?.length > 100 ? (
              <>
                {familyTree.description.slice(0, 100)}
                <Tooltip
                  title={
                    familyTree?.description?.length > 100 ? familyTree.description.slice(100) : ''
                  }
                  placement='top'
                >
                  <span>...</span>
                </Tooltip>
              </>
            ) : (
              familyTree?.description || ''
            )}
          </Typography>
        )}
      </Description>
    </StyledFamilyTreeCard>
  );
};

export default FamilyTreeCard;
