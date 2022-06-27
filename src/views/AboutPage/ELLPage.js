import {
  Grid,
  Heading,
  HStack,
  Image,
  Spacer,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import finmonth from './assets/finmonth.jpg';
import nftplaceholder from './assets/nftplaceholder.jpg';
import communities from './assets/communities.jpg';
import { isMobile } from 'react-device-detect';
import './AboutPage.css';
import LinkCard from '../../components/cards/LinkCard';

const links = [
  {
    title: "What's Happening?",
    link: '/events',
  },
  {
    title: 'Donate',
    link: '/donate',
  },
];

export default function ELLPage() {
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });

  const ELLDesktop = (
    <VStack aling="baseline" w="full" p={4}>
      <HStack align="top" w="full" p={6} spacing={4}>
        <Text fontSize={30}>
          Here at FinTech Lab, we integrate conventional office space and
          flexible space into a core-flex solution. We aim to:{' '}
          <ol>
            <li>Develop a culture of innovation,</li>{' '}
            <li>Promote talent growth</li>
            <li>Optimise costs.</li>
          </ol>
        </Text>
        <Spacer />
        <Image src={finmonth} w="full" maxW="500px" />
      </HStack>
      <HStack align="top" w="full" p={6} spacing={4}>
        <Image src={nftplaceholder} w="full" maxW="500px" />
        <Spacer />
        <Text fontSize={30}>
          Strategic partners of NUS FinTech labs can enjoy our spaces to:{' '}
          <ol>
            <li>Set up booths to interact with the NUS community.</li>{' '}
            <li>Display their logos on our NFT Display Walls</li>{' '}
            <li>Host events such as hackathons/trading fests.</li>
          </ol>
        </Text>
      </HStack>
    </VStack>
  );

  const ELLMobile = (
    <VStack align="center" w="full" p={4} spacing={4}>
      <VStack align="center" w="full" p={6}>
        <Image src={finmonth} w="full" maxW="500px" />
        <Spacer />
        <Text fontSize={20}>
          Here at FinTech Lab, we integrate conventional office space and
          flexible space into a core-flex solution. We aim to:{' '}
          <ol>
            <li>Develop a culture of innovation,</li>{' '}
            <li>Promote talent growth</li>
            <li>Optimise costs.</li>
          </ol>
        </Text>
      </VStack>
      <VStack align="center" w="full" p={6}>
        <Image src={nftplaceholder} w="full" maxW="500px" />
        <Spacer />
        <Text fontSize={20}>
          Strategic partners of NUS FinTech labs can enjoy our spaces to:{' '}
          <ol>
            <li>Set up booths to interact with the NUS community.</li>{' '}
            <li>Display their logos on our NFT Display Walls</li>{' '}
            <li>Host events such as hackathons/trading fests.</li>
          </ol>
        </Text>
      </VStack>
    </VStack>
  );

  return (
    <VStack id="aboutsubpage" p={6} spacing={4} w="full">
      <Heading textAlign="center">
        Building Connections and Communities.
      </Heading>
      <Image src={communities} w="100vw" />
      <Spacer />
      {isSmallScreen || isMobile ? ELLMobile : ELLDesktop}
      <Spacer />
      <Grid templateColumns="repeat(2, 1fr)" gap={4} pb={6}>
        {links.map(x => LinkCard(x))}
      </Grid>
    </VStack>
  );
}
