import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Layout } from '../Layout'
import { SessionProvider } from 'next-auth/react'
import { theme } from '@chakra-ui/pro-theme'
 
function MyApp({ Component, pageProps, router }: AppProps) {
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors, brand: theme.colors.purple },
    },
    theme,
  )
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <ChakraProvider theme={myTheme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp;