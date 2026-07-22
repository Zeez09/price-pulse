import Categories from "@/components/categories";
import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <StatusBar
      translucent
      backgroundColor="transparent"
      barStyle="dark-content"
      />

      <View style={styles.container}>
        <Categories />
        


      </View>
      
      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 16,
  }
})