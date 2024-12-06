
import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import {
  ScrollView,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

const index = () => {
  return (
    <GestureHandlerRootView>
      <ScrollView style={{ padding: 20}}>
        <View style={{ paddingBottom: 30}}>
          <View style={styles.courseCover}>
          <View>
            <Image
              style={styles.courseImg}
              source={require("../../assets/images/python.jpeg")}
            />
          </View>

          <View style={styles.courseContent}>
            <View>
              <Text style={styles.courseHead}>Python Pro</Text>
              <Text style={styles.author}>
                Sam | <Text style={{ color: "#0356fc" }}>Programming</Text>
              </Text>
            </View>

            <View>
              <View style={styles.completion}>
                <Text>Completed</Text>
                <Text>90%</Text>
              </View>

              <View style={styles.bar}>
                <View
                  style={styles.barrange}
                ></View>
              </View>
            </View>
          </View>
            </View>
          <View style={styles.courseCover}>
          <View>
            <Image
              style={styles.courseImg}
              source={require("../../assets/images/motGra.jpeg")}
            />
          </View>

          <View style={styles.courseContent}>
            <View>
              <Text style={styles.courseHead}>Motion Graphics</Text>
              <Text style={styles.author}>
                Vijay | <Text style={{ color: "#0356fc" }}>Design</Text>
              </Text>
            </View>

            <View>
              <View style={styles.completion}>
                <Text>Completed</Text>
                <Text>80%</Text>
              </View>

              <View style={styles.bar}>
                <View
                  style={styles.barrange1}
                ></View>
              </View>
            </View>
          </View>
            </View>
            <View style={styles.courseCover}>
          <View>
            <Image
              style={styles.courseImg}
              source={require("../../assets/images/Graphic.webp")}
            />
          </View>

          <View style={styles.courseContent}>
            <View>
              <Text style={styles.courseHead}>Graphics</Text>
              <Text style={styles.author}>
                Mukundh | <Text style={{ color: "#0356fc" }}>Design</Text>
              </Text>
            </View>

            <View>
              <View style={styles.completion}>
                <Text>Completed</Text>
                <Text>20%</Text>
              </View>

              <View style={styles.bar}>
                <View
                  style={styles.barrange2}
                ></View>
              </View>
            </View>
          </View>
            </View>
          <View style={styles.courseCover}>
          <View>
            <Image
              style={styles.courseImg}
              source={require("../../assets/images/ui_ux.jpeg")}
            />
          </View>

          <View style={styles.courseContent}>
            <View>
              <Text style={styles.courseHead}>UI UX Designing</Text>
              <Text style={styles.author}>
                Aarivu | <Text style={{ color: "#0356fc" }}>Design</Text>
              </Text>
            </View>

            <View>
              <View style={styles.completion}>
                <Text>Completed</Text>
                <Text>60%</Text>
              </View>

              <View style={styles.bar}>
                <View
                  style={styles.barrange3}
                ></View>
              </View>
            </View>
          </View>
            </View>
          <View style={styles.courseCover}>
          <View>
            <Image
              style={styles.courseImg}
              source={require("../../assets/images/sysDes.jpg")}
            />
          </View>

          <View style={styles.courseContent}>
            <View>
              <Text style={styles.courseHead}>System Designing</Text>
              <Text style={styles.author}>
                Arun | <Text style={{ color: "#0356fc" }}>Design</Text>
              </Text>
            </View>

            <View>
              <View style={styles.completion}>
                <Text>Completed</Text>
                <Text>30%</Text>
              </View>

              <View style={styles.bar}>
                <View
                  style={styles.barrange4}
                ></View>
              </View>
            </View>
          </View>
        </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default index;

const styles = StyleSheet.create({
  courseCover: {
    borderBottomWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
    paddingBottom: 10,
    paddingTop: 10,
  },
  courseImg: {
    height: 150,
    width: 150,
    borderRadius: 20,
  },
  courseContent: {
    paddingLeft: 10,
    padding: 10,
    width: "60%",
    justifyContent: "space-between",
  },
  courseHead: {
    fontWeight: 500,
    fontSize: 20,
  },
  author: {
    fontSize: 14,
    paddingTop: 7,
    color: "gray",
  },
  completion: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: "gray",
    paddingBottom: 7,
  },
  bar: {
    borderWidth: 1,
    borderColor: "gray",
    height: 13,
    width: "100%",
    borderRadius: 20,
  },
  barrange: {
    borderWidth: 1,
    borderColor: "gray",
    height: 13,
    backgroundColor: "blue",
    borderRadius: 20,
    width: "90%",
  },
  barrange1: {
    borderWidth: 1,
    borderColor: "gray",
    height: 13,
    backgroundColor: "blue",
    borderRadius: 20,
    width: "75%",
  },
  barrange2: {
    borderWidth: 1,
    borderColor: "gray",
    height: 13,
    backgroundColor: "blue",
    borderRadius: 20,
    width: "20%",
  },
  barrange3: {
    borderWidth: 1,
    borderColor: "gray",
    height: 13,
    backgroundColor: "blue",
    borderRadius: 20,
    width: "70%",
  },
  barrange4: {
    borderWidth: 1,
    borderColor: "gray",
    height: 13,
    backgroundColor: "blue",
    borderRadius: 20,
    width: "50%",
  },
});
