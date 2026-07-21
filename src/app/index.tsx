import Categories from "@/components/categories";
import { StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar
      translucent
      backgroundColor="transparent"
      barStyle="dark-content"
      />

      <View className="px-2 py-4">
        <Categories />
        


      </View>
      
      
    </SafeAreaView>
  );
}