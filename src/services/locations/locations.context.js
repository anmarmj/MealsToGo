import React, { useEffect, useState } from "react";

import { locationRequest, locationTransform } from "./locations.service";

export const LocationsContext = React.createContext();

export const LocationsContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [locationError, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      //for empty location
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        setError(null);
      })
      .catch((err) => {
        console.log("eror:", err);
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationsContext.Provider
      value={{
        isLoading,
        locationError,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
};
