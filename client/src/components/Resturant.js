import React from 'react';
import styled from 'styled-components'
import {white} from "../theme";

const Container = styled.div`
  background: ${white};
  margin: 2rem 4rem;
  
`

const Restaurant = ({name, rating}) =>
  <Container>
    <h3>{name}</h3>
    Rating: {rating}
  </Container>

export default Restaurant;
