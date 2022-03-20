import {
  Box,
  Icon,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Progress,
  Stack,
  Text,
  useColorModeValue,
  useColorMode,
  Heading
} from '@chakra-ui/react'
import NavLink from '@/Utils/NavLink'
import * as React from 'react'
import {
  FiBarChart2,
  FiGithub,
  FiCheckSquare,
  FiHelpCircle,
  FiHome,
  FiSettings,
  FiUsers,
} from 'react-icons/fi'
import { SiChakraui } from 'react-icons/si'
import ColorMode from '@/Utils/ColorMode'
import { NavButton } from './NavButton'
import { UserProfile } from './UserProfile'

export const Sidebar = () => {
  return (
    <Flex as="section" minH="100vh" bg="bg-canvas">
      <Flex
        flex="1"
        bg="bg-surface"
        overflowY="auto"
        boxShadow={useColorModeValue('md', 'sm-dark')}
        maxW={{ base: 'full', sm: 'xs' }}
        py={{ base: '6', sm: '8' }}
        px={{ base: '4', sm: '6' }}
      >
        <Stack justify="space-between" spacing="1">
        <Stack spacing={{ base: '5', sm: '6' }} shouldWrapChildren>
 
            <Heading fontSize="30px">Chakra-UI <Icon as={SiChakraui} /></Heading>
            {/* <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FiSearch} color="muted" boxSize="5" />
              </InputLeftElement>
              <Input placeholder="Search" />
            </InputGroup> */}
            <Stack spacing="1">
              <NavLink to="/">
                <NavButton label="Home" icon={FiHome} />
              </NavLink>
              <NavLink to="/Dashboard">
                <NavButton label="Dashboard" icon={FiBarChart2} />
              </NavLink>
              <NavLink to="/Dashboard/Tasks">
                <NavButton label="Tasks" icon={FiCheckSquare} />
              </NavLink>
              <NavLink to="/Dashboard/Github">
                <NavButton label="Github" icon={FiGithub} />
              </NavLink>
              <NavLink to="/Dashboard/Users">
                <NavButton label="Users" icon={FiUsers} />
              </NavLink>
            </Stack>
          </Stack>
          <Stack spacing={{ base: '5', sm: '6' }}>
            <Stack spacing="1">
              <NavLink to="/Dashboard/Help">
                <NavButton label="Help" icon={FiHelpCircle} />
              </NavLink>
              <NavLink to="/Dashboard/Settings">
                <NavButton label="Settings" icon={FiSettings} />
              </NavLink>
            </Stack>
            <Box bg="bg-subtle" px="4" py="5" borderRadius="lg">
              <Stack spacing="4">
                <Stack spacing="1">
                  <Text fontSize="sm" fontWeight="medium">
                    Alert
                  </Text>
                  <Text fontSize="sm" color="muted">
                    Current website development status
                  </Text>
                </Stack>
                <Progress hasStripe value={30} size="sm" aria-label="Profile Update Progress" />
              </Stack>
            </Box>
            <Divider />
            <ColorMode />
            <UserProfile />
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  )
}