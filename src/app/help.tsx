import { FONTS } from "@/constants/fonts";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ChevronRight, Mail, MessageCircle } from "lucide-react-native";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Help() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.mainContainer}>

        <View style={styles.container}>
          <TouchableOpacity
            style={styles.helpPage}
            onPress={() => router.push("/(tabs)/profile")}
          >
            <MaterialCommunityIcons name="arrow-left" size={26} />

            <Text style={styles.txt}>
              Get Help
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.chatSection}>
            <View style={styles.chatView}>
              <MessageCircle
                size={24}/>

              <Text style={styles.txt1}>
                Chat
              </Text>
            </View>

            <ChevronRight />
          </TouchableOpacity>

          <View style={styles.divider} />
        </View>

        <View>
          <TouchableOpacity style={styles.chatSection}>
            <View style={styles.chatView}>
              <Mail
                size={24}/>

              <Text style={styles.txt1}>
                Email
              </Text>
            </View>

            <ChevronRight />
          </TouchableOpacity>

          <View style={styles.divider} />
        </View>

        <View>
          <TouchableOpacity style={styles.chatSection}>
            <View style={styles.chatView}>
              <FontAwesome name="twitter" size={24} color="black" />

              <Text style={styles.txt1}>
                Twitter
              </Text>
            </View>

            <ChevronRight />
          </TouchableOpacity>

          <View style={styles.divider} />
        </View>


        <View>
          <TouchableOpacity style={styles.chatSection}>
            <View style={styles.chatView}>
              <FontAwesome name="instagram" size={24} color="black" />

              <Text style={styles.txt1}>
                Instagram
              </Text>
            </View>

            <ChevronRight />
          </TouchableOpacity>

          <View style={styles.divider} />
        </View>

      </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
  },

  mainContainer: {
    padding: 16,
    gap: 24,
  },

  container: {
    gap: 24,
  },

  helpPage: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  txt: {
    fontSize: 18,
    fontFamily: FONTS.regular,
  },

  chatView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  chatSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 20,
    width: "100%",
  },

  txt1: {
    fontSize: 14,
    fontFamily: FONTS.regular,
  },
});

