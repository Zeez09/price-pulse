import { FONTS } from "@/constants/fonts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.maincontainer}>

        {/* Header */}
        <View style={styles.head}>
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialCommunityIcons
              name="chevron-left"
              size={26}
              color="black"
            />
          </TouchableOpacity>

          <Text style={styles.profile}>Profile</Text>
        </View>

        {/* FAQs & Support */}
        <TouchableOpacity
          style={styles.faqs}
          onPress={() => router.push("/help")}
        >
          <View style={styles.faqbar}>
            <View style={styles.symbol}>
              <MaterialCommunityIcons
                name="help"
                size={24}
                color="purple"
              />
            </View>

            <View>
              <Text style={styles.txt1}>
                FAQs & Support
              </Text>

              <Text style={styles.txt2}>
                Get support or send feedback
              </Text>
            </View>
          </View>

          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color="black"
          />
        </TouchableOpacity>

        {/* Login */}
        <Pressable
          style={styles.login}
          onPress={() => {
            console.log("LOGIN PRESSED");
            router.push("/help");
          }}
        >
          <Text style={styles.logintxt}>Login</Text>
        </Pressable>

        {/* Version */}
        <View style={styles.bottombar}>
          <Text style={styles.bottomtext}>
            V1.0.0
          </Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  maincontainer: {
    flex: 1,
    padding: 16,
    gap: 16,
  },

  head: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  profile: {
    fontSize: 24,
    fontFamily: FONTS.bold,
  },

  faqs: {
    borderColor: "#E9D5FF",
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  faqbar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  symbol: {
    backgroundColor: "#E9D5FF",
    borderRadius: 50,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  txt1: {
    fontFamily: FONTS.regular,
    fontSize: 16,
  },

  txt2: {
    fontFamily: FONTS.regular,
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },

  login: {
    width: "100%",
    backgroundColor: "#E6E6FA",
    borderRadius: 12,
    alignItems: "center",
    padding: 20,
  },

  logintxt: {
    fontSize: 20,
    fontFamily: FONTS.bold,
  },

  bottombar: {
    marginTop: "auto",
    justifyContent: "center",
    alignItems: "center",
  },

  bottomtext: {
    fontSize: 16,
    fontFamily: FONTS.regular,
  },


});