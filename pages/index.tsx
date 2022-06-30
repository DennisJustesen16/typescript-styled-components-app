import Head from 'next/head'
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
  StyledPack,
} from '../components/sharedstyles'
import Cards from '../components/cards'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>My Inbox</title>
      </Head>
      <Main>
        <Title>
          My Inbox
        </Title>

        <Description>
          Redeem your packages
        </Description>

        <StyledPack>
          <img src="../images/starter.png"/>
          <h1>You recieved 4 new packs</h1>
          <h2>Basic beast starter pack</h2>
          <h3>USD 40$</h3>
        </StyledPack>


        

       
      </Main>
    </Container>
  )
}
