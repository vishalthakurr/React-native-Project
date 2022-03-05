import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Menu from '../component/Menu';

const Home = (props) => {

    let des = " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non impedit adipisci quaerat laboriosam esse autem vero doloremque magnam laborum rem?"
    return (
        <View style={styles.main}>

            <View style={styles.Hbox} >

                <Image style={styles.Himg} source={require("../assets/s.jpg")} resizeMode="cover" />



                <Text style={styles.text1}>Welcom to </Text>
                <Text style={[styles.text1, { fontSize: 28, color: "lightblue", marginTop: 0 }]}>{props.appname}</Text>

                <Text style={styles.para}>
                    {des}
                </Text>
            </View>

            <View style={styles.menu}>
                <View style={styles.linestyle}></View>
                <Menu />
                <View style={[styles.linestyle,{marginBottom:0}]}></View>

            </View>

        </View>



    );
}

const styles = StyleSheet.create({

    main: { height: "100%", display: 'flex', justifyContent: 'space-between', paddingHorizontal: 20, textAlign: "center", backgroundColor: "#fff" },
    Hbox: { display: 'flex', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10 },
    Himg: { display: 'flex', alignItems: 'stretch', marginVertical: 35, borderRadius: 20, width: "100%", height: undefined, aspectRatio: 1, opacity: 0.9 },
    text1: { fontSize: 25, color: "#344055", textTransform: 'uppercase', },
    para: { marginTop: 10, fontSize: 15, color: 'gray' },
    menu: {},
    linestyle: { marginVertical: 8, borderWidth: 0.2, borderColor: "gray" },
})

export default Home;
