import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const index = () => {

  const styles = createStyleSheet();

  return (
    <GestureHandlerRootView>

         {/* header */}
         <View style={styles.header}>
            <View style={styles.userHead}>
                <View style={styles.headImageSection}>
                   <View style={styles.userImage}>
                   <View>
                    <Image source={require('../../assets/images/user.jpeg')}  style={{height:50,width:50}}></Image>
                   </View>
                   <View>
                   <Text>Good Morning</Text>
                   <Text style={{fontSize: 20, fontFamily: "sans-serif"}}>Sumathi S</Text>
                   </View>
                   </View>
                </View>
                <View style={styles.headIconSection}>
                    <View><MaterialIcons name="search" size={26} color="black" /></View>
                    <View><FontAwesome name="bell" size={26} color="black" /></View>
                </View>
            </View>
        </View>
    <ScrollView style={styles.container}> 
   
     {/* second bar */}

     <View style={styles.secondSectionContainer}>
        <View style={styles.bodyContainer}>
            <View style={styles.FirsttextArea}>
                <Text style={{fontSize: 20 ,color: "white",fontWeight: 400}}>TODAY SPECIAL</Text>
                <Text style={{color: "#e5e5e5",padding:5}}>Hurry!Today's your last change for a discount</Text>
            </View>
            <View style={styles.secondTextArea}>
                <Text style={{fontSize: 40 ,color: "white",fontWeight: 400,padding:15}}>75%</Text>
            </View>
        </View>
     </View>
     

     {/*Suggestion Icons  */}

     <View style={styles.sugsSection}>
        <View style={styles.sugsIcons}>
            <Text style={styles.textIcons}>
            <MaterialCommunityIcons name="pencil-ruler" size={36} color="#0356fc" />
            </Text>
            <Text style={{textAlign: "center"}}>Design</Text>
        </View>
        
        <View style={styles.sugsIcons}>
            <Text style={styles.textIcons}>
            <MaterialCommunityIcons name="language-python" size={36} color="#0356fc" />
            </Text>
            <Text style={{textAlign: "center"}}>Program</Text>
        </View>

        <View style={styles.sugsIcons}>
            <Text style={styles.textIcons}>
            <FontAwesome name="heartbeat" size={36} color="#0356fc" />
            </Text>
            <Text style={{textAlign: "center"}}>Health</Text>
        </View>

        <View style={styles.sugsIcons}>
            <Text style={styles.textIcons}>
            <MaterialIcons name="more-vert" size={36} color="#0356fc" />
            </Text>
            <Text style={{textAlign: "center"}}>More</Text>
        </View>

        
     </View> 

      
      {/*  course section  */}

      <View styles={styles.course}>

      <View style={styles.courseContainer}>
        <View style={styles.courseHeader}>
            <Text style={{fontSize: 22,
            fontFamily: "sans-serif",
            fontWeight: 500}}>Popular Courses</Text>
            <Text style={{color:"#0356fc", fontSize: 18}}>View all</Text>
            </View>

        <View style={styles.courseImageContainer}>
            <View style={styles.courseBodyContainer}>
               <Image source={require("../../assets/images/gc.webp")} style={styles.courseImage}/>
               <Text style={{fontSize: 16,fontWeight: 500, paddingTop: 10}}>Graphic Design Pro</Text>
               <Text style={{color: "gray", paddingTop: 10, fontSize: 13, paddingBottom: 10}}><FontAwesome name="star" size={14} color="gray" /> 4.7 | 8,812 students</Text>
               <Text style={{fontSize: 14, color: "gray"}}>Aadil Aariz | Design </Text>
            </View>

            <View style={styles.courseBodyContainer}>
               <Image source={require("../../assets/images/py.webp")} style={styles.courseImage}/>
               <Text style={{fontSize: 16,fontWeight: 500, paddingTop: 10}}>Python Course</Text>
               <Text style={{color: "gray", paddingTop: 10, fontSize: 13, paddingBottom: 10}}><FontAwesome name="star" size={14} color="gray" /> 4.7 | 8,812 students</Text>
               <Text style={{fontSize: 14, color: "gray"}}>Aadil Aariz | Design </Text>
            </View>
        </View>
      </View>


      {/* Top rated course section */}
      <View style={styles.courseContainer1}>
        <View style={styles.courseHeader}>
            <Text style={{fontSize: 22,
            fontFamily: "sans-serif",
            fontWeight: 500}}>Top Rated Courses</Text>
            <Text style={{color:"#0356fc", fontSize: 18}}>View all</Text>
            </View>

        <View style={styles.courseImageContainer}>
            <View style={styles.courseBodyContainer}>
               <Image source={require("../../assets/images/gc.webp")} style={styles.courseImage}/>
               <Text style={{fontSize: 16,fontWeight: 500, paddingTop: 10}}>UI/UX Design </Text>
               <Text style={{color: "gray", paddingTop: 10, fontSize: 13, paddingBottom: 10}}><FontAwesome name="star" size={18} color="gray" /> 4.7 | 8,812 students</Text>
               <Text style={{fontSize: 14, color: "gray"}}>Aadil Aariz | esign</Text>
            </View>

            <View style={styles.courseBodyContainer}>
               <Image source={require("../../assets/images/py.webp")} style={styles.courseImage}/>
               <Text style={{fontSize: 16,fontWeight: 500, paddingTop: 10}}>Graphic Design Pro</Text>
               <Text style={{color: "gray", paddingTop: 10, fontSize: 13, paddingBottom: 10}}><FontAwesome name="star" size={18} color="gray" /> 4.7 | 8,812 students</Text>
               <Text style={{fontSize: 14, color: "gray"}}>Aadil Aariz | Design </Text>
            </View>
        </View>
      </View>


      </View>


    </ScrollView>
    </GestureHandlerRootView>
  )
}

