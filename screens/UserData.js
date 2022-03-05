import { StyleSheet, Text, View, FlatList, Image ,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'


//https://thapatechnical.github.io/userapi/users.json    API key
const UserData = () => {


  const [mydata, setmydata] = useState("");
  const [loading, setloading] = useState(true);


  const get_user_data = async () => {

    try {


      const res = await fetch("https://thapatechnical.github.io/userapi/users.json")

      const data = await res.json()

      setmydata(data)
      setloading(false)

    } catch (error) {


      return error



    }
  };

  useEffect(() => {

    get_user_data();

  }, []);



  //render yhe student card
  const showUserdata = ({ item }) => {

    return (
      <View style={styles.mainContainer}>


        <View style={styles.card}>
          <View style={styles.imgcontainer}>
            <Image style={styles.imgstyle} source={{ uri: item.image }} />
          </View>
          <View style={styles.bioDataContainer}>

            <Text style={styles.biodata}>Bio-Data</Text>
            <Text style={styles.idnumber}>{item.id < 10 ? `#0${item.id}` : `#${item.id}`}</Text>
          </View>


          <View style={styles.Contain}>
            <Text style={styles.myname}>Name: {item.name}</Text>
            <Text style={styles.myname}>Email: {item.email}</Text>
            <Text style={styles.myname}>Mobile: {item.mobile}</Text>
          </View>

        </View>

      </View>
    )


  }

  return (
    <View style={{ height: "100%", display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: "lightpink" }}>
      <Text style={styles.mainheader}>List of Students</Text>

      {loading ?  <ActivityIndicator size="large" color="white" />:
        <FlatList
          keyExtractor={(key) => key.userId}
          data={mydata}
          renderItem={showUserdata}
          // horizontal
          // showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      }
    </View>
  )
}

export default UserData

const styles = StyleSheet.create({

  mainheader: { fontSize: 30, textAlign: 'center', color: '#455677', paddingVertical: 10 },
  mainContainer: { paddingHorizontal: 20, paddingVertical: 20 },
  card: { backgroundColor: "#fff", width: 250, height: 350, borderRadius: 5 },
  bioDataContainer: { backgroundColor: '#353535', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center', paddingVertical: 10 },
  biodata: { fontSize: 30, color: "#fff" },
  idnumber: { fontSize: 20, color: "rgba(255,255,255,0.5)" },
  imgcontainer: {
    padding: 10
  },

  imgstyle: { width: "100%", height: 180 },
  Contain: { padding: 10, backgroundColor: "#353535", borderBottomRightRadius: 5, borderBottomLeftRadius: 5 },
  myname: { fontSize: 14, color: "#fff", marginBottom: 10 },





})