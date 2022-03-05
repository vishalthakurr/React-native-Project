import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';

const Menu = () => {

    const navigation = useNavigation();
    return (
        <View style={styles.menuContainer}>

            <TouchableOpacity
                style={styles.buttonSty}
                onPress={() => navigation.navigate('Course')}
            >
                {/* <Text style={styles.Textsty}>Course</Text> */}
                {/* <Image source={{uri:"https://img.icons8.com/stickers/90/000000/training.png"}}  />
                <Image source={{uri:"https://img.icons8.com/stickers/90/000000/about.png"}}  />
                <Image source={{uri:"https://img.icons8.com/stickers/90/000000/phone-office.png"}}  />
                <Image source={{uri:"https://img.icons8.com/stickers/90/000000/conference.png"}}  /> */}
                <Image style={styles.iconstyle} source={require("../assets/icon.png")}  />


            </TouchableOpacity>
            
            <TouchableOpacity
                style={styles.buttonSty}
                onPress={() => navigation.navigate('Students')}
            >
                {/* <Text style={styles.Textsty}>Students</Text> */}
                <Image style={styles.iconstyle} source={require("../assets/s4co.png")}  />


            </TouchableOpacity>
            
            <TouchableOpacity
                style={styles.buttonSty}
                onPress={() => navigation.navigate('About')}
            >
                {/* <Text style={styles.Textsty}>About</Text> */}
                <Image style={styles.iconstyle} source={require("../assets/s2a.png")}  />

             

            </TouchableOpacity>
            
            <TouchableOpacity
                style={styles.buttonSty}
                onPress={() => navigation.navigate('Contact')}
            >
                {/* <Text style={styles.Textsty}>Contact</Text> */}
                <Image style={styles.iconstyle} source={require("../assets/sc3.png")}  />


            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    menuContainer:{display:'flex',flexDirection:'row',justifyContent:'space-around'},
    buttonSty:{padding:5,borderRadius:8},
    Textsty:{textTransform:'capitalize',color:'gray'},
    iconstyle:{width:"25%" ,height:45,aspectRatio:1}
})

export default Menu;
