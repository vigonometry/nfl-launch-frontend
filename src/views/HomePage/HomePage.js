import { Box, VStack } from '@chakra-ui/react';
import { useRef } from 'react';
import Hero from './homepage-components/Hero';
import MiniEvents from './homepage-components/MiniEvents';
import RSVP from './homepage-components/RSVP';
import './HomePage.css';

export default function HomePage() {
  const myRef = useRef(null);
  const scrollToRSVP = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <VStack spacing={4}>
      <Hero scrollToRSVP={scrollToRSVP} />
      <Box id="sections" ref={myRef}>
        <RSVP />
        <MiniEvents />
      </Box>
    </VStack>
  );
}
