import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Alien Streat">
    <Container>
      <Title>
        Alien Streat <Badge>2022-</Badge>
      </Title>
      <P>
        An ecommerce that was build for the final proyect for the bootcamp at Henry, that provide a lot of functions
        like: .
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
        
          <a href="https://github.com/Lean-182/Dogs">
          Dogs self proyect for individual proyect at Henry  <ExternalLinkIcon mx="2px" />
          </a>
          
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Express, React, Redux, postgreSQL
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/DogsMain.png" alt="DogsBread" />
      <WorkImage src="/images/works/DogsCreate.png" alt="DogsBread" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
