import Categories from "@/components/categories";
import ProductCard from "@/components/productCard";
import Swiper from "@/components/swiper";
import { FONTS } from "@/constants/fonts";
import { products } from "@/data/products";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <ScrollView style={styles.container}>
        <Swiper />
        <Categories />

        <View style={styles.productSection}>
        <Text style={styles.title}>Popular Products</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              size={product.size}
              price={product.price}
              image={product.image}
            />
          ))}
        </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    padding: 16,
    gap: 26,
  },

  productSection: {
    gap: 16,
    marginTop: 20,
  },

  title: {
    fontSize: 22,
    fontFamily: FONTS.regular,
    fontWeight: "700",
  },
});
