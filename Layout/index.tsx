import {
  Box,
  Container,
  Flex,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react'
import * as React from 'react'
// import { Card } from '../src/Components/Dashboard/Card'
import { Navbar } from '../src/Components/Dashboard/Navbar'
import { Sidebar } from '../src/Components/Dashboard/Sidebar'

export const Layout = ({children} : {children: React.ReactNode}) : JSX.Element => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const bg = useColorModeValue('white', 'grey')
  return (
    <Flex
      as="section"
      direction={{ base: 'column', lg: 'row' }}
      height="100vh"
      bg="bg-canvas"
      overflowY="auto"
    >
      {isDesktop ? <Sidebar /> : <Navbar />}
        <Box bg={"bg-canvas"} borderTopLeftRadius={{ base: 'none', lg: '2rem' }} height="full" flex={'1'}>
          <Container>
            {children}
          </Container>
        </Box>
    </Flex>
  )
}