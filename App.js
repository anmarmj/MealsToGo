import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Navigation } from "./src/infrastructure/navigation";

import { RestaurantsContextProvider } from "./src/services/resturants/resturants.context";
import { LocationsContextProvider } from "./src/services/locations/locations.context";
import { LanguageContextProvider } from "./src/infrastructure/language/language.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

import * as firebase from "firebase";
import { firebaseConfig } from "./src/services/firebase/firebase.config";

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

firebase.initializeApp(firebaseConfig);

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
        <FavouritesContextProvider>
          <LocationsContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationsContextProvider>
        </FavouritesContextProvider>
      </LanguageContextProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
