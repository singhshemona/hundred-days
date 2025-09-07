import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { POSITION_CENTER, POSITIONS_ALL } from '../data/position-data';

const icon = L.divIcon({
  className: 'minimal-marker',
  html: '<div></div>',
  iconSize: [12, 12],
});

export const Map = () => {
  return (
    <MapContainer
      center={POSITION_CENTER}
      zoom={13}
      style={{ height: '600px', width: '800px' }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
      />
      {POSITIONS_ALL.map((position, index) => (
        <Marker key={index} position={[position.lat, position.lng]} icon={icon}>
          <Popup className="minimal-popup">
            <img src={`/images/${position.date}.svg`}/>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
