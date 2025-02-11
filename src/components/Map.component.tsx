import mapImage from './../assets/map.png';

const MapComponent = () => {
  return (
    <>
      <div style={{ width: '50vw' }}>
        <img src={mapImage} alt="map" width={500} />
      </div>
    </>
  );
};

export default MapComponent;
