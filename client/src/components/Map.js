import React, {PureComponent}  from 'react'
import { Map as LeafLetMap, TileLayer, Marker, Popup } from 'react-leaflet'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 100%;
  .leaflet-container {
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }
`

class Map extends PureComponent {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13
  }
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Container>
        <LeafLetMap center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br/> Easily customizable.
            </Popup>
          </Marker>
        </LeafLetMap>
      </Container>
    );
  }
}

export default Map