import { Box, Button, Heading, HStack, Spacer, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';
const RSVPDekstop = (
  <Box>
      <HStack align='baseline' p={6}>
        <Box bg="#D9D9D9" h='full'>Insert Logo</Box>
        <Spacer />
        <VStack w='full' py={4} px={2} align='baseline'>
          <Heading color="#EF7C00">
            Lorem Ipsum
          </Heading>
          <Spacer />
          <Text fontSize={24} color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            consequat lectus neque. Quisque aliquet justo sit amet nibh
            vulputate, ut varius ligula sollicitudin. Vestibulum eu turpis vel
            felis rhoncus pretium in vitae ipsum.
          </Text>
          <Spacer />
          <Button colorScheme='orange' fontSize={24} size='lg'>RSVP now</Button>
        </VStack>
      </HStack>
    </Box>
)

const RSVPMobile = (
  <Box>
      <VStack align='center' p={6}>
        <Box bg="#D9D9D9" h='full'>Insert Logo</Box>
        <Spacer />
        <VStack w='full' py={4} px={2} align='baseline'>
          <Heading color="#EF7C00">
            Lorem Ipsum
          </Heading>
          <Spacer />
          <Text fontSize={24} color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            consequat lectus neque. Quisque aliquet justo sit amet nibh
            vulputate, ut varius ligula sollicitudin. Vestibulum eu turpis vel
            felis rhoncus pretium in vitae ipsum.
          </Text>
          <Spacer />
          <Button colorScheme='orange' fontSize={24} size='lg'>RSVP now</Button>
        </VStack>
      </VStack>
    </Box>
)

export default function RSVP() {
  const isSmallScreen = useBreakpointValue({base: true, lg: false})
  return (isSmallScreen || isMobile) ? RSVPMobile : RSVPDekstop
  
}

 
