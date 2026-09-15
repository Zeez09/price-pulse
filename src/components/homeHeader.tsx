import { FONTS } from "@/constants/fonts";
import { Bell } from 'lucide-react-native';
import { StyleSheet, Text, View } from "react-native";


const HomeHeader = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) {
      return "Good morning";
    }

    if (hour < 17) {
      return "Good afternoon";
    }

    return "Good evening";
  };
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.greeting}>{getGreeting()} 👋🏽</Text>

      <Text style={styles.subtitle}>Here's what's happening around you</Text>
    </View>
    <Bell/>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 4,
  },

  greeting: {
    fontFamily: FONTS.medium,
    fontSize: 16,
  },

  subtitle: {
    fontFamily: FONTS.regular,
    fontSize: 12,
  },
});
