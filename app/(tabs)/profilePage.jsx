import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import {
  ScrollView,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";

const profile = () => {
  return (
    <GestureHandlerRootView>
      <ScrollView style={styles.myProfile}>
        <View style={{paddingBottom: 30}}>
        <View style={styles.profile}>
          <Image
            style={styles.logoImg}
            source={require("../../assets/images/users/u1.jpeg")}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 600,
              paddingTop: 5,
            }}
          >
            Sumi S
          </Text>
          <Text
            style={{
              color: "gray",
              paddingTop: 5,
            }}
          >
            Sumi10@gmail.com
          </Text>
          </View>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View style={styles.iconCover}>
              <AntDesign
                style={styles.icon}
                name="user"
                size={32}
                color="#0356fc"
              />
            </View>
            <Text
              style={{
                paddingLeft: 10,
                fontSize: 18,
              }}
            >
              Edit Profile
            </Text>
          </View>
          <View>
            <AntDesign name="right" size={24} color="gray" />
          </View>
          </View>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View style={styles.iconCover}>
              <AntDesign
                style={styles.icon}
                name="heart"
                size={26}
                color="#0356fc"
              />
            </View>
            <Text
              style={{
                paddingLeft: 10,
                fontSize: 18,
              }}
            >
              My Favorite
            </Text>
          </View>
          <View>
            <AntDesign name="right" size={24} color="gray" />
          </View>
          </View>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View style={styles.iconCover}>
              <AntDesign name="pay-circle-o1" size={24} color="#0356fc" />
            </View>
            <Text
              style={{
                paddingLeft: 10,
                fontSize: 18,
              }}
            >
              Payment
            </Text>
          </View>
          <View>
            <AntDesign name="right" size={24} color="gray" />
          </View>
          </View>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View style={styles.iconCover}>
              <AntDesign
                style={styles.icon}
                name="setting"
                size={32}
                color="#0356fc"
              />
            </View>
            <Text
              style={{
                paddingLeft: 10,
                fontSize: 18,
              }}
            >
              Settings
            </Text>
          </View>
          <View>
            <AntDesign name="right" size={24} color="gray" />
          </View>
          </View>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View style={styles.iconCover}>
              <MaterialIcons name="security" size={24} color="#0356fc" />
            </View>
            <Text
              style={{
                paddingLeft: 10,
                fontSize: 18,
              }}
            >
              Security
            </Text>
          </View>
          <View>
            <AntDesign name="right" size={24} color="gray" />
          </View>
          </View>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View style={styles.iconCover}>
              <MaterialIcons name="policy" size={28} color="#0356fc" />
            </View>
            <Text
              style={{
                paddingLeft: 10,
                fontSize: 18,
              }}
            >
              Privacy Policy
            </Text>
          </View>
          <View>
            <AntDesign name="right" size={24} color="gray" />
          </View>
          </View>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View style={styles.iconCover}>
              <MaterialIcons name="help-center" size={28} color="#0356fc" />
            </View>
            <Text
              style={{
                paddingLeft: 10,
                fontSize: 18,
              }}
            >
              Help Center
            </Text>
          </View>
          <View>
            <AntDesign name="right" size={24} color="gray" />
          </View>
          </View>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View style={styles.iconCover}>
              <FontAwesome name="group" size={24} color="#0356fc" />
            </View>
            <Text
              style={{
                paddingLeft: 10,
                fontSize: 18,
              }}
            >
              Invite Friends
            </Text>
          </View>
          <View>
            <AntDesign name="right" size={24} color="gray" />
          </View>
          </View>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View style={styles.iconCover}>
              <MaterialIcons name="logout" size={24} color="red" />
            </View>
            <Link
              href={"/"}
              style={{
                paddingLeft: 10,
                fontSize: 18,
                color: "red",
              }}
            >
              Logout
            </Link>
          </View>
          <View>
            <AntDesign name="right" size={24} color="gray" />
          </View>
          </View>

        </View>  
      </ScrollView>  
    </GestureHandlerRootView>
  );
};

export default profile;

const styles = StyleSheet.create({
  myProfile: {
    padding: 20,
  },
  profile: {
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
    alignItems: "center",
  },
  logoImg: {
    borderRadius: 50,
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  edits: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    alignContent: "center",
    paddingBottom: 15,
    alignItems: "center",
    padding: 10,
  },
  iconCover: {
    backgroundColor: "#d4d5e5",
    height: 60,
    width: 60,
    borderRadius: 50,
    padding: 10,
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  icon: {
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  profileIcon: {
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});
