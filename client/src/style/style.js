import styled from 'styled-components'
import logo from './pizza.png'
import {grey} from "../theme";

export const Page = styled.div`
  display: grid;
  grid-template-areas: 
        "header header"
        "filters filters"
        "menu main"
        "footer footer";
  background-color: #fff;
  color: #444;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr auto 2fr auto;
`

export const Header = styled.div`
  grid-area: header; 
  text-align: center;
  background: url(${logo}) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    color: white;
    font-size: 5rem;
    margin: 0;
  }
  
  button {
    position: absolute;
    right: 2rem;
    top: 2rem;
  }
`

export const Filters = styled.div`
  grid-area: filters;
  display: flex;
  background: #8d0000;
  justify-content: center;
  align-items: center;
  > * {
    flex: 0 0 20%;
    margin: 1rem;
    color: white;
  }
  
  .ant-form-item-label {   
    line-height: 1;
    label {
      color: white;
    }
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
  background: black;
  color: white;
  font-size: 2rem;
  display: flex;
  align-items: center;
  * {
    margin: 0 1rem 0 0;
  }
  h5 {
    color: white;
    font-size: 1.4rem;
    margin: 0 auto 0 1rem;
  } 
`