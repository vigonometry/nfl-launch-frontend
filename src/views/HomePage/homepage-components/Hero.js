import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, chakra, Heading, Icon, VStack } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import bgvideo from './assets/bgvideo.mp4';
import './Hero.css';
import Header from '../../../components/navigation/Header.js'

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: prop => isValidMotionProp(prop) || prop === 'children',
});

const Hero = ({scrollToRSVP}) => {
  return (
    <Box id="hero">
      <Header />
      <Box align="center">
        <video autoPlay loop muted>
          <source src={bgvideo} type="video/mp4" />
        </video>
        <Heading
          as="h1"
          fontSize={{ base: '40px', md: '60px', xl: '80px' }}
          color="white"
          textAlign="center"
          pt={60}
        >
          REIMAGINE, REINVENT, REALIZE.
        </Heading>
        <Heading
          as="h2"
          color="white"
          textAlign="center"
          p={4}
          fontSize={{ base: '25px', xl: '45px' }}
          fontWeight
        >
          Experience the Metaverse
        </Heading>
        <VStack pt={20} spacing={2}>
        {/* <Text color='white' fontSize={{base: '20px', xl: '30px'}}>Discover More</Text> */}
        <ChakraBox
          animate={{
            scale: [1, 1.2, 1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
          }}
          w="100px"
          h="100px"
        >
          <Icon as={ChevronDownIcon} boxSize='80px' color="white" opacity={0.7} onClick={() => scrollToRSVP()}/>
        </ChakraBox>
        </VStack>
      </Box>
    </Box>
  );
};

export default Hero;
