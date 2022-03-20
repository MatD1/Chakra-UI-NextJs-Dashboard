import { Avatar, Box, HStack, Text } from '@chakra-ui/react'
import { useSession, getSession } from "next-auth/react"
import * as React from 'react'
import ProfileOptions from './ProfileOptions'



{/* interface UserProfileProps {
  name: string
  image: string
  email: string
}

*/}

export const UserProfile = () => {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div>Loading...</div>;
  }
 // const { name, image, email } = props
  return (
    <Box>
    <HStack spacing="3" ps="2">
      <Avatar name={session.user.name} src={session.user.image} boxSize="10" />
      <Box>
        <Text fontWeight="medium" fontSize="sm">
          {session.user.name}
        </Text>
        <Text color="muted" fontSize="sm">
          {session.user.email}
        </Text>
      </Box>
      <ProfileOptions />
    </HStack>
    </Box>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  }
}