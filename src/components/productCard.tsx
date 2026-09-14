import { FONTS } from "@/constants/fonts";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ProductCardProps {
  name: string;
  size: string;
  price: number;
  image: string;
}

const ProductCard = ({
  name,
  size,
  price,
  image,
}: ProductCardProps) => {
  return (
    <TouchableOpacity>
      <View>
        <Image
          source={{ uri: image }}
          style={styles.productImage}
          
        />
      </View>

      <Text style={styles.txt}
        numberOfLines={1} 
      >
        {name}
      </Text>

      <Text style={styles.txt}>
        {size}
      </Text>

      <Text style={styles.txt}>
        ₦{price.toLocaleString()}
      </Text>
    </TouchableOpacity>
  );
};

export default ProductCard;



const styles = StyleSheet.create({

  productImage: {
    borderRadius: "12",
  },

  txt: {
    fontFamily: FONTS.regular,
    
  }
})