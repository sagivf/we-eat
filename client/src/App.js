import React, { Component } from 'react'
import {Button, Modal} from 'antd';
import RestaurantList from './components/RestaurantList'
import styled from 'styled-components'
// import logo from './logo.svg'
import Map from "./components/Map"
import {grey} from "./theme"

const Page = styled.div`
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
const Header = styled.div`
  grid-area: header; 
  text-align: center;
  h1 {
    font-size: 4rem;
  }
`

const Menu = styled.div`
  grid-area: menu;
  background: ${grey}; 
`

const Main = styled.div`
  grid-area: main; 
 
`

const Footer = styled.div`
  grid-area: footer;
  background: white;
`

class App extends Component {
  state = {
    visible: false
  }
  openAddResturant = () => {
    this.setState({
      visible: true
    })
  }

  render() {
    return (
      <Page>
        <Header>
            <h1>WeEat</h1>
            <Button onClick={this.openAddResturant}>Add</Button>
            <Modal footer={null} visible={this.state.visible}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
        </Header>
        <Menu>
            <RestaurantList />
        </Menu>
        <Main>
          <Map />
        </Main>
        <Footer>
          Sagiv Frankel
        </Footer>
      </Page>
    );
  }
}

export default App