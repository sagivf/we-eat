// @flow strict

import styled, {css} from "styled-components";
import logo from "./pizza.png";
import {grey, red} from "./theme";

const form = css`
  .ant-form-item-label {
    line-height: 2;
    margin-top: -1rem;
    label {
      color: white;
    }
  }
`

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
  ${form};

  grid-area: header; 
  text-align: center;
  background: url(${logo}) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: white;
    font-size: 5rem;
    margin: 0;
    font-weight:700;
    text-shadow: 0 0 1px #000;
    line-height: 1;
  }
  
  button {
    position: absolute;
    right: 2rem;
    top: 2rem;
  }
  
  p {
    color: white;
    font-size: 1.2rem;
    margin: 1rem;
    font-weight:400;
    text-shadow: 0 0 1px #000;
  }
  
  .ant-form-item {
    width: 40rem;
  }
`

export const Filters = styled.div`
  ${form};
  
  grid-area: filters;
  display: flex;
  background: ${red};
  justify-content: center;
  align-items: center;
  > * {
    flex: 0 0 20%;
    margin: 1rem;
    color: white;
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
  background: #2d343a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  img {
    width: 2.4rem;
    margin: 1rem 1rem 1rem 16rem;
  }
`