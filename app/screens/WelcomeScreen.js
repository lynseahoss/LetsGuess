import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text} from 'react-native';
const welcomeScreen = (props)=>{
    return(
       <ImageBackground
       style={styles.background}
       source={require("...")}
       >
           <View style={styles.logoContainer}>
    {/* logo in image tag */}
           <Image style={styles.logo}source={require("...")}/> 
           <Text>Guess that Character</Text>
           </View>
           <View style={styles.loginBtn}></View>
           <View style={styles.registerBtn}></View>
       </ImageBackground>
    )
}
        const styles = StyleSheet.create({
            background: {
                flex: 1, //allows imageBackground to take entire screen
                justifyContent:'flex-end',
                alignItems:'center',

            },
            loginBtn: {
                width: "25%",
                height: 20,
                backgroundColor: "turquoise"
            },
            logo:{
                width:100,
                height:100,
            },
            logo:{
                position: 'absolute',
                top: 70,
            },
            registerBtn: {
            width: "25%",
            height: 20,
            backgroundColor: "gold"
            }
        })

export default welcomeScreen