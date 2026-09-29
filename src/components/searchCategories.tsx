
import { FONTS } from "@/constants/fonts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const categories = [
  {
    title: "Food",
    icon: "food-apple-outline",
    bgColor: "#FEF2F2",
    iconColor: "#DC2626",
  },
  {
    title: "Drinks",
    icon: "cup-outline",
    bgColor: "#EFF6FF",
    iconColor: "#2563EB",
  },
  {
    title: "Groceries",
    icon: "cart-outline",
    bgColor: "#F0FDF4",
    iconColor: "#16A34A",
  },
  {
    title: "Pharmacy",
    icon: "hospital-box-outline",
    bgColor: "#FFFBEB",
    iconColor: "#D97706",
  },
  {
    title: "Bakery",
    icon: "bread-slice-outline",
    bgColor: "#FFF7ED",
    iconColor: "#EA580C",
  },
  {
    title: "Household",
    icon: "home-outline",
    bgColor: "#FAF5FF",
    iconColor: "#9333EA",
  },
  {
    title: "Beauty",
    icon: "face-woman-outline",
    bgColor: "#FDF2F8",
    iconColor: "#DB2777",
  },
];

interface SearchCategoriesProps {
  onSelectCategory?: (category: string) => void;
}

export default function SearchCategories({
  onSelectCategory,
}: SearchCategoriesProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >
        {categories.map((category) => (
          <Pressable
            key={category.title}
            style={styles.category}
            onPress={() => onSelectCategory?.(category.title)}
          >
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: category.bgColor },
              ]}
            >
              <MaterialCommunityIcons
                name={category.icon as any}
                size={28}
                color={category.iconColor}
              />
            </View>

            <Text style={styles.title}>{category.title}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  heading: {
    fontFamily: FONTS.medium,
    fontSize: 18,
    marginBottom: 14,
  },

  list: {
    gap: 12,
    paddingRight: 16,
  },

  category: {
    width: 82,
    alignItems: "center",
  },

  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#F1F5F9",
  },

  title: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: "#334155",
    marginTop: 8,
    textAlign: "center",
  },
});
