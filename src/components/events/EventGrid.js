import { Grid, useBreakpointValue, VStack } from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';
import EventCard from './EventCard';

const EventsGridDesktop = (events) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={3} p={6} alignItems="center">
      {events.map(e => EventCard(e))}
    </Grid>
  );
};

const EventsGridMobile = (events) => {
  return (
    <VStack spacing={2} align="center" p={4}>
      {events.map(e => EventCard(e))}
    </VStack>
  );
};

export default function EventsGrid({ events }) {
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });

  return (isSmallScreen || isMobile) ? EventsGridMobile(events) : EventsGridDesktop(events)
}
