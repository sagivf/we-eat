// @flow strict

import React from 'react';
import styled from 'styled-components'
import {Button} from 'antd'
import Stars from '../Stars'
import {red} from '../../style/theme'


const H3 = styled.h3`
  color: ${red};
  text-align: center;
`

const List = styled.ul`
  list-style: none;
  background: white;
  margin: 0;
  padding: 0;
`

const Container = styled.div`
  position: relative;
  background: white;
  padding: 1rem;
  margin: -0.5rem 1rem;
`

const StyledButton = styled(Button)`
  position: absolute;
  right: 1rem;
  top : 1rem;
`

const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 1.4rem 0;
  
  h5 {
    font-size: 1.2rem;
    margin: 0 2rem 0;
    flex: 0 0 5rem;
    overflow: hidden;
    text-overflow: ellipsis;

  }
  
  p {
    color: rgba(0, 0, 0, 0.54);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1rem;
    margin: 0;
  }
`

type props = {
    data: Array<any>,
    onCreate: Function
}

const Reviews = ({data, onCreate}: props) => {
    return <Container>
        <H3>Reviews</H3>
        <List>
            {data.map(({id, name, comment, rating}) => <Item key={id}>
                <h5>{name}</h5>
                <p>
                    <div>{comment}</div>
                    <Stars count={rating} />
                </p>
            </Item>)}
        </List>
        <StyledButton shape="circle" icon="plus" size="large" onClick={onCreate}/>
    </Container>
}

export default Reviews;
