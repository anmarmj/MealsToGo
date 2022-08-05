import React, { useState, createContext, useEffect, useMemo } from "react";

import { resturantsRequest, resturantsTransform } from "./resturants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("37.7749295,-122.4194155");

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      resturantsRequest(location)
        .then(resturantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    retrieveRestaurants();
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
        setLocation,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
