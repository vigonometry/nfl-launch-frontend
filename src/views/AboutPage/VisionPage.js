import { Grid, Heading, Image, Spacer, VStack } from '@chakra-ui/react';
import ourvision from './assets/ourvision.png';
import './AboutPage.css';
import VisionGallery from './VisionGallery';
import LinkCard from '../../components/cards/LinkCard';

const links = [
  {
    title: 'Friends of Fintech',
    link: '/about/fof',
  },
  {
    title: "What's Happening?",
    link: '/events',
  },
];
const VisionPage = () => {
  return (
    <VStack id="aboutsubpage">
      <VStack p={6} spacing={4}>
        <Heading textAlign="center">Our Vision</Heading>
        <Image src={ourvision} w="100vw" />
        <VisionGallery />
      </VStack>
      <Spacer />
      <Grid templateColumns="repeat(2, 1fr)" gap={4} pb={6}>
        {links.map(x => LinkCard(x))}
      </Grid>
    </VStack>
  );
};

export default VisionPage;
