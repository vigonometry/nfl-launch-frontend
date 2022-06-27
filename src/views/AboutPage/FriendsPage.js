import {
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Spacer,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';
import friendsofft from './assets/friendsofft.png';
import friendsofft2 from './assets/friendsofft2.png';
import './AboutPage.css';

export default function FriendsPage() {
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });
  
  const FriendsPageDesktop = (
    <HStack align="top" w="full" p={6}>
      <VStack align="baseline" w="full" spacing={6}>
        <Text fontSize="30px">
          Friends of FinTech is a new initiative to connect you with educational
          platforms and events easily. <br />
          <br /> Registering with us makes signing up for our events
          instantaneous and updates you on our events and programmes.
        </Text>
        <Link href="https://fintechlab.nus.edu.sg/">
          <Button colorScheme="orange" fontSize={24} size="lg">
            Visit our website
          </Button>
        </Link>
      </VStack>
      <Spacer />
      <Image src={friendsofft2} w="full" />
    </HStack>
  );

  const FriendsPageMobile = (
    <VStack align="top" w="full" p={6}>
      <Image src={friendsofft2} w="full" />
      <Text fontSize="20px">
        Friends of FinTech is a new initiative to connect you with educational
        platforms and events easily. <br />
        <br /> Registering with us makes signing up for our events instantaneous
        and updates you on our events and programmes.
      </Text>
      <Spacer />
      <Link href="https://fintechlab.nus.edu.sg/">
        <Button colorScheme="orange" fontSize={24} size="lg">
          Visit our website
        </Button>
      </Link>
    </VStack>
  );

  return (
    <VStack id="aboutsubpage" p={6} spacing={4} w="full">
      <Heading textAlign="center">Friends of FinTech</Heading>
      <Image src={friendsofft} w="100vw" />
      <Spacer />
      <Heading textAlign="center">
        Interested in FinTech? Unsure where to start?
      </Heading>
      {isSmallScreen || isMobile ? FriendsPageMobile : FriendsPageDesktop}
    </VStack>
  );
}
