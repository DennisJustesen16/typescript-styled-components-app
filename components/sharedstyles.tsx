import styled from 'styled-components'
import { device } from '../pages/_app'

const Container = styled.div`
  padding: 0 0.5rem;
  display: block;
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
  align-items: stretch;
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
  opacity: ;
  outline: 0 ;
  padding: 8px 18px;
  width: fit-content;
  word-break: break-word;
  border: 0;
  margin: 1.25em;
`
const ClaimButton = styled.button`
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
  margin: 1.25em;
`

const StyledPack = styled.div`
  border-color: ${({ theme }) => theme.colors.primary};
    border-bottom-style: solid;
    margin: 1em;
    text-align: start;  
    margin-left: 100px;
    margin-right: 100px;
    width: 500px;

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

export { Container, Main, Title, Description, StyledPack, ClaimButton, StyledButton }
