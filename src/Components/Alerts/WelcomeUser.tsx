import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

interface WelcomeUserProps {
    headline: string
    body: string
}

export default function WelcomeUser({headline, body}: WelcomeUserProps) {
  return (
      <>
        <Box textAlign="center" py={5} px={6}>
        <CheckCircleIcon boxSize={'30px'} color={'green.500'} />
        <Heading as="h4" size="sm" mt={2} mb={2}>
            {headline}
        </Heading>
        <Text color={'gray.500'}>
            {body}
        </Text>
        </Box>
        <Divider />
    </>
  );
}