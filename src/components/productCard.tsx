import { FONTS } from "@/constants/fonts";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ProductCardProps {
  name: string;
  size: string;
  price: number;
  image: string;
  priceChange?: number;
}

const ProductCard = ({
  name,
  size,
  price,
  image,
  priceChange,
}: ProductCardProps) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textContainer}>
        <View>
          <Text style={styles.txt1} numberOfLines={1}>
            {name}
          </Text>

          <Text style={styles.txt}>{size}</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.txtPrice}>₦{price.toLocaleString()}</Text>

          {priceChange !== undefined && (
            <Text style={priceChange >= 0 ? styles.priceUp : styles.priceDown}>
              {priceChange >= 0 ? "↑" : "↓"}{" "}
              {Math.abs(priceChange).toFixed(1)}%
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 130,
    borderRadius: 12,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },

  productImage: {
    width: 200,
    height: 110,
    borderRadius: 12,
  },

  txt1: {
    fontFamily: FONTS.medium,
    fontSize: 16,
  },

  txt: {
    fontFamily: FONTS.regular,
    fontSize: 12,
  },

  txtPrice: {
    fontFamily: FONTS.bold,
  },

  card: {
    width: 300,
    marginRight: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 10,
  },

  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  priceContainer: {
    alignItems: "flex-end",
  },

  priceUp: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: "#16A34A",
  },

  priceDown: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: "#DC2626",
  },
});