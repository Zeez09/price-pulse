
import { FONTS } from "@/constants/fonts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface VendorCardProps {
  name: string;
  type: string;
  image: string;
  location: string;
  openingHours: string;
  verified: boolean;
}

const VendorCard = ({
  name,
  type,
  image,
  location,
  openingHours,
  verified,
}: VendorCardProps) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <View style={styles.topRow}>
          <View style={styles.nameContainer}>
            <Text style={styles.name} numberOfLines={1}>
              {name}
            </Text>

            {verified && (
              <MaterialCommunityIcons
                name="check-decagram"
                size={16}
                color="#2563EB"
              />
            )}
          </View>

          <Text style={styles.type}>{type}</Text>
        </View>

        <View style={styles.infoRow}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={16}
            color="#6B7280"
          />

          <Text style={styles.infoText} numberOfLines={1}>
            {location}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={16}
            color="#6B7280"
          />

          <Text style={styles.infoText}>{openingHours}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VendorCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#F1F5F9",
  },

  image: {
    width: "100%",
    height: 150,
  },

  content: {
    padding: 12,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },

  nameContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  name: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    flexShrink: 1,
  },

  type: {
    fontFamily: FONTS.regular,
    fontSize: 11,
    color: "#6B7280",
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    gap: 6,
  },

  infoText: {
    flex: 1,
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: "#6B7280",
  },
});
