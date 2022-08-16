import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Navigation } from "./src/infrastructure/navigation";

import { RestaurantsContextProvider } from "./src/services/resturants/resturants.context";
import { LocationsContextProvider } from "./src/services/locations/locations.context";
import { LanguageContextProvider } from "./src/infrastructure/language/language.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

// import * as firebase from "firebase";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./src/services/firebase/firebase.config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

//const analytics = getAnalytics(app);
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      signInWithEmailAndPassword(auth, "anmar@mail.com", "Anmar123")
        .then((user) => {
          setIsAuthenticated(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }, 2000);
  }, []);

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

  if (!isAuthenticated) {
    return null;
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
