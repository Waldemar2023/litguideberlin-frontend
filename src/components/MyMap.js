import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MyMap = ({ lat, lng }) => {
  const position = [lat, lng];

  return (
    <MapContainer
      center={position}
      zoom={10}
      style={{ height: '50vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Visit it!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
