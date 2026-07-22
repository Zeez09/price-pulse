import { StyleSheet, Text, View } from "react-native";



export default function Categories() {
  return (
    <View>
      <Text style={styles.categoryText}>Add Price</Text>
    </View>
  );
}






const styles = StyleSheet.create({
  categoryText: {
    color: "red",
    fontSize: 24,
  },
});