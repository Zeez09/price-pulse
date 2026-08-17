import { useRouter } from "expo-router";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import BubbleIllustrations2 from "../../assets/images/illustrations/bubble-02.svg";
import BubbleIllustrations3 from "../../assets/images/illustrations/bubble-03.svg";


export default function Signup() {

    const router = useRouter();

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
            style={styles.keyboardView}
            behavior={Platform.OS === "ios" ? "padding" : "height"}>

                <View style={styles.bubblesContainer} pointerEvents="none">
                        <BubbleIllustrations2
                            width={200}
                            height={200}
                            style={styles.bubble2}
                        />

                        <BubbleIllustrations3
                            width={200}
                            height={200}
                            style={styles.bubble1}
                        />

                
                        
                
                        
                        </View>

            </KeyboardAvoidingView>
        </SafeAreaView>




    )

}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },

    keyboardView: {
        flex: 1,
    },

    bubblesContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },

  bubble1: {
    position: "absolute",
    top: 200,
    right: -60,
    transform: [{ scaleY: -1 }],
    
  },

  bubble2: {
    position: "absolute",
    top: 0,
    left: -50,
    
  },

  

 



}

)
