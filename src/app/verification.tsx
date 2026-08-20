import { FONTS } from "@/constants/fonts";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BubbleIllustrations from "../../assets/images/illustrations/bubble-01.svg";
import BubbleIllustrations2 from "../../assets/images/illustrations/bubble-02.svg";
import BubbleIllustrations3 from "../../assets/images/illustrations/bubble-03.svg";

const otpbox = ["", "", "", "", "", ""];

export default function Verification() {
  const [otp, setOtp] = useState("");
  const inputRef = useRef<TextInput>(null);
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        
        <View style={styles.bubblesContainer} pointerEvents="none">
          <BubbleIllustrations2
            width={300}
            height={300}
            style={styles.bubble2}
          />

          <BubbleIllustrations
            width={200}
            height={200}
            style={styles.bubble1}
          />

          <BubbleIllustrations3
            width={100}
            height={100}
            style={styles.bubble3}
          />

          <BubbleIllustrations
            width={200}
            height={200}
            style={styles.bubbleBottom}
          />
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.loginContainer}>
            <Text style={styles.txt}>Verify Email</Text>

            <Text style={styles.txt1}>
              Check your inbox for the OTP you just received
            </Text>

            <Text style={styles.emailText}>
              Enter the 6-digit code below
            </Text>

            
            <TouchableOpacity
              activeOpacity={1}
              style={styles.otpContainer}
              onPress={() => inputRef.current?.focus()}
            >
              {otpbox.map((_, index) => {
                const digit = otp[index];

                return (
                  <View
                    key={index}
                    style={[
                      styles.otpBox,
                      index === otp.length && styles.otpBoxActive,
                    ]}
                  >
                    <Text style={styles.otpDigit}>{digit}</Text>
                  </View>
                );
              })}

              <TextInput
                ref={inputRef}
                value={otp}
                onChangeText={(text) => {
                  const numbersOnly = text.replace(/[^0-9]/g, "");
                  setOtp(numbersOnly.slice(0, 6));
                }}
                keyboardType="number-pad"
                maxLength={6}
                style={styles.hiddenInput}
                autoFocus
              />
            </TouchableOpacity>

            
            <TouchableOpacity onPress={() => router.push("/") }
              style={[
                styles.verifyBtn,
                otp.length !== 6 && styles.verifyBtnDisabled,
              ]}
              disabled={otp.length !== 6}
            >
              <Text style={styles.verifyTxt}>Verify Email</Text>
            </TouchableOpacity>

            
            <View style={styles.resendContainer}>
              <Text style={styles.resendText}>
                Didn't receive the code?
              </Text>

              <TouchableOpacity>
                <Text style={styles.resendBtn}> Resend OTP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
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
    top: 250,
    right: 0,
  },

  bubbleBottom: {
    position: "absolute",
    bottom: 0,
    right: 0,
    transform: [{ rotate: "180deg" }],
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 40,
  },

  loginContainer: {
    alignItems: "center",
    zIndex: 10,
    paddingHorizontal: 20,
  },

  txt: {
    fontSize: 52,
    fontFamily: FONTS.bold,
    marginBottom: 8,
    textAlign: "center",
  },

  txt1: {
    fontSize: 19,
    fontFamily: FONTS.regular,
    textAlign: "center",
    lineHeight: 27,
    maxWidth: "90%",
  },

  emailText: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    marginTop: 35,
    marginBottom: 16,
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    position: "relative",
  },

  otpBox: {
    width: 52,
    height: 62,
    backgroundColor: "#D1D5DB",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  otpBoxActive: {
    borderWidth: 2,
    borderColor: "#9333EA",
  },

  otpDigit: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: "#111827",
  },

  hiddenInput: {
    position: "absolute",
    width: 1,
    height: 1,
    opacity: 0,
  },

  verifyBtn: {
    width: "90%",
    height: 65,
    backgroundColor: "#9333EA",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  verifyTxt: {
    fontFamily: FONTS.bold,
    color: "#FFFFFF",
    fontSize: 20,
  },

  resendContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },

  resendText: {
    fontFamily: FONTS.regular,
    fontSize: 15,
  },

  resendBtn: {
    fontFamily: FONTS.bold,
    color: "#9333EA",
    fontSize: 15,
  },

  verifyBtnDisabled: {
    opacity: 0.5,
  },
});