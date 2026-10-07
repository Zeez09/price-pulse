import Categories from "@/components/categories";
import FeaturedProductCard from "@/components/featuredProducts";
import HomeHeader from "@/components/homeHeader";
import ProductCard from "@/components/productCard";
import Swiper from "@/components/swiper";
import { FONTS } from "@/constants/fonts";
import { getProductWithPrice } from "@/data/priceHelpers";
import { products } from "@/data/products";
import { getRandomProducts } from "@/data/utils";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const popularProducts = getRandomProducts(products, 6);

  const trendingProducts = getRandomProducts(
    products.filter(
      (product) =>
        !popularProducts.some((popular) => popular.id === product.id)
    ),
    4
  )
    .map((product) => getProductWithPrice(product.id))
    .filter((product) => product !== null)
    .map((product) => {
      const priceChange =
        product.previousPrice && product.previousPrice > 0
          ? ((product.price - product.previousPrice) /
              product.previousPrice) *
            100
          : 0;

      return {
        ...product,
        priceChange,
      };
    });

  const featuredProducts = getRandomProducts(
    products.filter(
      (product) =>
        !popularProducts.some((popular) => popular.id === product.id) &&
        !trendingProducts.some((trending) => trending.id === product.id)
    ),
    4
  )
    .map((product) => getProductWithPrice(product.id))
    .filter((product) => product !== null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <ScrollView style={styles.container}>
        <HomeHeader />

        <Swiper />

        <Categories />

        {/* Featured Products */}
        <View style={styles.featuredSection}>
          <View style={styles.featuredHeader}>
            <Text style={styles.title}>Featured Products</Text>

            <TouchableOpacity style={styles.seeAll}>
              <Text style={styles.txt1}>See all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {featuredProducts.map((product) => (
              <FeaturedProductCard
                key={product.id}
                name={product.name}
                size={product.size}
                price={product.price ?? 0}
                previousPrice={product.previousPrice ?? 0}
                image={product.image}
              />
            ))}
          </ScrollView>
        </View>

        {/* Popular Products */}
        <View style={styles.productSection}>
          <View style={styles.productHeader}>
            <Text style={styles.title}>Popular Products</Text>

            <TouchableOpacity style={styles.seeAll}>
              <Text style={styles.txt1}>View all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {popularProducts.map((product) => {
              const productWithPrice = getProductWithPrice(product.id);

              if (!productWithPrice) {
                return null;
              }

              return (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  size={product.size}
                  price={productWithPrice.price ?? 0}
                  image={product.image}
                />
              );
            })}
          </ScrollView>
        </View>

        {/* Trending Prices */}
        <View style={styles.trendingSection}>
          <View style={styles.trendingHeader}>
            <Text style={styles.title}>Trending Prices</Text>

            <TouchableOpacity style={styles.seeAll}>
              <Text style={styles.txt1}>See all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {trendingProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                size={product.size}
                price={product.price ?? 0}
                image={product.image}
                priceChange={product.priceChange}
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
    justifyContent: "space-between",
    alignItems: "center",
  },

  seeAll: {
    backgroundColor: "#E9D5FF",
    padding: 12,
    borderRadius: 22,
  },

  title: {
    fontSize: 22,
    fontFamily: FONTS.regular,
    fontWeight: "700",
  },

  txt1: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    fontWeight: "500",
  },

  trendingSection: {
    gap: 16,
    marginTop: 20,
  },

  trendingHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  featuredSection: {
    gap: 16,
    marginTop: 20,
  },

  featuredHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});