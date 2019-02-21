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
  render() {
    const {data} = this.props
    const bounds = this.calcBounds()

    return (
      <Container>
        <LeafLetMap bounds={bounds.length > 1 ? latLngBounds(bounds) : null}
                    center={bounds.length === 1 ? bounds[0] : null}>
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