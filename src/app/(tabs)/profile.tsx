import { FONTS } from "@/constants/fonts";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Profile() {
  const router = useRouter();



  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <View style={styles.maincontainer}>

      
      <View style={styles.container}>
        <View style={styles.head}>
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialCommunityIcons name='chevron-left' size={26} color="black"/>
          </TouchableOpacity>
          <Text style={styles.profile}>Profile</Text>
          
        </View>
      </View>


      <TouchableOpacity style={styles.faqs} onPress={() => router.push("/help")}>
        <View style={styles.faqsection}>
          <View style ={styles.faqbar}>
            <View style ={styles.symbol}>
              <MaterialCommunityIcons name='help' size={24} color="purple"/>
            </View>
            <View style={styles.txt}>
              <Text style={styles.txt1}>
                FAQs & Support
              </Text>
              <Text style ={styles.txt2}>
                Get support or send feedback
              </Text>
            </View>
          </View>

          <MaterialCommunityIcons name='chevron-right' size={24}/>

        </View>


      </TouchableOpacity>



      <TouchableOpacity style={styles.login} >
        <Text style={styles.logintxt}>Login</Text>
      </TouchableOpacity>



      <View style={styles.bottombar}>
        <Text style={styles.bottomtext}>V1.0.0</Text>
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
    padding: 16,
    gap: 16,
  },

  container: {
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
    flexDirection: "row",
    borderRadius: 16,
    borderWidth: 1,
    marginVertical: 16,
    padding: 16,
  },

  symbol: {
    backgroundColor: "#E9D5FF",
    borderRadius: 50,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",

  },

  txt: {

  },

  txt1: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    
  },

  txt2 : {
    fontFamily: FONTS.regular,
    fontSize: 13,
    color: "#666",


  },

  faqbar: {
    flexDirection: "row",
    gap: 8,
  },

  faqsection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
  },

  login: {
    width: "100%",
    backgroundColor: "#E6E6FA",
    borderRadius: 12,
    alignItems: "center",
    padding: 20,
    marginTop: 30,
  },

  logintxt: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    
  },

  bottombar: {
    justifyContent: "center",
    alignItems: "center"
    

  },

  bottomtext: {
    fontSize: 16,
    fontFamily: FONTS.regular,

  },

});