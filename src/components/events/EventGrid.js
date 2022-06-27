import { Grid, useBreakpointValue, VStack } from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';
import EventCard from './EventCard';

const EventsGridDesktop = (events, filt) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={3} p={6} alignItems="center">
      {events.map(e => EventCard(e)).filter(e => filt === 'All' ? e : e.tag === filt)}
    </Grid>
  );
};

const EventsGridMobile = (events, filt) => {
  return (
    <VStack spacing={2} align="center" p={4}>
      {events.map(e => EventCard(e)).filter(e => filt === 'All' ? e : e.tag === filt)}
    </VStack>
  );
};

export default function EventsGrid({ events, filt}) {
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });

  return isSmallScreen || isMobile
    ? EventsGridMobile(events, filt)
    : EventsGridDesktop(events, filt);
}
