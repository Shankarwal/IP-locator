import { useContext } from "react";
import { Map, Marker } from "pigeon-maps";
import { LocationContext } from "./MainContainer";

const markerColor = "#b01a1a";

const MapComponent = () => {
  const locationCtx = useContext(LocationContext);

  return (
    <div className="map-box">
      <Map
        height={500}
        defaultCenter={locationCtx?.searchedLocation}
        defaultZoom={13}
        animate
        center={locationCtx?.searchedLocation}
      >
        <Marker width={50} anchor={locationCtx?.searchedLocation} color={markerColor} />
      </Map>
    </div>
  );
};

export default MapComponent;
