import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import Navigator from "./src/components/navigator/navigator.component";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/resturants/resturants.context";
import {
  useFonts as useExtra,
  Montserrat_200ExtraLight,
} from "@expo-google-fonts/montserrat";

import {
  useFonts as useRegular,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";

export default function App() {
  const [MontserratExtraLoaded] = useExtra({
    Montserrat_200ExtraLight,
  });

  const [MontserratRegukarLoaded] = useRegular({
    Montserrat_500Medium,
  });

  if (!MontserratExtraLoaded || !MontserratRegukarLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <Navigator />
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
