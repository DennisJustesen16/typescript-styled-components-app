import styled from 'styled-components'
import { device } from '../pages/_app'

const Container = styled.div`
  padding: 0 0.5rem;
  display: block;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: 100vh;
  background-color: #111823;
`
const Main = styled.main`
  padding: 5rem 1;
  flex: 1;
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

`

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`
const StyledButton = styled.button`
  background: none;
  border-radius: 999px;
  box-sizing: border-box;
  color: #b1a80c;
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
  margin: 1.25em;
`
const ClaimButton = styled.button`
  background: #f1f107;
  border-radius: 2px;
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
  margin: 1.25em;
`

const StyledPack = styled.div`
  border-color: ${({ theme }) => theme.colors.primary};
    border-bottom-style: solid;
    border-bottom-color: #1f2531;
    margin: 2em;
    text-align: start;  
    margin-left: auto;
    margin-right: auto;
    width: stretch;

    img {
        float: left;
        display: block;
        width: 60px;
        margin-left: auto;
        margin-right: 2em;
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
        margin-bottom: 2.5em;
    }

    @media ${device.laptop} {
        max-width: auto;
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
        margin-bottom: 2.5em;
        }
    }

    @media ${device.desktop} {
        max-width: auto;
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
        margin-bottom: 2.5em;
        }
    }
  `

export { Container, Main, Title, Description, StyledPack, ClaimButton, StyledButton }
