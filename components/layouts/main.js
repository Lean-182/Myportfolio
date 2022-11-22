import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Leandro's homepage" />
        <meta name="author" content="Leandro Bustamante" />
        <meta name="author" content="Lean-182" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Leandro Bustamante" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Lea_cloud" />
        <meta name="twitter:creator" content="@Lea_cloud" />
        <meta name="twitter:image" content="https://pbs.twimg.com/profile_images/1423344056982282240/_aRJexYv_400x400.jpg" />
        <meta property="og:site_name" content="Leandro Bustamante" />
        <meta name="og:title" content="Leandro Bustamante" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>Leandro Bustamante - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {/*<LazyVoxelDog /> */}

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
