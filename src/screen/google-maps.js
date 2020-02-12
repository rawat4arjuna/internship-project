import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react'

export class MapContainer extends React.Component {
  render() {
     
    return <Map google={this.props.google}  styles = {{height : '30%' ,width :'20%'}}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            
        </InfoWindow>
      </Map>
    
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAH9ndoOmFmv0nUvPdF7H1jh3GftlB8ywI")
})(MapContainer)