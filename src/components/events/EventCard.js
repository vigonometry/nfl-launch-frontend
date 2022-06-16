import {
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Spacer,
  Tag,
  VStack,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
const eventTagColor = () => {
  return 'orange'; //to be updated
};

const EventCard = event => {
  return (
    <Box
      w="full"
      alignItems="baseline"
      background="gray.700"
      border="white"
      borderRadius="md"
    >
      <VStack w="full" p={4}>
        <Image></Image>
        <VStack w='full' align='baseline' p={2} spacing={4}>
          <Heading>{event.title}</Heading>
          <HStack w="full">
            <Tag colorScheme={eventTagColor()}>{event.tag}</Tag>
            <Spacer />
            <Icon as={ArrowForwardIcon} />
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default EventCard;
