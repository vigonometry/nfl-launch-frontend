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
    description: 'Text',
  },
  {
    img: keypartners,
    title: 'Key Partners',
    description: 'Text',
  },
  {
    img: students,
    title: 'Students',
    description: 'Text',
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
