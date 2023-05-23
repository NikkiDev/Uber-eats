import { useCallback, useState } from "react";
import AuthNavigator from "./navigators/AuthNavigator";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import { PaperProvider } from "react-native-paper";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Uber-Bold": require("./assets/fonts/UberMoveTextBold.otf"),
    "Uber-Medium": require("./assets/fonts/UberMoveTextMedium.otf"),
    "Uber-Regular": require("./assets/fonts/UberMoveTextRegular.otf"),
    "Uber-Light": require("./assets/fonts/UberMoveTextLight.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (fontsLoaded) onLayoutRootView();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider>
      <AuthNavigator />
    </PaperProvider>
  );
}
