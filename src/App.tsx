import type { LatLngTuple } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

const POSITION: LatLngTuple = [40.7128, -74.006]; // NYC
const icon = L.divIcon({
  className: 'minimal-marker',
  html: '<div></div>',
  iconSize: [12, 12],
});

const App = () => {
  return (
    <MapContainer
      center={POSITION}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
      />
      <Marker position={POSITION} icon={icon}>
        <Popup className="minimal-popup">
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default App;
