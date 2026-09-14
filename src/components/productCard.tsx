import { Image, Text, TouchableOpacity, View } from "react-native";

const ProductCard = () => {
  return (
    <TouchableOpacity className="w-[160px] rounded-2xl bg-white p-3">
      <View className="h-[120px] items-center justify-center rounded-xl bg-gray-100">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500",
          }}
          className="h-full w-full"
          resizeMode="contain"
        />
      </View>

      <Text className="mt-3 text-base font-semibold text-gray-900">
        Indomie
      </Text>

      <Text className="mt-1 text-sm text-gray-500">
        70g
      </Text>

      <Text className="mt-2 text-lg font-bold text-gray-900">
        ₦500
      </Text>
    </TouchableOpacity>
  );
};

export default ProductCard;