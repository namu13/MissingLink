import React, { useEffect } from "react";
// import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import Navigation from "./src/Navigation";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    KOTRA: require("./src/assets/fonts/KOTRA_LEAP.otf"),
  });

  return fontsLoaded ? <Navigation /> : null;
}
