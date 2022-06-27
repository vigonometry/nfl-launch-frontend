import { Grid, useBreakpointValue, VStack } from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';
import Card from '../../components/cards/Card';
import generalpublic from './assets/generalpublic.png';
import keypartners from './assets/keypartners.png';
import students from './assets/students.png';

const vision = [
  {
    img: generalpublic,
    title: 'General Public',
    description:
      'Make NUS FinTech Lab a must visit destination for people from all walks of life. Join us at our Treasure Hunt and Lab Tour to discover more.',
  },
  {
    img: keypartners,
    title: 'Key Partners',
    description:
      'Pioneer experiential learning in the Singaporean FinTech ecosystem. Find out more at our thought leadership and senior leader engagement sessions.',
  },
  {
    img: students,
    title: 'Students',
    description:
      'Upskill and edify career professionals through FinTech literacy and development opportunities. Find out more at our thought leadership, senior leader engagement and mini-recruitment sessions.',
  },
];

export default function VisionGallery() {
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });
  const VisionGalleryDesktop = (
    <Grid templateColumns="repeat(3, 1fr)" gap={3} p={6} alignItems="center">
      {vision.map(t => Card(t))}
    </Grid>
  );

  const VisionGalleryMobile = (
    <VStack align="center" p={4}>
      {vision.map(t => Card(t))}
    </VStack>
  );
  return isSmallScreen || isMobile ? VisionGalleryMobile : VisionGalleryDesktop;
}
