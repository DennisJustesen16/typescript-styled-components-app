import styled from 'styled-components'
import { device } from '../pages/_app'

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
  background-color: #030a1f;
`
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: normal;
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`
const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
`
const StyledPack = styled.div`
  border-color: ${({ theme }) => theme.colors.primary};
    border-bottom-style: solid;
    margin: 50ex;
    text-align: justify;  
    margin-left: 0px;
    margin-right: 50ex;

    img {
        float: left;
        display: contents;
        width: 100px;
        margin-left: auto;
        margin-right: auto;
    }

    h1 {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 22px;
        margin-bottom: auto;
        margin-top: auto;
    }

    h2{
        color: ${({ theme }) => theme.colors.primary};
        font-size: 20px;
        margin-top: auto;
        margin-bottom: auto;
        
    }

    h3{
        color: ${({ theme }) => theme.colors.primary};
        font-size: 18px;
        margin-top: auto;
        margin-bottom: auto;
    }

    @media ${device.laptop} {
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: auto;
        padding-right: auto;
        margin-top: auto;
        min-width: auto;
        img {
        float: left;
        display: block;
        width: 100px;
        margin-left: auto;
        margin-right: auto;
        }
        h3 {
        margin-bottom: auto;
        }
    }

    @media ${device.desktop} {
        max-width: px;
        margin-left: px;
        margin-right: px;
        padding-bottom: em;
        padding-right: em;
        margin-top: em;
        min-width: cm;
        img {
        float: ;
        display: ;
        width: px;
        margin-left: ;
        margin-right: em;
        }
        h3 {
        margin-bottom: em;
        }
    };
  `

export { Container, Main, Title, Description, CodeTag, StyledPack }
