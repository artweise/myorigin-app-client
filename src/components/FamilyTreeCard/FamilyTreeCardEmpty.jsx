import Tooltip from '@mui/material/Tooltip';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import { EmptyCard } from './style';

const FamilyTreeCardEmpty = ({ onClick }) => {
  return (
    <EmptyCard onClick={onClick}>
      <Tooltip title='Add new family tree' placement='top'>
        <GroupAddRoundedIcon fontSize='large' />
      </Tooltip>
    </EmptyCard>
  );
};

export default FamilyTreeCardEmpty;
