import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import {
  ScrollView,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

const profile = () => {
  return (
    <GestureHandlerRootView>
      <ScrollView style={styles.myProfile}>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View>
              <Image
                style={styles.iconCover}
                source={require("../../assets/images/users/u2.jpg")}
              />
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                charlie
              </Text>
              <Text>Lorem ipsum ding elit. Facere, !</Text>
            </View>
          </View>
          <View>
            <Text>12:00 PM</Text>
          </View>
        </View>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View>
              <Image
                style={styles.iconCover}
                source={require("../../assets/images/users/u2.jpg")}
              />
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Admans
              </Text>
              <Text>Lorem ipsum ding elit. Facere, !</Text>
            </View>
          </View>
          <View>
            <Text>12:05 PM</Text>
          </View>
        </View>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View>
              <Image
                style={styles.iconCover}
                source={require("../../assets/images/users/u3.jpg")}
              />
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Sumi
              </Text>
              <Text>Lorem ipsum ding elit. Facere, !</Text>
            </View>
          </View>
          <View>
            <Text>08:05 AM</Text>
          </View>
        </View>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View>
              <Image
                style={styles.iconCover}
                source={require("../../assets/images/users/u6.jpeg")}
              />
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Saaju
              </Text>
              <Text>Lorem ipsum ding elit. Facere, !</Text>
            </View>
          </View>
          <View>
            <Text>11:35 PM</Text>
          </View>
        </View>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View>
              <Image
                style={styles.iconCover}
                source={require("../../assets/images/users/u7.jpeg")}
              />
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                pandi
              </Text>
              <Text>Lorem ipsum ding elit. Facere, !</Text>
            </View>
          </View>
          <View>
            <Text>10:15 AM</Text>
          </View>
        </View>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View>
              <Image
                style={styles.iconCover}
                source={require("../../assets/images/users/u2.jpg")}
              />
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Appa
              </Text>
              <Text>Lorem ipsum ding elit. Facere, !</Text>
            </View>
          </View>
          <View>
            <Text>11:35 PM</Text>
          </View>
        </View>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View>
              <Image
                style={styles.iconCover}
                source={require("../../assets/images/users/u2.jpg")}
              />
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Amma
              </Text>
              <Text>Lorem ipsum ding elit. Facere, !</Text>
            </View>
          </View>
          <View>
            <Text>12:05 PM</Text>
          </View>
        </View>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View>
              <Image
                style={styles.iconCover}
                source={require("../../assets/images/users/u3.jpg")}
              />
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Sudhakar
              </Text>
              <Text>Lorem ipsum ding elit. Facere, !</Text>
            </View>
          </View>
          <View>
            <Text>08:05 AM</Text>
          </View>
        </View>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View>
              <Image
                style={styles.iconCover}
                source={require("../../assets/images/users/u6.jpeg")}
              />
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Bhuvi
              </Text>
              <Text>Lorem ipsum ding elit. Facere, !</Text>
            </View>
          </View>
          <View>
            <Text>11:35 PM</Text>
          </View>
        </View>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View>
              <Image
                style={styles.iconCover}
                source={require("../../assets/images/users/u7.jpeg")}
              />
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Charu
              </Text>
              <Text>Lorem ipsum ding elit. Facere, !</Text>
            </View>
          </View>
          <View>
            <Text>10:15 AM</Text>
          </View>
        </View>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View>
              <Image
                style={styles.iconCover}
                source={require("../../assets/images/users/u1.jpeg")}
              />
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Subu
              </Text>
              <Text>Lorem ipsum ding elit. Facere, !</Text>
            </View>
          </View>
          <View>
            <Text>11:35 PM</Text>
          </View>
        </View>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View>
              <Image
                style={styles.iconCover}
                source={require("../../assets/images/users/u2.jpg")}
              />
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Mothis
              </Text>
              <Text>Lorem ipsum ding elit. Facere, !</Text>
            </View>
          </View>
          <View>
            <Text>12:05 PM</Text>
          </View>
        </View>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View>
              <Image
                style={styles.iconCover}
                source={require("../../assets/images/users/u3.jpg")}
              />
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Jaya
              </Text>
              <Text>Lorem ipsum ding elit. Facere, !</Text>
            </View>
          </View>
          <View>
            <Text>08:05 AM</Text>
          </View>
        </View>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View>
              <Image
                style={styles.iconCover}
                source={require("../../assets/images/users/u6.jpeg")}
              />
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Siva
              </Text>
              <Text>Lorem ipsum ding elit. Facere, !</Text>
            </View>
          </View>
          <View>
            <Text>11:35 PM</Text>
          </View>
        </View>
        <View style={styles.edits}>
          <View style={styles.profileIcon}>
            <View>
              <Image
                style={styles.iconCover}
                source={require("../../assets/images/users/u7.jpeg")}
              />
            </View>
            <View
              style={{
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Ram
              </Text>
              <Text>Lorem ipsum ding elit. Facere, !</Text>
            </View>
          </View>
          <View>
            <Text>10:15 AM</Text>
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
    height: 60,
    width: 60,
    borderRadius: 50,
    padding: 10,
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
