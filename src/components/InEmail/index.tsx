import React, {useState} from "react";
import {
StyleSheet, 
View, 
TextInput, 
Text} from "react-native";

export type Email = {
    email: undefined
}

const InEmail = (props:Email)=>{
  
    return(
        <View style={styles.container}>
            <Text style={styles.icon_email}>@</Text>
            <TextInput
                style={styles.in_email}
                placeholder="Digite um email"
                onChangeText={props.email}
                value={props.email}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '90%',
        height: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#A4A4A4',
        borderRadius: 12,
    },
    icon_email:{
        paddingEnd: 6,
        paddingStart: 6,
        fontStyle: "italic",
        fontWeight: "400"
    },
    in_email:{
        width: '90%',
        height: 40,
        fontSize: 16
    }
});

export default InEmail;