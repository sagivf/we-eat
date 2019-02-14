// @flow strict

import * as React from 'react'
import {Button, Modal} from 'antd';
import RestaurantList from './components/RestaurantList'
import RestaurantForm from './components/RestaurantForm'
import Map from "./components/Map"
import {Page, Header, Menu, Main, Footer} from './style'

type Props = {
  restaurants: Object
};

type State = {
  addRestaurantsVisible: boolean
};

class App extends React.Component<Props, State> {

  state = {
    addRestaurantsVisible: false
  }

  openAddRestaurant = () => {
    this.setState({
      addRestaurantsVisible: true
    })
  }

  cancelAddRestaurant = () => {
    this.setState({
      addRestaurantsVisible: false
    })
  }

  render() {
    const {
      restaurants
    } = this.props

    return (
      <Page>
        <Header>
            <h1>WeEat</h1>
            <Button onClick={this.openAddRestaurant}>Add</Button>
            <Modal footer={null}
                   onCancel={this.cancelAddRestaurant}
                   visible={this.state.addRestaurantsVisible}
                   title="Add Restaurant">
              <RestaurantForm onSave={restaurants.actions.add} />
            </Modal>
        </Header>
        <Menu>
            <RestaurantList data={restaurants.state.data}
                            fetch={restaurants.actions.fetch}  />
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