import { FONTS } from "@/constants/fonts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { MessageCircle } from "lucide-react-native";

export default function Help() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.SafeArea}> 
    <StatusBar
    translucent
    barStyle="dark-content"
    backgroundColor="transparent"/>

    <View style={styles.mainContainer}>

   

    <View style={styles.container}>
      <TouchableOpacity style={styles.helpPage} onPress={() => router.push("/(tabs)/profile")}>
        <MaterialCommunityIcons name="arrow-left" size={26}/>
        <Text style={styles.txt}>
          Get Help
        </Text>
      </TouchableOpacity>

    </View>

    <View >
      <View style={styles.chatSection}>
        <MessageCircle size={40} color="black" />
        <Text>
          Chat
        </Text>
      </View>

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
    gap: 16,

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

  chatSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  }
})