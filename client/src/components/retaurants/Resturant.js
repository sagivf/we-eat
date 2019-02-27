// @flow strict

import React, {useState} from 'react';
import {Icon} from 'antd';
import styled from 'styled-components'
import {white, red} from "../../style/theme";
import tenbis from "../../style/10bis.png";
import Reviews from "../reviews/List";
import Stars from "../Stars";

const Container = styled.div`
  position: relative;
  background: ${white};
  margin: 1rem 4rem;
  padding: 1rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  > * {
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
  
  .flex-1 {
    flex: 1;
  }
  img {
    height: auto;
  }
`

const Name = styled.span`
  margin: 0 0.6rem 0 0;
`

const ReviewsLink = styled(Icon)`
  margin: 0 1rem 0;
  font-size: 1rem;
  color: ${red};
`

const TenBisImage = styled.img`
  width: 2rem;
  margin-left: 1rem;
`

const Stats = styled.div`
  margin-top: 0.6rem;
`

type Props = {
    id: number,
    name: string,
    address: string,
    rating: number,
    cuisine: {
      icon: string
    },
    reviews: Array<any>,
    onEdit: Function,
    onCreateReview: Function
}

const Restaurant = ({id, name, address, accepts_10bis, max_delivery_time_minutes, cuisine: { icon }, rating, reviews = [], onEdit, onCreateReview}: Props) => {
    const [showReviews, setShowReviews] = useState(false);


    const elements = [<Container>
        <span className="cuisine-icon">{icon}</span>
        <div className="flex-1">
            <h3 onClick={() => onEdit(id)}>
                <Name>{name}</Name>
                <Stars count={rating}/>
            </h3>
            <p>{address}</p>
            <Stats>
                ~ {max_delivery_time_minutes} min
                {accepts_10bis && <TenBisImage src={tenbis} />}
            </Stats>
        </div>
        <ReviewsLink type={showReviews ? 'up' : 'down'}
                     onClick={() => setShowReviews(!showReviews)}>Reviews</ReviewsLink>
    </Container>]

    if (showReviews) {
        elements.push(<Reviews data={reviews}
                               onCreate={data => onCreateReview(id, data)}/>)
    }

    return elements
}

export default Restaurant;
