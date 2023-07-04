import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MyMapAll = ({ positions }) => {
  const centerPosition = positions[0]?.position;

  if (!centerPosition) return (<h1>Loading...</h1>);

  return (
    <div className="map" id="map">
      <MapContainer center={centerPosition} zoom={10}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {positions.length > 0 ? positions.map(position => {
          return (
            <Marker position={position.position} key={position.key}>
              <Popup>Visit it!</Popup>
            </Marker>
        )}) : ''}
      </MapContainer>
    </div>
  );
};

export default MyMapAll;
