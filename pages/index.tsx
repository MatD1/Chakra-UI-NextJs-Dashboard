import { useSession, getSession } from "next-auth/react"
import { Badge, Box, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import PageNav from "../src/Components/Dashboard/PageNav"
import HomeCTA from "../src/Components/Dashboard/Home/HomeCTA"

function Home() {
  const { data: session, status } = useSession()

  if (status === "loading") return (
    <div>Loading</div>
  )  

  return (
    
    <React.Fragment>
      <PageNav />
      <HomeCTA />
    </React.Fragment>
  )
}

export default Home