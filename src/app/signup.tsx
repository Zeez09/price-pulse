import { FONTS } from "@/constants/fonts";
import { useRouter } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import BubbleIllustrations2 from "../../assets/images/illustrations/bubble-022.svg";
import BubbleIllustrations3 from "../../assets/images/illustrations/bubble-03.svg";



export default function Signup() {

    const router = useRouter();

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.keyboardView}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >

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

                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >

                  <View style={styles.loginContainer}>
                              <Text style={styles.txt}>PricePulse</Text>
                  
                              <Text style={styles.txt1}>The Smarter Way to Shop!</Text>
                  
                              <TextInput
                                placeholder="Email"
                                placeholderTextColor="#6B7280"
                                style={styles.input}
                                keyboardType="email-address"
                                autoCapitalize="none"
                              />
                  
                              <TextInput
                                placeholder="Password"
                                placeholderTextColor="#6B7280"
                                style={styles.input}
                                secureTextEntry
                              />

                              <View style={styles.phoneInputContainer}>
                                <TextInput value="+234" editable={false} style={styles.countryCodeInput}/>
                                <TextInput placeholder="Your number" placeholderTextColor="#6B7280" keyboardType="phone-pad" style={styles.phoneInput}/>

                              </View>
                  
                              <TouchableOpacity style={styles.loginBtn} activeOpacity={0.8} onPress={() => router.push("/verification")}>
                                <Text style={styles.loginTxt}>Done</Text>
                              </TouchableOpacity>
                  
                              <Text style={styles.txt1}>
                                Already have an account?{" "}
                                <Text onPress={() => router.push("/login")} style={styles.signUpTxt}>
                                  Log in
                                </Text>
                              </Text>
                              <Text style={styles.txt1}>or</Text>
                              <Text style={styles.txt1}>continue as <Text onPress={() => router.push("/")} style={styles.signUpTxt}>
                                  guest
                                </Text></Text>
                            </View>



                </ScrollView>

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
        left: 0,
    },

    scrollContent: {
        flexGrow: 1,
        justifyContent: "center",
        paddingVertical: 40,
    },


    loginContainer: {
        alignItems: "center",
        zIndex: 10,
      },
    
      txt: {
        fontSize: 52,
        fontFamily: FONTS.bold,
        marginBottom: 4,
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
        paddingHorizontal: 16,
        fontSize: 17,
        fontFamily: FONTS.regular,
        marginTop: 12,
      },
    
      loginBtn: {
        width: "80%",
        height: 70,
        backgroundColor: "#9333EA",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 24,
      },
    
      loginTxt: {
        fontFamily: FONTS.bold,
        color: "#FFFFFF",
        fontSize: 20,
      },
    
      signUpTxt: {
        marginTop: 14,
        fontFamily: FONTS.bold,
        color: "#9333EA",
      },

      phoneInputContainer: {
        flexDirection: "row",
        width: "80%",
        gap: 8,
        marginTop: 12,
      },

      countryCodeInput: {
        width: 70,
        height: 70,
        backgroundColor: "#D1D5DB",
        borderRadius: 14,
        fontSize: 17,
        fontFamily: FONTS.regular,
        paddingHorizontal: 16,
      },

      phoneInput: {
        flex: 1,
        height: 70,
        backgroundColor: "#D1D5DB",
        borderRadius: 14,
        fontSize: 17,
        fontFamily: FONTS.regular,
        paddingHorizontal: 16,


      },

})