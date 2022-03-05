import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from '../api/Courses'

const Course = ({ navigation }) => {

  const courseCard = ({ item }) => {
    return (

      <View style={styles.Maincontainer}>
        <View style={styles.card}>
          <Image
            style={styles.imgsty}
            source={item.image}
            resizeMode="contain"
          />
        </View>
        <View>

          <Text style={styles.heading}>
            {item.title}
          </Text>
          <Text style={{ color: '#7d7d7d', lineHeight: 18, fontSize: 15 }}>
            {item.des}
          </Text>



          <TouchableOpacity
            style={styles.btn}
            onPress={() => { navigation.navigate("CourseDetail", { Cid: item.id }) }}

          >
            <Text style={styles.btntext}>
              Course Detail
            </Text>

          </TouchableOpacity>



        </View>
      </View>


    )
  }



  return (
    <FlatList keyExtractor={(item) => item.id}
      data={Courses}
      renderItem={courseCard}
    />
  )
}

export default Course

const styles = StyleSheet.create({
  Maincontainer: { paddingHorizontal: 15, borderRadius: 8, marginHorizontal: 20, marginVertical: 20, elevation: 10, shadowOpacity: 0.5, shadowRadius: 10, shadowColor: "gray", backgroundColor: "white" },
  card: {},
  imgsty: { width: "100%", height: undefined, aspectRatio: 1 },
  heading: { textAlign: "center", fontSize: 22, color: "#344055", textTransform: "capitalize", paddingBottom: 15 },
  btn: { display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#809fff', borderRadius: 5, marginHorizontal: 40, paddingVertical: 15, marginVertical: 15 },
  btntext: { fontSize: 20, color: "#eee", }


})