import SearchCategories from "@/components/searchCategories";
import VendorCard from "@/components/vendorCard";
import { FONTS } from "@/constants/fonts";
import { priceListings } from "@/data/priceListings";
import { products } from "@/data/products";
import { vendors } from "@/data/vendors";
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

  const query = searchQuery.toLowerCase().trim();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  const filteredVendors = vendors.filter(
    (vendor) =>
      vendor.name.toLowerCase().includes(query) ||
      vendor.type.toLowerCase().includes(query) ||
      vendor.location.toLowerCase().includes(query) ||
      vendor.city.toLowerCase().includes(query)
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />

      <View style={styles.container}>
        {/* Search Bar */}
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

            {/* PRODUCT RESULTS */}
            {filteredProducts.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Products</Text>

                {filteredProducts.map((product) => {
                  const listings = priceListings.filter(
                    (listing) => listing.productId === product.id
                  );

                  return (
                    <TouchableOpacity
                      key={product.id}
                      style={styles.productCard}
                    >
                      <View style={styles.productHeader}>
                        <View style={styles.productInfo}>
                          <Text style={styles.productName}>
                            {product.name}
                          </Text>

                          <Text style={styles.productSize}>
                            {product.size}
                          </Text>
                        </View>

                        <Text style={styles.productPrice}>
                          ₦{product.price.toLocaleString()}
                        </Text>
                      </View>

                      <View style={styles.divider} />

                      <View style={styles.availableRow}>
                        <Text style={styles.availableText}>
                          Available at {listings.length}{" "}
                          {listings.length === 1 ? "place" : "places"}
                        </Text>

                        <MaterialCommunityIcons
                          name="chevron-right"
                          size={20}
                          color="#6B7280"
                        />
                      </View>

                      {listings.slice(0, 3).map((listing) => {
                        const vendor = vendors.find(
                          (item) => item.id === listing.vendorId
                        );

                        if (!vendor) return null;

                        return (
                          <View
                            key={listing.id}
                            style={styles.vendorPriceRow}
                          >
                            <View style={styles.vendorNameContainer}>
                              <Text style={styles.vendorName}>
                                {vendor.name}
                              </Text>

                              {vendor.verified && (
                                <MaterialCommunityIcons
                                  name="check-decagram"
                                  size={14}
                                  color="#2563EB"
                                />
                              )}
                            </View>

                            <View style={styles.priceContainer}>
                              <Text style={styles.listingPrice}>
                                ₦{listing.price.toLocaleString()}
                              </Text>

                              {listing.price ===
                                Math.min(
                                  ...listings.map(
                                    (item) => item.price
                                  )
                                ) && (
                                <Text style={styles.bestPrice}>
                                  Best price
                                </Text>
                              )}
                            </View>
                          </View>
                        );
                      })}
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}

            {/* VENDOR RESULTS */}
            {filteredVendors.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Vendors</Text>

                {filteredVendors.map((vendor) => (
                  <VendorCard
                    key={vendor.id}
                    name={vendor.name}
                    type={vendor.type}
                    image={vendor.image}
                    location={`${vendor.location}, ${vendor.city}`}
                    openingHours={vendor.openingHours}
                    verified={vendor.verified}
                  />
                ))}
              </View>
            )}

            {/* NOTHING FOUND */}
            {filteredProducts.length === 0 &&
              filteredVendors.length === 0 && (
                <View style={styles.emptyState}>
                  <MaterialCommunityIcons
                    name="magnify-close"
                    size={40}
                    color="#9CA3AF"
                  />

                  <Text style={styles.emptyTitle}>
                    Nothing found
                  </Text>

                  <Text style={styles.emptyText}>
                    Try searching for another product, vendor or location.
                  </Text>
                </View>
              )}
          </View>
        ) : (
          <>
            <SearchCategories />

            {/* Recent Searches */}
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

            {/* Trending */}
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
                  <Text style={styles.trendingText}>
                    Cooking Oil
                  </Text>

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
    gap: 18,
  },

  section: {
    gap: 12,
  },

  sectionTitle: {
    fontFamily: FONTS.medium,
    fontSize: 15,
    color: "#6B7280",
  },

  productCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: "#F1F5F9",
  },

  productHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  productInfo: {
    flex: 1,
  },

  productName: {
    fontFamily: FONTS.medium,
    fontSize: 16,
  },

  productSize: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },

  productPrice: {
    fontFamily: FONTS.medium,
    fontSize: 16,
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 12,
  },

  availableRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  availableText: {
    fontFamily: FONTS.medium,
    fontSize: 13,
  },

  vendorPriceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 9,
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
  },

  vendorNameContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  vendorName: {
    fontFamily: FONTS.regular,
    fontSize: 13,
  },

  priceContainer: {
    alignItems: "flex-end",
  },

  listingPrice: {
    fontFamily: FONTS.medium,
    fontSize: 13,
  },

  bestPrice: {
    fontFamily: FONTS.regular,
    fontSize: 10,
    color: "#16A34A",
    marginTop: 2,
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
    textAlign: "center",
  },
});