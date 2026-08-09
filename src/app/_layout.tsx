import { PlayfairDisplay_400Regular, PlayfairDisplay_500Medium, PlayfairDisplay_700Bold, useFonts } from "@expo-google-fonts/playfair-display";
import { Stack } from "expo-router";

import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}