export default index;

function createStyleSheet(){
    return StyleSheet.create({
        container:{
            flex: 1,
            padding: 20,
            
        },
        userHead:{
            flexDirection: "row",
            padding: 20,
            paddingBottom: 0,
            paddingTop: 40
        },
        headImageSection:{
            flex: 1
        },
        userImage:{
            flexDirection: "row",
            gap: 20
        },
        headIconSection:{
            flexDirection: "row",
            gap: 20
        },
        secondSectionContainer:{
            flex: 1,
            paddingTop: 0,
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            paddingBottom: 10
        },
        bodyContainer:{
            flexDirection: "row",
            borderWidth : 1,
            borderRadius: 30,
            backgroundColor: "#0356fc",
            color: "white",
            height: 140,
            padding:10
        },
        FirsttextArea:{
            width: "70%",
            padding: 10,
            justifyContent: "center"
        },
        sugsSection:{
            flex: 1,
            flexDirection: "row",
            padding: 10
        },
        sugsIcons:{
            width: "25%",
            height: "100%",
            padding: 10,
            justifyContent: "center",
            alignContent: "center",
            textAlign: "center"
        },
        textIcons:{
            borderRadius: 50,
            height: 70,
            width: 70,
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "#e5e5e5",
            textAlign: "center",
            paddingTop: 15
        },
        course:{
            paddingBottom: 50
        },
        courseContainer:{
            paddingTop: 10,
            paddingBottom: 20
        },
        courseContainer1:{
            paddingTop: 10,
            paddingBottom: 50
        },
        courseHeader:{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10
        },
        courseImageContainer:{
            flexDirection: "row",
            gap: 10
        },
        courseBodyContainer:{
            width: "50%",
            height: "auto",
            borderRadius: 10,
            borderWidth: 1,
            padding: 10
        },
        courseImage:{
            height: 100,
            width: "auto",
            borderRadius: 10
        }
    })
} 