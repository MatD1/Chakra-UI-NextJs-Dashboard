import { Box, Button, Heading, Icon, Text } from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';
import { RiHome3Fill } from 'react-icons/ri'
import Link from 'next/link'

export default function Warning() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <WarningTwoIcon boxSize={'50px'} color={'orange.300'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Error 404 - Page not found
      </Heading>
      <Text color={'gray.500'}>
        Not sure how you got here but hey it&apos;s okay.
      </Text>
      <Link href="/">
        <Button colorScheme={'cyan'} mt={'4'}>Click here to go <Icon ml={'2'} as={RiHome3Fill} /></Button>
      </Link>
    </Box>
  );
}