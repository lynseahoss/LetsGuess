import React from 'react';
import { ImageBackground, StyleSheet, View} from 'react-native';
const welcomeScreen = (props)=>{
    return(
       <ImageBackground
       style={styles.background}
       source={require("./node_modules")}
       >
           <View style={styles.loginBtn}></View>
       </ImageBackground>
    )
}
        const styles = StyleSheet.create({
            background: {
                flex: 1, //allows imageBackground to take entire screen
            },
            loginBtn: {
            width: "25%",
            height: 20,
            backgroundColor: "yellowgreen"
            }
        })

export default welcomeScreen