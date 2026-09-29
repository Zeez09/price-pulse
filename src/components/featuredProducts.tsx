import { FONTS } from "@/constants/fonts";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface FeaturedProductCardProps {
  name: string;
  size: string;
  price: number;
  previousPrice: number;
  image: string;
}

const FeaturedProductCard = ({
  name,
  size,
  price,
  previousPrice,
  image,
}: FeaturedProductCardProps) => {
  const priceChange =
    ((price - previousPrice) / previousPrice) * 100;

  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>

          <Text style={styles.size}>{size}</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>
            ₦{price.toLocaleString()}
          </Text>

          <Text
            style={
              priceChange < 0
                ? styles.priceDown
                : styles.priceUp
            }
          >
            {priceChange < 0 ? "↓" : "↑"}{" "}
            {Math.abs(priceChange).toFixed(1)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedProductCard;

const styles = StyleSheet.create({
  card: {
    width: 320,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 12,
    marginRight: 12,
  },

  imageContainer: {
    width: "100%",
    height: 180,
    borderRadius: 16,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },

  productImage: {
    width: 240,
    height: 160,
  },

  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
  },

  name: {
    fontFamily: FONTS.medium,
    fontSize: 17,
  },

  size: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    marginTop: 3,
  },

  priceContainer: {
    alignItems: "flex-end",
  },

  price: {
    fontFamily: FONTS.bold,
    fontSize: 16,
  },

  priceDown: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: "#16A34A",
    marginTop: 3,
  },

  priceUp: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: "#DC2626",
    marginTop: 3,
  },
});