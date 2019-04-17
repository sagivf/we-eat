// @flow strict

import React, {PureComponent}  from 'react'
import {latLngBounds} from 'leaflet'
import { Map as LeafLetMap, TileLayer, Marker, Popup } from 'react-leaflet'
import styled from 'styled-components'
import Stars from "./Stars";

const Container = styled.div`
  height: 100%;
  width: 100%;
  .leaflet-container {
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }
`

class Map extends PureComponent<any, any> {
  state = {
    zoom: 13
  }

  calcBounds() {
    const {data} = this.props;
    const bounds = []
    if (data[0]) {
      bounds.push([data[0].lat, data[0].lng])
    }
    if (data[1]) {
      bounds.push([data[1].lat, data[1].lng])
    }
    return bounds
  }

  openPopup (id: string, marker: any) {
    const {activeRestaurant} = this.props

    if (marker && marker.leafletElement && id === activeRestaurant) {
      window.setTimeout(() => {
        marker.leafletElement.openPopup()
      })
    }
  }

  render() {
    const {data, activeRestaurant} = this.props
    const bounds = this.calcBounds()
    let center = null
    if (data && data.length && activeRestaurant) {
      const restaurant = data.find(({id}) => id === activeRestaurant)
      center = [restaurant.lat, restaurant.lng]
    }
    else if (bounds.length === 1) {
      center = bounds[0]
    }
    return (
      <Container>
        <LeafLetMap bounds={bounds.length > 1 ? latLngBounds(bounds) : null}
                    center={center}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          {
            data.map(({id, lat, lng, name, rating, address}) =>
              <Marker key={id} position={[lat, lng]} ref={(marker) => this.openPopup(id, marker)}>
                <Popup>
                  <h2>{name}</h2>
                  <div>{address}</div>
                  <Stars count={rating}/>
                </Popup>
              </Marker>
            )
          }
        </LeafLetMap>
      </Container>
    );
  }
}

export default Map