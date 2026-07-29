import Categories from "@/components/categories";
import Swiper from "@/components/swiper";
import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
      translucent
      backgroundColor="transparent"
      barStyle="dark-content"
      />

      <View style={styles.container}>

        <Swiper />
        <Categories />
        


      </View>
      
      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },


  container: {
    padding: 16,
    gap: 16,
  }
})