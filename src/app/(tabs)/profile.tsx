import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FONTS } from "../../constants/fonts";

export default function Profile() {
  const router = useRouter();



  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <View style={styles.container}>
        <View style={styles.head}>
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialCommunityIcons name='chevron-left' size={26} color="black"/>
          </TouchableOpacity>
          <Text style={styles.profile}>Profile</Text>
          
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },

  head: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16

  },

  profile: {
    fontSize: 24,
    fontFamily: FONTS.bold,

  },
});