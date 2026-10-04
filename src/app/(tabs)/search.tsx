
import SearchCategories from "@/components/searchCategories";
import { FONTS } from "@/constants/fonts";
import { products } from "@/data/products";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <MaterialCommunityIcons
            name="magnify"
            size={20}
            color="#6B7280"
          />
          <TextInput
            style={styles.input}
            placeholder="Food, drinks, groceries..."
            placeholderTextColor="#6B7280"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        {searchQuery.length > 0 ? (
          <View style={styles.resultsSection}>
            <Text style={styles.txt}>Search results</Text>
            {filteredProducts.length > 0 ? (
              <View style={styles.resultsList}>
                {filteredProducts.map((product) => {
                  const priceChange =
                    ((product.price - product.previousPrice) /
                      product.previousPrice) *
                    100;
                  return (
                    <TouchableOpacity
                      key={product.id}
                      style={styles.resultItem}
                    >
                      <View style={styles.resultInfo}>
                        <Text style={styles.resultName}>
                          {product.name}
                        </Text>
                        <Text style={styles.resultSize}>
                          {product.size}
                        </Text>
                      </View>
                      <View style={styles.resultPriceContainer}>
                        <Text style={styles.resultPrice}>
                          ₦{product.price.toLocaleString()}
                        </Text>
                        <View style={styles.priceChangeContainer}>
                          <MaterialCommunityIcons
                            name={
                              priceChange >= 0
                                ? "arrow-top-right"
                                : "arrow-bottom-right"
                            }
                            size={14}
                            color={priceChange >= 0 ? "#16A34A" : "#DC2626"}
                          />
                          <Text
                            style={[
                              styles.priceChange,
                              {
                                color:
                                  priceChange >= 0
                                    ? "#16A34A"
                                    : "#DC2626",
                              },
                            ]}
                          >
                            {Math.abs(priceChange).toFixed(1)}%
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : (
              <View style={styles.emptyState}>
                <MaterialCommunityIcons
                  name="magnify-close"
                  size={40}
                  color="#9CA3AF"
                />
                <Text style={styles.emptyTitle}>No products found</Text>
                <Text style={styles.emptyText}>
                  Try searching for another product.
                </Text>
              </View>
            )}
          </View>
        ) : (
          <>
            <SearchCategories />
            <View style={styles.searchesSection}>
              <View style={styles.searchHeader}>
                <Text style={styles.txt}>Recent searches</Text>
                <MaterialCommunityIcons
                  name="history"
                  size={24}
                  color="#C8A2C8"
                />
              </View>
              <View style={styles.tagsContainer}>
                <TouchableOpacity style={styles.tag}>
                  <Text style={styles.tagText}>Indomie</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tag}>
                  <Text style={styles.tagText}>Peak Milk</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tag}>
                  <Text style={styles.tagText}>Golden Penny</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.searchesSection}>
              <View style={styles.searchHeader}>
                <Text style={styles.txt}>Trending</Text>
                <MaterialCommunityIcons
                  name="trending-up"
                  size={24}
                  color="#C8A2C8"
                />
              </View>
              <View style={styles.trendingList}>
                <TouchableOpacity style={styles.trendingItem}>
                  <Text style={styles.trendingNumber}>01</Text>
                  <Text style={styles.trendingText}>Indomie</Text>

                  <MaterialCommunityIcons
                    name="arrow-top-right"
                    size={18}
                    color="#16A34A"
                  />
                </TouchableOpacity>

                <TouchableOpacity style={styles.trendingItem}>
                  <Text style={styles.trendingNumber}>02</Text>
                  <Text style={styles.trendingText}>Rice</Text>

                  <MaterialCommunityIcons
                    name="arrow-top-right"
                    size={18}
                    color="#16A34A"
                  />
                </TouchableOpacity>

                <TouchableOpacity style={styles.trendingItem}>
                  <Text style={styles.trendingNumber}>03</Text>
                  <Text style={styles.trendingText}>Cooking Oil</Text>

                  <MaterialCommunityIcons
                    name="arrow-top-right"
                    size={18}
                    color="#16A34A"
                  />
                </TouchableOpacity>

                <TouchableOpacity style={styles.trendingItem}>
                  <Text style={styles.trendingNumber}>04</Text>
                  <Text style={styles.trendingText}>Peak Milk</Text>

                  <MaterialCommunityIcons
                    name="arrow-top-right"
                    size={18}
                    color="#16A34A"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
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
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D1D5DB",
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 60,
    borderColor: "#6666",
    borderWidth: 1,
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    fontFamily: FONTS.regular,
  },

  searchesSection: {
    marginTop: 20,
  },

  searchHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  txt: {
    fontFamily: FONTS.regular,
    fontSize: 18,
  },

  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 14,
  },

  tag: {
    backgroundColor: "#F3E8FF",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },

  tagText: {
    fontFamily: FONTS.regular,
    fontSize: 13,
  },

  trendingList: {
    marginTop: 12,
  },

  trendingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  trendingNumber: {
    width: 35,
    fontFamily: FONTS.medium,
    fontSize: 13,
    color: "#9CA3AF",
  },

  trendingText: {
    flex: 1,
    fontFamily: FONTS.medium,
    fontSize: 15,
  },

  resultsSection: {
    marginTop: 20,
    gap: 14,
  },

  resultsList: {
    gap: 0,
  },

  resultItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  resultInfo: {
    flex: 1,
  },

  resultName: {
    fontFamily: FONTS.medium,
    fontSize: 15,
  },

  resultSize: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },

  resultPriceContainer: {
    alignItems: "flex-end",
    marginLeft: 16,
  },

  resultPrice: {
    fontFamily: FONTS.medium,
    fontSize: 15,
  },

  priceChangeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  priceChange: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    marginLeft: 2,
  },

  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
  },

  emptyTitle: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    marginTop: 12,
  },

  emptyText: {
    fontFamily: FONTS.regular,
    fontSize: 13,
    color: "#6B7280",
    marginTop: 5,
  },
});
