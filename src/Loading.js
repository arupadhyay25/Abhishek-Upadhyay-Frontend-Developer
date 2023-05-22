import { Box, Flex, Grid, Skeleton } from '@chakra-ui/react';
import React from 'react';

/* Loading component to display a skeleton loading state while data is being fetched. */

export const Loading = () => {
  return (
    <Grid templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']} gap={4} w={"100%"} mt={[6, null, 10]}>
      {Array.from({ length: 10 }, (_, index) => (
        <Box
          key={index}
          p={4}
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
        >
          <Flex alignItems="center">
            <Skeleton height="150px" width="40%" mb={2} />
            <Box flex={1} ml={4}>
              <Skeleton height="10px" width="30%" mb={2} />
              <Skeleton height="10px" width="30%" mb={2} />
              <Skeleton height="10px" width="40%" mb={2} />
              <Skeleton height="10px" width="70%" mb={2} />
              <Skeleton height="10px" width="90%" mb={2} />
            </Box>
          </Flex>
        </Box>
      ))}
    </Grid>
  );
};
