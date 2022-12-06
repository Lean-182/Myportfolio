import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import AlienStreat from '../public/images/works/Alien1.png'
import DogsBread from '../public/images/works/DogsMain.png'



const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="DogsBread" title="DogsBread" thumbnail={DogsBread}>
            A Breed application where you can find your fauvurite pet for your home.
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="AlienStreat" thumbnail={AlienStreat} title="AlienStreat">
            An e-commerce that provide a varity of functions like, Admin magement, purches inside the page, Profile administration by the user, third party authorization and much more.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
