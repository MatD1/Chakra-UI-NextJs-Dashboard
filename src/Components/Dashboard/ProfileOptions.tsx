import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    IconButton,
    Button,
    Stack,
    Flex,
    Divider,
    Text,
    Box
  } from '@chakra-ui/react';
  
  import { BsThreeDotsVertical, BsChatSquareQuote } from 'react-icons/bs';
  import { signOut } from "next-auth/react"
  import { MdOutlineExitToApp } from 'react-icons/md'
  import { useSession, getSession } from "next-auth/react"
  
  export default function ProfileOptions() {
    const { data: session, status } = useSession()

    if (status === "loading") {
      return <div>Loading...</div>;
    }
    return (
      /**
       * You may move the Popover outside Flex.
       */
      <Flex justifyContent="center" mt={4}>
        <Popover placement="bottom" isLazy>
          <PopoverTrigger>
            <IconButton
              aria-label="More Profile Options"
              icon={<BsThreeDotsVertical />}
              variant="solid"
              w="fit-content"
            />
          </PopoverTrigger>
          <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
            <PopoverArrow />
            <PopoverBody>
              <Stack>
                <Button
                  w="194px"
                  variant="ghost"
                  rightIcon={<MdOutlineExitToApp />}
                  justifyContent="space-between"
                  fontWeight="normal"
                  fontSize="sm"
                  onClick={() => signOut()}>
                  Logout
                </Button>
                <Divider />
               
                <Box w="194px" justifyContent="space-between">
                    <Text ml="1rem" fontSize="lg">
                        User Id: <Text fontSize="12px" whiteSpace={'nowrap'}>{session.id || 'User ID XXXX'}</Text>
                    </Text>
                </Box>
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    );
  }

  export async function getServerSideProps(context) {
    return {
      props: {
        session: await getSession(context),
      },
    }
  }