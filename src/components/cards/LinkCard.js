import {
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Spacer,
  VStack,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const LinkCard = content => {
  return (
    <Link href={content.link}>
      <Box
        w="full"
        alignItems="baseline"
        background="gray.700"
        border="white"
        borderRadius="md"
      >
        <VStack w="full" p={4}>
          <Image w="full" align="center" src={content.img} />
          <HStack w="full">
            <Heading fontSize="30">{content.title}</Heading>
            <Spacer />
            <Icon as={ArrowForwardIcon} boxSize="8" />
          </HStack>
        </VStack>
      </Box>
    </Link>
  );
};

export default LinkCard;
