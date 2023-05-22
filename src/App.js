import React from 'react';
import LandingPage from './LandingPage';
import Banner from './Banner';
import { Box } from '@chakra-ui/react';
import Footer from './Footer';

function App() {
  return (
    <Box
      backgroundColor={'black'}
      color={'white'}
      pl={['10px', '20px', '20px']}
      pr={['10px', '20px', '20px']}
    >
      <Banner />
      <LandingPage />
      <Footer />
    </Box>
  );
}

export default App;
