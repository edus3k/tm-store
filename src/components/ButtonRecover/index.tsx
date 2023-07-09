import React from "react";
import {
StyleSheet, 
View, 
Text,
} from "react-native";


const ButtonRecover = ()=>{
    
    const routerRecover = ()=>{
        console.log('view RECOVER');
        
    }

    return(
        <View style={styles.container}>
            <Text 
            style={styles.text_recover}
            onPress={routerRecover}>
                Esqueceu sua senha?
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: "flex-start",
        justifyContent: "center",
        marginBottom: 38
    },
    text_recover:{
        fontSize: 14,
        fontStyle: "italic",
        fontWeight:"600"
    }
});

export default ButtonRecover;