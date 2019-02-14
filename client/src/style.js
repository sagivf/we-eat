import styled from 'styled-components'
// import logo from './logo.svg'i
import {grey} from "./theme";

export const Page = styled.div`
  display: grid;
  grid-template-areas: 
        "header header"
        "menu main"
        "footer footer";
  background-color: #fff;
  color: #444;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 2fr 5rem;
`

//background: url(${logo}) no-repeat;
export const Header = styled.div`
  grid-area: header; 
  text-align: center;
  h1 {
    font-size: 4rem;
  }
`

export const Menu = styled.div`
  grid-area: menu;
  background: ${grey}; 
  overflow: auto;
`

export const Main = styled.div`
  grid-area: main; 
 
`

export const Footer = styled.div`
  grid-area: footer;
  background: white;
`