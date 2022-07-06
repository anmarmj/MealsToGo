import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
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
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
