import Categories from "@/components/categories";
import HomeHeader from "@/components/homeHeader";
import ProductCard from "@/components/productCard";
import Swiper from "@/components/swiper";
import { FONTS } from "@/constants/fonts";
import { products } from "@/data/products";
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
        <HomeHeader/>
        <Swiper />
        <Categories />
        <View style={styles.productSection}>
        <View style={styles.productHeader}>
        <Text style={styles.title}>Popular Products</Text>
        <TouchableOpacity style={styles.seeAll}>
          <Text>View all</Text>
        </TouchableOpacity>
        </View>
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

  productHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  seeAll: {
    backgroundColor: "#9333EA",
  },

  title: {
    fontSize: 22,
    fontFamily: FONTS.regular,
    fontWeight: "700",
  },
});
