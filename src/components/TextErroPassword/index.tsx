import React from "react";
import {
StyleSheet, 
View, 
Text,
} from "react-native";

export type ErroPassword = {
    errPassword: string | null
}

const TextErroPassword = (props: ErroPassword)=>{
    return(
        <View style={styles.container}>
            <View style={styles.container_erro_password}>
                <Text style={styles.text_erro_password}>
                    {props.errPassword}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        minHeight:40
    },
    container_erro_password:{
        width: '90%',
        marginStart: 26,
        marginBottom: 18
    },
    text_erro_password:{
    color: '#FF0000',
    fontSize: 12,
    fontStyle: "italic",
    fontWeight: "400"
    },
});

export default TextErroPassword;