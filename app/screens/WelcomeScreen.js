import React from 'react';
import { ImageBackground, StyleSheet, View} from 'react-native';
const welcomeScreen = (props)=>{
    return(
       <ImageBackground
       style={styles.background}
       source={require("./node_modules")}
       >
           <View style={styles.loginBtn}></View>
           <View style={styles.registerBtn}></View>
       </ImageBackground>
    )
}
        const styles = StyleSheet.create({
            background: {
                flex: 1, //allows imageBackground to take entire screen
                justifyContent='flex-end'
            },
            loginBtn: {
            width: "25%",
            height: 20,
            backgroundColor: "turquoise"
            },
            registerBtn: {
            width: "25%",
            height: 20,
            backgroundColor: "gold"
            }
        })

export default welcomeScreen