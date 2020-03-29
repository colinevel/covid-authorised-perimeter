import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";


export class MapsContainer extends Component {


  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }
    const mapStyles = {
      width: "60em",
      height: "30em",
      position: "relative"
    };

    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        center={{
            lat: this.props.lat,
            lng: this.props.lng
          }}
      >
      <Marker
          name={"Location"}
          position= {{lat: this.props.lat, lng: this.props.lng}}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapsContainer);