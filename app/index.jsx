import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import fb1 from '@/assets/images/fb1.png';
import google1 from '@/assets/images/google1.png'
import { Link } from "expo-router";
import CheckBox from "expo-checkbox";
import { useState } from "react";

export default function HomeScreen() {
  const styles = createStyles();

  const [agree, setAgree] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Title card */}
      <View style={styles.inputContainer}>
        <Text style={styles.titleText}>Create an account</Text>
        <Text>Lorem ipsum dolor sit amet consectetur elit.</Text>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </View>

      {/* Form input */}
      <View style={styles.form}>
        <View style={styles.formContainer}>
          <View style={styles.formInputIcon}>
            <FontAwesome name="user" size={20} color="#0356fc" />
          </View>
          <View style={styles.formInputText}>
            <Text>FullName</Text>
            <TextInput
              placeholder="Enter your name"
              placeholderTextColor={"gray"}
              style={styles.passWordIcon1}
            />
          </View>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.formInputIcon}>
            <MaterialIcons name="email" size={20} color="#0356fc" />
          </View>
          <View style={styles.formInputText}>
            <Text>Email Address</Text>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor={"gray"}
              style={styles.passWordIcon1}
            />
          </View>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.formInputIcon}>
            <MaterialIcons name="lock" size={20} color="#0356fc" />
          </View>
          <View style={styles.formInputText}>
            <Text>Password</Text>
            <View 
            style={styles.passWordIcon1}
            >
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor={"gray"}
                value={password}
                secureTextEntry={!showPassword}
                onChangeText={setPassword}
              />
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={20}
                style={{color: "gray"}}
                onPress={toggleShowPassword}
              />
            </View>
          </View>
        </View>

        <View style={styles.formContainer}>
          <CheckBox
            value={agree}
            onValueChange={() => setAgree(!agree)}
            color={agree ? "#4630EB" : undefined}
          />
          <Text style={styles.checkBox}>I have agree with the term and conditions</Text>
        </View>

        {/* Login button */}
        <View style={styles.formButton}>
          <View style={styles.inputBtn}>
            <Link href="/(tabs)" asChild>
              <Pressable>
                <Text style={{ color: "white", fontSize: 18 }}>Sign up</Text>
              </Pressable>
            </Link>
          </View>
          <Text style={styles.inputSeparator}>or</Text>
        </View>
      </View>

      {/* Form images */}
      <View style={styles.formImages}>
        <View style={styles.Image}>
          <Image source={fb1} style={styles.inputImage} />
        </View>
        <View style={styles.Image}>
          <Image source={google1} style={styles.inputImage} />
        </View>
      </View>

      {/* Alternate sign-in */}
      <View style={styles.formLink}>
        <Text style={styles.formLinkText}>
          Already have an account?
          {/* {' '} */}
          <Link href="/sign-in" style={styles.inputLink}>
            <Text>Sign In</Text>
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
}

function createStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
      fontFamily: "sans-serif"
    },
    inputContainer: {
      flex: 2,
      justifyContent: "flex-end",
      alignItems: "center",
      paddingBottom: 20,
    },
    titleText:{
      fontSize: 34,
      fontWeight: 600,
      fontFamily: "sans-serif"
    },
    form:{
      flex: 5,

    },
    formContainer: {
      flex: 4,
      flexDirection: "row",
      justifyContent: "flex-start",
      gap: 20,
      marginLeft:40,
      marginBottom: 40
    },
    formInputIcon: {
      borderRadius: "50%",
      backgroundColor: "#d6d4d4",
      height: 35,
      width: 35,
      alignItems: "center",
      justifyContent: "center",
      gap: 20
    },
    formInputText: {
      width: "70%",
      gap: 10,
    },
    textInput:{
      height: 20,
      fontSize: 16,
      borderBottomWidth: 1,
    },
    passWordIcon:{
      flex: 1,
      flexDirection: "row",
      width: "100%",
      height: 20,
      fontSize: 16,
      justifyContent: "space-between"
    },
    passWordIcon1:{
      flex: 1,
      flexDirection: "row",
      width: "100%",
      height: 20,
      fontSize: 16,
      justifyContent: "space-between",
      borderBottomWidth: 1,
    },
    formButton:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      gap: 20
    },
    inputBtn:{
      borderWidth: 1,
      borderRadius: 30,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      width: "80%",
      alignContent: "center",
      backgroundColor: "#0356fc",
      color: "white",
      fontSize: 18,
    },
    formImages:{
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      fontSize: 10,
      gap: 30,
      marginTop: 30
    },
    Image:{
      borderWidth: 1,
      borderRadius: "50%",
      padding: 10,
      borderColor: "#d6d4d4",
    },
    inputImage:{
      fontSize: 10
    },
    formLink:{
      flex: 1,
      marginBottom: 10,
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
      fontSize: 20
    },
    formLinkText:{
      fontSize: 18
    },
    inputLink:{
      color:"#0356fc",
      textDecorationLine: "underline"
    }
  });
}
