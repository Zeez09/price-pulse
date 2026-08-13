import { FONTS } from "@/constants/fonts";
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BubbleIllustrations from "../../assets/images/illustrations/bubble-01.svg";
import BubbleIllustrations2 from "../../assets/images/illustrations/bubble-02.svg";
import BubbleIllustrations3 from "../../assets/images/illustrations/bubble-03.svg";





export default function login() {
  return (
    <SafeAreaView style={styles.safeArea}>
    
      <View style={styles.container}>
        
        <BubbleIllustrations2 width={300} height={300} style={styles.bubble2}/>
        <BubbleIllustrations width={200} height={200} style={styles.bubble1}/>
        <BubbleIllustrations3 width={100} height={100} style={styles.bubble3}/>

      </View>


      <View style={styles.loginContainer}>
        <Text style={styles.txt}>Login</Text>
        <Text style={styles.txt1}>Good to see you back!</Text>

        <TextInput placeholder="Email" style={styles.input}></TextInput>
      </View>

      <BubbleIllustrations width={200} height={200} style={styles.bubblebottom} pointerEvents="none"/>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    flex: 1,
    position: "relative",
  },

  bubble1: {
    position: "absolute",
    top: 0,
    left: 0,
  },

  bubble2: {
    position: "absolute",
    top: 0,
    left: 0,
  },
    

  bubble3: {
    position: "absolute",
    right: 0,
    top: 250,

  },

  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 10,
  },

  txt: {
    fontSize: 52,
    fontFamily: FONTS.bold, 
  },

  txt1: {
    fontSize: 19,
    fontFamily: FONTS.regular,
  },

  input: {
    width: "80%",
    height: 70,
    backgroundColor: "#D1D5DB",
    borderRadius: 14,
    paddingHorizontal: 12,
    marginTop: 12,

  },

  bubblebottom: {
    position: "absolute",
    bottom: 0,
    right: 0,
    transform: [{ rotate: "180deg"}],
    zIndex: 1,
  },




});
