import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Button,
  HStack,
  IconButton,
  Link,
  Spacer,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';

const routes = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: "What's Happening", url: '/events' },
  { name: 'Partners', url: '/partners' },
  { name: 'Donate', url: '/donate' },
];

const MenuButtons = (
  <HStack w="full" align="baseline">
    <Spacer />
    {routes.map(i => (
      <Link href={i.url}>
        <Button variant="ghost" color="white">
          {i.name}
        </Button>
      </Link>
    ))}
  </HStack>
);

const MobileMenuButtons = (
  <VStack w="full">
    <Spacer />
    {routes.map(i => (
      <Link href={i.url}>
        <Button variant="ghost" color="white">
          {i.name}
        </Button>
      </Link>
    ))}
  </VStack>
);

export default function Header() {
  const [shown, setShown] = useState(false);
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });

  return (
    <VStack px={8} py={4} minH="84px">
      <HStack w="full">
        <Spacer />
        {isMobile || isSmallScreen ? (
          <IconButton
            variant="ghost"
            size="lg"
            onClick={() => setShown(!shown)}
            icon={shown ? <CloseIcon /> : <HamburgerIcon />}
          />
        ) : (
          MenuButtons
        )}
      </HStack>
      {(isMobile || isSmallScreen) && shown ? MobileMenuButtons : <></>}
    </VStack>
  );
}
