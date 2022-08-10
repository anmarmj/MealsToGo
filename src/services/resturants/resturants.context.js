import React, {
  useState,
  createContext,
  useMemo,
  useContext,
  useEffect,
} from "react";
import { LanguageContext } from "../../infrastructure/language/language.context";
import { LocationsContext } from "../locations/locations.context";

import { resturantsRequest, resturantsTransform } from "./resturants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location, locationError } = useContext(LocationsContext);
  const { language } = useContext(LanguageContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      resturantsRequest(loc)
        .then(resturantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((_) => {
          setIsLoading(false);
          setError(language.erorr.resturantNotFound);
        });
    }, 2000);
  };

  useEffect(() => {
    if (locationError) {
      setError(locationError);
      return;
    }
    if (location) {
      console.log("=======================");
      console.log(location);
      const locString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locString);
      setError(null);
    }
  }, [location, locationError]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
