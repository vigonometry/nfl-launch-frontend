import { Box, Heading } from '@chakra-ui/react';
import EventGrid from '../../../components/events/EventGrid';

const events = [
  {
    title: 'Test Title',
    tag: 'Corporate',
  },
  {
    title: 'Test Title',
    tag: 'Corporate',
  },
  {
    title: 'Test Title',
    tag: 'Corporate',
  },
  {
    title: 'Test Title',
    tag: 'Corporate',
  },
  {
    title: 'Test Title',
    tag: 'Corporate',
  },
  {
    title: 'Test Title',
    tag: 'Corporate',
  },
];

export const MiniEvents = () => {
  return (
    <Box gap={2}>
      <Heading textAlign='center'>Events in Store</Heading>
      <EventGrid events={events} />
    </Box>
  );
};

export default MiniEvents;
