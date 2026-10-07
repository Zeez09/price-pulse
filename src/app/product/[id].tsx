import { FONTS } from "@/constants/fonts";
import {
  getLowestPrice,
  getProductListings,
} from "@/data/priceHelpers";
import { products } from "@/data/products";
import { vendors } from "@/data/vendors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const product = products.find(
    (item) => item.id === id
  );

  if (!product) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            Product not found
          </Text>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>
              Go back
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const listings = [...getProductListings(product.id)].sort(
    (a, b) => a.price - b.price
  );

  const lowestPrice = getLowestPrice(product.id);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => router.back()}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              color="#111827"
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Product Details
          </Text>

          <View style={styles.iconButton} />
        </View>

        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.image }}
            style={styles.productImage}
            resizeMode="contain"
          />
        </View>

        {/* Product Information */}
        <View style={styles.productInfo}>
          <Text style={styles.productName}>
            {product.name}
          </Text>

          <Text style={styles.productSize}>
            {product.size}
          </Text>

          {/* Best Price */}
          {lowestPrice !== null && (
            <View style={styles.bestPriceContainer}>
              <View>
                <Text style={styles.fromText}>
                  Best price from
                </Text>

                <Text style={styles.lowestPrice}>
                  ₦{lowestPrice.toLocaleString()}
                </Text>
              </View>

              <MaterialCommunityIcons
                name="tag-outline"
                size={28}
                color="#16A34A"
              />
            </View>
          )}
        </View>

        {/* Vendors */}
        <View style={styles.vendorSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Available at {listings.length}{" "}
              {listings.length === 1 ? "place" : "places"}
            </Text>

            <Text style={styles.compareText}>
              Compare prices
            </Text>
          </View>

          {listings.map((listing) => {
            const vendor = vendors.find(
              (item) => item.id === listing.vendorId
            );

            if (!vendor) {
              return null;
            }

            const isBestPrice =
              listing.price === lowestPrice;

            return (
              <View
                key={listing.id}
                style={styles.vendorCard}
              >
                <View style={styles.vendorInfo}>
                  <View style={styles.vendorNameRow}>
                    <Text style={styles.vendorName}>
                      {vendor.name}
                    </Text>

                    {vendor.verified && (
                      <MaterialCommunityIcons
                        name="check-decagram"
                        size={15}
                        color="#2563EB"
                      />
                    )}
                  </View>

                  <View style={styles.locationRow}>
                    <MaterialCommunityIcons
                      name="map-marker-outline"
                      size={15}
                      color="#6B7280"
                    />

                    <Text style={styles.locationText}>
                      {vendor.location}, {vendor.city}
                    </Text>
                  </View>
                </View>

                <View style={styles.priceContainer}>
                  <Text style={styles.price}>
                    ₦{listing.price.toLocaleString()}
                  </Text>

                  {isBestPrice && (
                    <Text style={styles.bestPriceText}>
                      Best price
                    </Text>
                  )}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  container: {
    padding: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  headerTitle: {
    fontFamily: FONTS.medium,
    fontSize: 17,
  },

  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },

  imageContainer: {
    width: "100%",
    height: 260,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },

  productImage: {
    width: "80%",
    height: "80%",
  },

  productInfo: {
    marginTop: 20,
  },

  productName: {
    fontFamily: FONTS.bold,
    fontSize: 24,
  },

  productSize: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },

  bestPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F0FDF4",
    borderRadius: 16,
    padding: 16,
    marginTop: 18,
  },

  fromText: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: "#6B7280",
  },

  lowestPrice: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    color: "#16A34A",
    marginTop: 3,
  },

  vendorSection: {
    marginTop: 28,
    paddingBottom: 30,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  sectionTitle: {
    fontFamily: FONTS.medium,
    fontSize: 17,
  },

  compareText: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: "#6B7280",
  },

  vendorCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#F1F5F9",
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
  },

  vendorInfo: {
    flex: 1,
  },

  vendorNameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  vendorName: {
    fontFamily: FONTS.medium,
    fontSize: 15,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 5,
  },

  locationText: {
    fontFamily: FONTS.regular,
    fontSize: 11,
    color: "#6B7280",
  },

  priceContainer: {
    alignItems: "flex-end",
    marginLeft: 12,
  },

  price: {
    fontFamily: FONTS.bold,
    fontSize: 15,
  },

  bestPriceText: {
    fontFamily: FONTS.regular,
    fontSize: 10,
    color: "#16A34A",
    marginTop: 2,
  },

  errorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  errorText: {
    fontFamily: FONTS.medium,
    fontSize: 18,
  },

  backButton: {
    backgroundColor: "#9333EA",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    marginTop: 15,
  },

  backButtonText: {
    color: "#FFFFFF",
    fontFamily: FONTS.medium,
  },
});