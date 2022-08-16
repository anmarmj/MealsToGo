import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Navigation } from "./src/infrastructure/navigation";

import { RestaurantsContextProvider } from "./src/services/resturants/resturants.context";
import { LocationsContextProvider } from "./src/services/locations/locations.context";
import { LanguageContextProvider } from "./src/infrastructure/language/language.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import { Loader } from "./src/components/loader/loader.component";
import {
  useFonts as useCairo,
  Cairo_900Black,
  Cairo_300Light,
  Cairo_400Regular,
} from "@expo-google-fonts/cairo";

import {
  useFonts as useExtra,
  Montserrat_200ExtraLight,
} from "@expo-google-fonts/montserrat";

import {
  useFonts as useRegular,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";

//const analytics = getAnalytics(app);
export default function App() {
  let [fontsLoaded] = useCairo({
    Cairo_900Black,
    Cairo_300Light,
    Cairo_400Regular,
  });

  const [MontserratExtraLoaded] = useExtra({
    Montserrat_200ExtraLight,
  });

  const [MontserratRegukarLoaded] = useRegular({
    Montserrat_500Medium,
  });

  if (!MontserratExtraLoaded || !MontserratRegukarLoaded || !fontsLoaded) {
    return <Loader />;
  }

  return (
    <>
      <LanguageContextProvider>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationsContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationsContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </LanguageContextProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
