import React, {PureComponent}  from 'react'
import {latLngBounds} from 'leaflet'
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
    zoom: 13
  }
  render() {
    const {data} = this.props;
    if (!data.length) {
      return null
    }
    const bounds = latLngBounds([data[0].lat, data[0].lng], [data[1].lat, data[1].lng])

    return (
      <Container>
        <LeafLetMap bounds={bounds} zoom={this.state.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          {
            data.map(({id, lat, lng, name}) =>
              <Marker key={id} position={[lat, lng]}>
                <Popup>
                  {name}
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