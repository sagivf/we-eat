// @flow strict

import * as React from 'react'
import moment from 'moment'
import {Button, Input, Modal, Form} from 'antd';
import RestaurantList from './components/RestaurantList'
import RestaurantForm from './components/RestaurantForm'
import Map from "./components/Map"
import {Page, Header, Menu, Main, Footer, Filters} from './style'
import CuisineDropDown from "./components/select/CuisineDropDown";
import {createGlobalStyle} from "styled-components";
import SpeedDropDown from "./components/select/SpeedDropDown";
import RatingDropDown from "./components/select/RatingDropDown";
import styled from 'styled-components'
import weLogo from './style/welogo_white.png'

type Props = {
  restaurants: Object,
  cuisines: Object
};

type State = {
};

const Search = Input.Search;

const GlobalStyle = createGlobalStyle`
  .cuisine-drop-down-item{
    .ant-select-dropdown-menu-item {
      display: flex;
      align-items: center;
      .cuisine-icon {
        font-size: 2rem;
      }  
      span {
        margin: 1rem;
      }
  
      img {
        width: 1rem;
      }
    }
  }
  
  .ant-input {
    padding: 1.2rem 0.8rem;
  }
`

const Link = ({href, children, className}) => <span className={className}><a rel="noopener noreferrer" href={href} target="_blank">{children}</a></span>
const StyledLink = styled(Link)`
  margin-left: 0.4rem;
   &:before {
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    content: " · ";
  }
  
  a {
    color: #E8BD36;
    font-weight: 300;
    &:hover {
      text-decoration: underline;
    }
  }
`

class App extends React.Component<Props, State> {

  componentDidMount() {
    this.props.cuisines.actions.fetch()
  }

  openRestaurantModal = () => {
    this.props.restaurants.actions.changeEditing({})
  }

  cancelRestaurantModal = () => {
    this.props.restaurants.actions.changeEditing(null)
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
              <Search placeholder="Find a restaurant" size="large"/>
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
            <CuisineDropDown data={cuisines.state.data}/>
          </Form.Item>
          <Form.Item label="Rating">
            <RatingDropDown />
          </Form.Item>
          <Form.Item label="Speed">
            <SpeedDropDown />
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
          <StyledLink href="https://github.com/sagivf/we-eat">Github Code</StyledLink>
          <StyledLink href="https://connect.we.co/display/DIGI/WeEat+-+Training+Project">Connect Spec</StyledLink>
          <StyledLink href="https://www.linkedin.com/in/sagivf/">Developed By me</StyledLink>
          <img alt="" src={weLogo} />
          <span>Powered By<br/>We Technology</span>
        </Footer>
      </Page>
    );
  }
}

export default App