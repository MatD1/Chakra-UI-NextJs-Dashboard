import { Container, Heading, Status, VStack } from '@chakra-ui/react'
import { useSession, getSession } from "next-auth/react"
import React from 'react'
import WelcomeUser from '@/Components/Alerts/WelcomeUser';

function Dashboard() {
  const {data: session, status} = useSession();

  if (status === "loading") {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <React.Fragment>
      <WelcomeUser headline="Welcome" body={`Hi 👋 ${session.user.name || session.user.email || '*USERNAME/EMAIL*'}, Hopefully you're day is going well! 🥳`} />
      <VStack>
        <Heading>Center Heading</Heading>
      </VStack>
    </React.Fragment>
  )
}

export default Dashboard

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  }
}