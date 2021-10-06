import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  //   MapConsumer,
  //   useMap,
} from "react-leaflet";
// import "../App.css";

const Map = () => {
  const position = [94.6753, 38.9149];

  return (
    <>
      <MapContainer
        style={{ height: "400px", zIndex: "-2" }}
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        {/* <MapConsumer>
          {(map) => {
            map.setView(position);
            // console.log('map center:', map.getCenter());
            return null;
          }}
        </MapConsumer> */}

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
