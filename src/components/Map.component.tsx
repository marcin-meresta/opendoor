import './Map.component.css';
import mapImage from './../assets/map.png';

const MapComponent = () => {
  return (
    <>
      <div className="app-map-wrapper">
        <img src={mapImage} alt="map" />
      </div>
    </>
  );
};

export default MapComponent;
