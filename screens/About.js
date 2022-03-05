import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <ScrollView  showsVerticalScrollIndicator={false}>

      <View style={styles.aboutContainer}>
        <Text style={styles.mainHeader}>Vishal Thakur puruvanshi</Text>
        <Text style={styles.paraStyle}>I am full Stack web developer 😎</Text>

        <View>
          <Image style={styles.imgstyle} source={{ uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" }} />
        </View>

        <View style={styles.aboutLayout}>

          <Text style={styles.AboutSubHeader}> About Me</Text>
          <Text style={[styles.paraStyle ,{color:'lightblue'}]}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt tempore dolor maiores corrupti dolores quia fugiat maxime provident minima blanditiis aliquid, itaque quam non doloribus dolorem iure! Dolor atque modi, provident libero vel a!
          </Text>
        </View>

        <Text style={styles.mainHeader}>Follow me on Social Network</Text>
        <View style={styles.socialmenu} >

          <TouchableOpacity
            style={styles.btnstyle}
            onPress={() => { Linking.openURL("https://www.instagram.com/") }}
          >
            <Image style={styles.iconstyle} source={{ uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png" }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnstyle}
            onPress={() => { Linking.openURL("https://www.youtube.com/watch?v=fyJ2UZk5iJ4") }}
          >
            <Image style={styles.iconstyle} source={{ uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png" }} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnstyle}
            onPress={() => { Linking.openURL("https://discord.com/channels/937567913878110250/937567914331107371") }}
          >
            <Image style={styles.iconstyle} source={{ uri: "https://cdn-icons-png.flaticon.com/512/906/906361.png" }} />
          </TouchableOpacity>



        </View>
      </View>
    </ScrollView>
  )
}

export default About

const styles = StyleSheet.create({

  aboutContainer: { display: 'flex', alignItems: "center" },
  imgstyle: { width: 120, height: 120, borderRadius: 100 },
  mainHeader: { fontSize: 20, color: "#344055", textTransform: 'capitalize', fontWeight: '500', fontVariant: ["small-caps"], marginTop: 10, marginBottom: 10 },
  paraStyle: { fontSize: 14, color: '#7d7d7d', paddingBottom: 30 },
  aboutLayout: { backgroundColor: '#4c5dab', paddingHorizontal: 30, marginVertical: 30 },
  AboutSubHeader: { fontSize: 18, color: "#fff", textTransform: 'capitalize', fontWeight: '500', fontVariant: ["small-caps"], alignSelf: 'center', marginVertical: 2 },
  socialmenu:{width:'100%',flexDirection:'row' ,justifyContent:'space-evenly',marginVertical:10},
  iconstyle:{width:"100%",height:50 ,aspectRatio:1}




})