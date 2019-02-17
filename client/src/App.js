// @flow strict

import * as React from 'react'
import {Button, Icon, Input, Modal} from 'antd';
import RestaurantList from './components/RestaurantList'
import RestaurantForm from './components/RestaurantForm'
import Map from "./components/Map"
import {Page, Header, Menu, Main, Footer, Filters} from './style/style'
import {Form} from "antd";

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
            <Button shape="circle" icon="plus" size="large" onClick={this.openAddRestaurant}/>
            <Modal footer={null}
                   onCancel={this.cancelAddRestaurant}
                   visible={this.state.addRestaurantsVisible}
                   title="Add Restaurant">
              <RestaurantForm onSave={restaurants.actions.add} />
            </Modal>
        </Header>
        <Filters>
          <Form.Item label="Quisine">
            <Input />
          </Form.Item>
          <Form.Item label="Delivery time">
            <Input />
          </Form.Item>
          <Form.Item label="10Bis">
            <Input />
          </Form.Item>
        </Filters>
        <Menu>
            <RestaurantList data={restaurants.state.data}
                            fetch={restaurants.actions.fetch}  />
        </Menu>
        <Main>
          <Map />
        </Main>
        <Footer>
          <h5>Sagiv Frankel</h5>
          <div className="icons-list">
            <Icon type="facebook" />
            <Icon type="twitter" />
          </div>
        </Footer>
      </Page>
    );
  }
}

export default App