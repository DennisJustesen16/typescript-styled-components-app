import Head from 'next/head'
import {
  Container,
  Main,
  Title,
  Description,
  StyledPack,
  ClaimButton,
  StyledButton,
} from '../components/sharedstyles'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>My Inbox</title>
      </Head>
        <StyledButton>HOME</StyledButton>
        <StyledButton>STORE</StyledButton>
        <StyledButton>MARKETPLACE</StyledButton>
        <StyledButton>DEXICON</StyledButton>
      <Main>
       
        <Title>
          My Inbox
        </Title>

        <Description>
          Redeem your packages
        </Description>

        <StyledPack>
          <img src='images/starter.png'/>
          <h1>You recieved 4 new packs</h1>
          <h2>Basic Beast Starter Pack</h2>
          <h3>USD $40.00</h3>
        </StyledPack>
        <StyledPack>
          <img src='images/cursed.png'/>
          <h1>You recieved 2 new packs</h1>
          <h2>Cursed Black pack</h2>
          <h3>USD $600.00</h3>
        </StyledPack>
        <StyledPack>
          <img src='images/shiny.png'/>
          <h1>You recieved 1 new pack</h1>
          <h2>Shiny Gold</h2>
          <h3>USD $999</h3>
        </StyledPack>


        <ClaimButton>
          Claim All
        </ClaimButton>

       
      </Main>
      
    </Container>
  )
}
