import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'

const Contact = ({ navigation }) => {

  const [name, setname] = useState("");

  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");
  const [agree, setagree] = useState(false);



  const Submitdata = () => {


    if (!name || !email || !phone || !message || !agree) {
      Alert.alert("PlZZ fill all the fields")
    }
    else {

      Alert.alert(`Thank you  ${name}`);
      navigation.navigate("Home")
      // console.log(name,email,phone,message ,agree);


    }

  }


  return (

    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={styles.mainheader}>Level up your Knowledge</Text>
        <Text style={styles.desc}>Your can reach any time  via thakur.gmail.com</Text>

        <View style={styles.inputContainer}>

          <Text style={styles.lable}>Enter your name</Text>
          <TextInput style={styles.inputsty} placeholder='eg.vinod' keyboardType='ascii-capable'
            value={name} onChangeText={(userdata) => setname(userdata)}

          />
        </View>
        <View style={styles.inputContainer}>

          <Text style={styles.lable}>Enter your Email</Text>
          <TextInput style={styles.inputsty} placeholder='eg.demo.gmail.com' keyboardType='email-address'
            value={email} onChangeText={(userdata) => setemail(userdata)}

          />
        </View>
        <View style={styles.inputContainer}>

          <Text style={styles.lable}>Enter your Mobile Number </Text>
          <TextInput style={styles.inputsty} placeholder='eg.0000000000' keyboardType='number-pad' maxLength={11}
            value={phone} onChangeText={(userdata) => setphone(userdata)}

          />
        </View>
        <View style={styles.inputContainer}>

          <Text style={styles.lable}>How we can Help you?</Text>
          <TextInput style={[styles.inputsty, styles.textareasty]} placeholder='Write Here' numberOfLines={4} multiline={true} keyboardType='ascii-capable' returnKeyType='google'
            value={message} onChangeText={(userdata) => setmessage(userdata)}

          />
        </View>
        {/* checkbox */}

        <View style={styles.wrapper}>

          <Checkbox
            value={agree}
            onValueChange={() => setagree(!agree)}
            color={agree ? "#4630EB" : undefined}

          />
          <Text style={styles.wrappertext}>I have read agreed with all TC</Text>
        </View>


        {/* button */}

        <View style={styles.btncontainer}>

          <TouchableOpacity

            style={[styles.btn, { backgroundColor: agree ? "#4630EB" : "gray" }]}
            disabled={!agree}
            onPress={Submitdata}

          >
            <Text style={styles.btntext} > Submit</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({

  mainContainer: { height: "100%", paddingHorizontal: 30, backgroundColor: "#fff" },
  mainheader: { fontSize: 20, color: "#344055", textTransform: 'capitalize', fontWeight: '500', fontVariant: ["small-caps"], marginTop: 10, marginBottom: 10 },
  desc: { fontSize: 20, color: '#7d7d7d', paddingBottom: 10 },

  inputContainer: { marginBottom: 13 },
  lable: { marginVertical: 6, fontSize: 15, borderColor: 'rgba(0,0,0,0.3)' },
  inputsty: { borderWidth: 0.4,paddingVertical:4, fontSize: 16, borderRadius: 3 ,paddingHorizontal:10},
  textareasty: { paddingVertical: 4 },

  // checkbox
  wrapper: { display: 'flex', flexDirection: 'row', },
  wrappertext: { marginLeft: 10, color: 'gray' },

  // button
  btncontainer: { display: 'flex', alignItems: 'center', marginVertical: 6 },
  btn: { paddingHorizontal: 20, paddingVertical: 8, borderRadius: 5 },
  btntext: { color: 'white', fontWeight: 'bold', fontVariant: ["small-caps"], fontSize: 20 }

})