import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

const categories = [
  {
    title: "Markets",
    icon: "storefront-outline",
    bgColor: "#FAF5FF",
    iconColor: "#9333EA",
  },
  {
    title: "Pharmacy",
    icon: "hospital-box-outline",
    bgColor: "#FFFBEB",
    iconColor: "#D97706",
  },
  {
    title: "Restaurants",
    icon: "silverware-fork-knife",
    bgColor: "#F0FDF4",
    iconColor: "#16A34A",
  },
  {
    title: "Price Trends",
    icon: "chart-line",
    bgColor: "#EFF6FF",
    iconColor: "#2563EB",
  },
  {
    title: "Food Items",
    icon: "food-apple-outline",
    bgColor: "#FEF2F2",
    iconColor: "#DC2626",
  },
  {
    title: "Alerts",
    icon: "bell-ring-outline",
    bgColor: "#FFF7ED",
    iconColor: "#EA580C",
  },
];

export default function Categories() {
  return (
    <View>
      <View style={styles.grid}>
        {categories.map((category) => (
          <Pressable
            key={category.title}
            style={[
              styles.box,
              { backgroundColor: category.bgColor },
            ]}
          >
            <MaterialCommunityIcons
              name={category.icon as any}
              size={32}
              color={category.iconColor}
            />

            <Text style={styles.title}>
              {category.title}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 16,
  },

  box: {
    width: "31%",
    height: 100,
    borderRadius: 12,
    marginBottom: 12,

    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#F1F5F9",
  },

  title: {
    textAlign: "center",
    marginTop: 8,
    fontSize: 12,
    fontWeight: "500",
    color: "#334155",
  },
});