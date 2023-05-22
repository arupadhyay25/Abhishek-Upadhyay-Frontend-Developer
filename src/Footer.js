import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="black" color="white" py={8} mt={20} borderTop={"solid 1px white"}>
      <Flex justifyContent="center" alignItems="center">
        <Text fontSize="xl">SpaceX 2023</Text>
      </Flex>
      <Flex justifyContent="center" mt={4}>
        <Box mr={4} cursor="pointer" transition="transform 0.2s">
          <Text as="span" _hover={{ transform: 'scale(1.2)' }}>
            Facebook
          </Text>
        </Box>
        <Box mr={4} cursor="pointer" transition="transform 0.2s">
          <Text as="span" _hover={{ transform: 'scale(1.2)' }}>
            Twitter
          </Text>
        </Box>
        <Box cursor="pointer" transition="transform 0.2s">
          <Text as="span" _hover={{ transform: 'scale(1.2)' }}>
            Instagram
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
