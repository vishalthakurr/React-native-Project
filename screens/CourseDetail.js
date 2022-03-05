import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Courses from '../api/Courses'
const CourseDetail = ({ navigation, route }) => {

    const id = route.params.Cid
    // console.warn(id);
    const SeectedCourse = Courses.find((element) => {
        return id === element.id
    })
    return (
        <ScrollView style={{height:"100%"}} showsVerticalScrollIndicator={false}>

            <View style={styles.Maincontainer}>
                <View style={styles.card}>
                    <Image
                        style={styles.imgsty}
                        source={SeectedCourse.image}
                        resizeMode="contain"
                    />
                </View>
                <View>

                    <Text style={styles.heading}>
                        {SeectedCourse.title}
                    </Text>
                    <Text style={styles.desc}>
                        {SeectedCourse.des}
                    </Text>
                    <Text style={styles.desc}>
                        {SeectedCourse.course1}
                    </Text>
                    <Text style={styles.desc}>
                        {SeectedCourse.course2}
                    </Text>
                    <Text style={styles.desc}>
                        {SeectedCourse.course3}
                    </Text>

                    <View style={styles.btncontainer}>
                        <Text style={styles.price}>&#8377;{SeectedCourse.price}</Text>

                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => { navigation.navigate("Course", { Cid: SeectedCourse.id }) }}

                        >
                            <Text style={styles.btntext}>
                                Join Now
                            </Text>

                        </TouchableOpacity>
                    </View>



                </View>
            </View>
        </ScrollView>

    )
}

export default CourseDetail

const styles = StyleSheet.create({
    Maincontainer: { paddingHorizontal: 15, borderRadius: 8, marginHorizontal: 20, marginVertical: 20, elevation: 10, shadowOpacity: 0.5, shadowRadius: 10, shadowColor: "gray", backgroundColor: "white" },
    card: {},
    imgsty: { width: "100%", height: undefined, aspectRatio: 1 },
    heading: { textAlign: "center", fontSize: 22, color: "#344055", textTransform: "capitalize", paddingBottom: 15 },
    desc: { color: '#7d7d7d', lineHeight: 18, fontSize: 15, textAlign: 'center', paddingVertical: 10 },

    
    btncontainer:{display:'flex',flexDirection:'row',justifyContent:'center',textAlign:'center',marginVertical:10},
    price:{paddingVertical:15 ,backgroundColor:'black',color:'white',paddingHorizontal:15,fontSize:20,alignSelf:'center',borderRadius:5},
    btn: { alignSelf:'center' ,backgroundColor:'lightblue',padding:15,borderRadius:10 ,marginLeft:10 },
    btntext: { fontSize: 20, color: "white", }
})