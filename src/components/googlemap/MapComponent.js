import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

/* TODOS: 

-legge til lat og lng i moongose schema for Listing.

-dermed kunne lagre "pins" som viser hvor sopp i Listing er funnet, så man får et kart iover sine soppsteder

-når man trykker på en "pin" få en pop-up av listingCard med info om type sopp etc.

-få kartet til å ta utgangspunkt i currentPosition
 */

function showPopup() {
  <div>This is a Popup</div>;
}

const ListingMarker = ({ text }) => (
  <div className="w-5 h-5 bg-red-400 rounded-full" onClick={showPopup}>
    <span className="">{text}</span>
  </div>
);

const points = [
  { id: 1, title: "Kantarell", lat: 51.506, lng: -0.184 },
  { id: 2, title: "Blekksopp", lat: 51.508, lng: -0.175 },
  { id: 3, title: "Steinsopp", lat: 51.505, lng: -0.164 },
];

class MapComponent extends Component {
  static defaultProps = {
    center: {
      lat: 51.506,
      lng: -0.169,
    },
    zoom: 11,
  };

  render() {
    return (
      <div className="h-screen w-100%">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBuwE9854xBWYF-23U-jMIat3wSWPSEmO8" }}
          yesIWantToUseGoogleMapApiInternals
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {points.map(({ lat, lng, id, title }) => {
            return <ListingMarker key={id} lat={lat} lng={lng} text={title} />;
          })}
        </GoogleMapReact>
      </div>
    );
  }
}
export default MapComponent;
