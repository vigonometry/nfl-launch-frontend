import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import MiniEvents from '../../views/HomePage/homepage-components/MiniEvents';

export default function Card(content) {
  const [shown, setShown] = useState(false);
  const handleShow = () => setShown(true);
  const handleClose = () => setShown(false);
  
  const CardModal = () => {
    return (
      <Modal isOpen={shown} onClose={handleClose} size="xl">
        <ModalOverlay />
        <ModalContent alignItems="baseline">
          <ModalHeader>{content.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text pb={6}>{content.description}</Text>
            <MiniEvents />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };

  return (
    <Box
      w="full"
      alignItems="baseline"
      background="gray.700"
      border="white"
      borderRadius="md"
      onClick={handleShow}
    >
      <VStack w="full" p={4}>
        <Image w="full" align="center" src={content.img} />
        <HStack w="full">
          <Heading fontSize="30">{content.title}</Heading>
          <Spacer />
          <Icon as={ArrowForwardIcon} boxSize="8" />
        </HStack>
      </VStack>
      {shown && <CardModal />}
    </Box>
  );
}
