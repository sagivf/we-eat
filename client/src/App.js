// @flow strict

import * as React from 'react'
import moment from 'moment'
import {Button, Input, Modal, Form} from 'antd';
import RestaurantList from './components/RestaurantList'
import RestaurantForm from './components/RestaurantForm'
import Map from "./components/Map"
import {
  GlobalStyle, Page, Header, Menu, Main, Footer,
  Link, Filters
} from './style'
import CuisineDropDown from "./components/select/CuisineDropDown";
import SpeedDropDown from "./components/select/SpeedDropDown";
import RatingDropDown from "./components/select/RatingDropDown";
import weLogo from './style/welogo_white.png'

type Props = {
  restaurants: Object,
  cuisines: Object
};

type State = {
  filters: {}
};

const Search = Input.Search;

class App extends React.Component<Props, State> {
  searchByName: Function;
  cuisineDropDownChange: Function;
  ratingDropDownChange: Function;
  speedDropDownChange: Function;

  state = {
    filters: {
      name: null,
      cuisine_id: null,
      rating: null,
      max_delivery_time_minutes: null
    }
  }

  constructor(props: Props){
    super(props)
    this.searchByName = this.query.bind(this, 'name')
    this.cuisineDropDownChange = this.query.bind(this, 'cuisine_id')
    this.ratingDropDownChange = this.query.bind(this, 'rating')
    this.speedDropDownChange = this.query.bind(this, 'max_delivery_time_minutes')
  }

  searchChange = (event: any) => {
    this.searchByName(event.target.value)
  }

  componentDidMount() {
    this.props.cuisines.actions.fetch()
  }

  openRestaurantModal = () => {
    this.props.restaurants.actions.changeEditing({})
  }

  cancelRestaurantModal = () => {
    this.props.restaurants.actions.changeEditing(null)
  }

  query (type: string, value: any) {
    this.setState(({filters, ...state}) => ({
      ...state,
      filters: {
        ...filters,
        [type]: value
      }
    }), () => {
      this.props.restaurants.actions.fetch(this.state.filters)
    })
  }

  render() {
    const {
      restaurants,
      cuisines
    } = this.props

    return (
      <Page>
        <GlobalStyle />
        <Header>
            <h1>WeEat</h1>
            <p>It's {moment().format('HH:mm')} and you're hungry.</p>
            <Form.Item>
              <Search placeholder="Find a restaurant" size="large" onChange={this.searchChange}/>
            </Form.Item>
            <Button shape="circle" icon="plus" size="large" onClick={this.openRestaurantModal}/>
            <Modal footer={null}
                   onCancel={this.cancelRestaurantModal}
                   visible={!!restaurants.state.editing}
                   title="Add Restaurant">
              <RestaurantForm cuisines={cuisines}
                              data={restaurants.state.editing}
                              onSave={restaurants.actions.onSave} />
            </Modal>
        </Header>
        <Filters>
          <Form.Item label="Cuisine" hasFeedback>
            <CuisineDropDown data={cuisines.state.data} onChange={this.cuisineDropDownChange}/>
          </Form.Item>
          <Form.Item label="Rating">
            <RatingDropDown onChange={this.ratingDropDownChange}/>
          </Form.Item>
          <Form.Item label="Speed">
            <SpeedDropDown onChange={this.speedDropDownChange}/>
          </Form.Item>
        </Filters>
        <Menu>
            <RestaurantList data={restaurants.state.data}
                            onEdit={restaurants.actions.changeEditing}
                            fetch={restaurants.actions.fetch}  />
        </Menu>
        <Main>
          <Map data={restaurants.state.data} />
        </Main>
        <Footer>
          <span>© 2010–2019 WeWork Inc.</span>
          <Link href="https://github.com/sagivf/we-eat">Github Code</Link>
          <Link href="https://connect.we.co/display/DIGI/WeEat+-+Training+Project">Connect Spec</Link>
          <Link href="https://www.linkedin.com/in/sagivf/">Developed By me</Link>
          <img alt="" src={weLogo} />
          <span>Powered By<br/>We Technology</span>
        </Footer>
      </Page>
    );
  }
}

export default App