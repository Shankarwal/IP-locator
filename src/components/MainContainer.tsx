import { createContext, useEffect, useState } from "react";

export interface LocationContextType {
  searchedLocation: [number, number];
  setSearchedLocation: (location: any[]) => void;
  currentLocation: [number, number];
  setCurrentLocation: (location: any[]) => void;
}

export const LocationContext = createContext<LocationContextType | null>(null);

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  const [searchedLocation, setSearchedLocation] = useState<any>([
    31.7339, 75.7889,
  ]);
  const [currentLocation, setCurrentLocation] = useState<any>([
    31.7339, 75.7889,
  ]);

  useEffect(() => {
    if (navigator && navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setSearchedLocation([pos.coords.latitude, pos.coords.longitude]);
          setCurrentLocation([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => {
          console.log("Error getting location: ", err);
        }
      );
    }
  }, []);

  return (
    <LocationContext.Provider
      value={{
        searchedLocation,
        setSearchedLocation,
        currentLocation,
        setCurrentLocation,
      }}
    >
      <section className="container">{children}</section>
    </LocationContext.Provider>
  );
};

export default MainContainer;
