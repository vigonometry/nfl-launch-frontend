import {
  Heading,
  HStack,
  Image,
  Select,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import EventsGrid from '../../components/events/EventGrid';
import eventsimg from './assets/eventsimg.png';
import './EventsPage.css';

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

const items = [
  {
    tag: 'careerdev',
    label: 'Career Development',
  },
  {
    tag: 'finfun',
    label: 'FinTech Fun',
  },
  {
    tag: 'tot',
    label: 'Test Of Tech',
  },
];

export default function EventsPage() {
  const [filt, setFilt] = useState('');
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });

  const handleChange = e => {
    setFilt(e.target.label);
  };

  const Selector = (
    <Select placeholder="All" onChange={handleChange} w="50vw">
      {items.map(i => (
        <option value={i.tag}>{i.label}</option>
      ))}
    </Select>
  );

  const SelectorMobile = (
    <VStack align="center" spacing={4}>
      <Text fontSize="lg" fontWeight="bold">
        I'm interested in
      </Text>
      {Selector}
    </VStack>
  );

  const SelectorDesktop = (
    <HStack align="center" spacing={4} w="full">
      <Text fontSize="lg" fontWeight="bold">
        I'm interested in
      </Text>
      {Selector}
    </HStack>
  );

  return (
    <VStack w="full" p={4} id="eventpage" spacing={4}>
      <Heading>What's Happening?</Heading>
      <Image src={eventsimg} w="full" />
      <VStack align="center">
        {isSmallScreen || isMobile ? SelectorMobile : SelectorDesktop}
        <EventsGrid events={events} filt={filt} />
      </VStack>
    </VStack>
  );
}
