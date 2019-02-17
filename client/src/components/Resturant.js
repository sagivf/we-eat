import React from 'react';
import styled from 'styled-components'
import {white} from "../theme";

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
  }
`

const Restaurant = ({name, address, max_delivery_time, icon, accepts_10bis, rating}) =>
  <Container>
    {/*<img src={icon}/>*/}
    <span className="cuisine-icon" style={{color: '#86b3bb'}}>I</span>
    <div>
        <h3>{name}</h3>
        <p>Rating: {rating}</p>
        <p>{address}</p>
        <p>{max_delivery_time}</p>
        <p>{accepts_10bis}</p>
    </div>
  </Container>

export default Restaurant;
