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

  const notificationCount = 3;

  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.greeting}>{getGreeting()} 👋🏽</Text>

      <Text style={styles.subtitle}>Here's what's happening around you</Text>
    </View>
    <View style={styles.notificationContainer}>
        <Bell size={24} />

        {notificationCount > 0 && (
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>
              {notificationCount > 99 ? "99+" : notificationCount}
            </Text>
          </View>
        )}
      </View>
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

    notificationContainer: {
    position: "relative",
  },

  notificationBadge: {
    position: "absolute",
    top: -6,
    right: -8,
    minWidth: 17,
    height: 17,
    borderRadius: 9,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },

  notificationText: {
    color: "white",
    fontSize: 9,
    fontWeight: "700",
  },

});
