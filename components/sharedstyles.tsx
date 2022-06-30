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
  align-items: unset;
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
const Button = styled.button`
  background: #c9c904;
  border-radius: 999px;
  box-sizing: border-box;
  color: #1a1903;
  cursor: pointer;
  font-family: PixelarRegularW01-Regular;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 18px;
  width: fit-content;
  word-break: break-word;
  border: 0;
  margin: 0.25em;
`

const StyledPack = styled.div`
  border-color: ${({ theme }) => theme.colors.primary};
    border-bottom-style: solid;
    margin: auto;
    text-align: auto;  
    margin-left: auto;
    margin-right: auto;

    img {
        float: left;
        display: block;
        width: 60px;
        margin-left: auto;
        margin-right: 1em;
    }

    h1 {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 18px;
        margin-top: auto;
        margin-bottom: auto;
    }

    h2{
        color: ${({ theme }) => theme.colors.primary};
        font-size: 16px;
        margin-top: auto;
        margin-bottom: auto; 
    }

    h3{
        color: ${({ theme }) => theme.colors.primary};
        font-size: 14px;
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
        width: 60px;
        margin-left: auto;
        margin-right: 1em;
        }
        h3 {
        margin-bottom: auto;
        }
    }

    @media ${device.desktop} {
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: auto;
        padding-right: auto;
        margin-top: auto;
        min-width: auto;
        img {
        float: left;
        display: block;
        width: 60px;
        margin-left: auto;
        margin-right: 1em;
        }
        h3 {
        margin-bottom: auto;
        }
    }
  `

export { Container, Main, Title, Description, StyledPack, Button }
