// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useQuery, useQueryClient, useMutation } from 'react-query';

import { PageContainer, FamilyTreesContainer } from './style';
import FamilyTreeCardEmpty from '../../components/FamilyTreeCard/FamilyTreeCardEmpty';
// import FamilyTreeCard from '../../components/FamilyTreeCard/FamilyTreeCard';
// import { getAllFamilyTrees, createFamilyTree } from '../../services/familyTreeService';

const FamilyTrees = () => {
  //   const [isCreationLoading, setIsCreationLoading] = useState(false);
  // Access the client
  //   const queryClient = useQueryClient();
  // Queries
  //   const familyTreeQuery = useQuery('familytrees', () => getAllFamilyTrees());

  // Mutations
  //   const mutation = useMutation(createFamilyTree, {
  //     onSuccess: () => {
  //       // Invalidate and refetch
  //       //   setIsCreateModalOpen(false);
  //       queryClient.invalidateQueries('familytrees');
  //       setIsCreationLoading(false);
  //     },
  //     onError: (err) => {
  //       setIsCreationLoading(false);
  //     },
  //     onMutate: () => {
  //       setIsCreationLoading(true);
  //     },
  //   });

  //   const handleCreateFamily = async (familyTreeValues) => {
  //     mutation.mutate(familyTreeValues);
  //   };

  return (
    <>
      <PageContainer>
        <FamilyTreesContainer>
          {/* {familyTreeQuery.status === 'loading'} */}
          {/* {familyTreeQuery.status === 'success' && (
            <> */}
          {/* {familyTreeQuery?.data?.map((familyTree) => ( */}
          {/* <Link to={`/people/${familyTree._id}`} key={familyTree._id}> */}
          {/* <FamilyTreeCard */}
          {/* // familyTree={familyTree} */}
          {/* /> */}
          {/* </Link> */}
          {/* ))} */}
          <FamilyTreeCardEmpty
          //   onCreate={handleCreateFamily}
          //   loading={isCreationLoading}
          />
          {/* </>
          )} */}
        </FamilyTreesContainer>
      </PageContainer>
    </>
  );
};

export default FamilyTrees;
