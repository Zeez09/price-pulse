
import { StyleSheet, View } from 'react-native';
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
    top: 20,

  }
});
