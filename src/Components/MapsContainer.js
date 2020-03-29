import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";


export class MapsContainer extends Component {

    state = {
        
    }

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
        zoom={14}
        style={mapStyles}
      >
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapsContainer);