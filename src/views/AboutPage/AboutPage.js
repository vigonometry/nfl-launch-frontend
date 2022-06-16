import { Box, Heading } from '@chakra-ui/react';
import CardGallery from './LinkCardGallery';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <Box id="aboutmainpage" p={6}>
      <Heading textAlign="center">About Us</Heading>
      <CardGallery />
    </Box>
  );
};

export default AboutPage;
