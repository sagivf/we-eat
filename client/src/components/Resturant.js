// @flow strict

import React from 'react';
import styled from 'styled-components'
import {white, red} from "../style/theme";
import star from "../style/star.svg";

const Container = styled.div`
  background: ${white};
  margin: 1rem 4rem;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  * {
    margin: 0 1rem;
  }
  
  h3 {
    margin: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover {
      font-weight: 600;
      cursor: pointer;      
    }
  }
  
  p {
    margin: 0;
  } 
  
  .cuisine-icon {
    font-size: 3rem;
    color: ${red};
  }
  
  img {
    width: 1rem;
    display: inline-block;
    margin: 0 2px 2px 0;
  }
`

const Name = styled.span`
  margin: 0 0.6rem 0 0;
`
type Props = {
    id: number,
    name: string,
    address: string,
    rating: number,
    cuisine: {
      icon: string
    },
    onEdit: Function
}

const Restaurant = ({id, name, address, cuisine: { icon }, rating, onEdit}: Props) =>
  <Container>
    <span className="cuisine-icon">{icon}</span>
    <div>
        <h3 onClick={() => onEdit(id)}>
            <Name>{name}</Name>
            {Array.from({length: rating}).map((key, index) => <img alt="" key={index} src={star} />)}
        </h3>
        <p>{address}</p>
    </div>
  </Container>

export default Restaurant;
