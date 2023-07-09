import React from "react";
import {
StyleSheet, 
View, 
Text,
} from "react-native";

export type ErroEmail = {
    errEmail: string | null
}

const TextErroEmail = (props: ErroEmail)=>{
    return(
        <View style={styles.container}>
            <View style={styles.container_erro_email}>
                <Text style={styles.text_erro_email}>
                    {props.errEmail}
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
    container_erro_email:{
        width: '90%',
        marginStart: 26,
        marginBottom: 20
      },
      text_erro_email:{
        color: '#FF0000',
        fontSize: 12,
        fontStyle: "italic",
        fontWeight: "400"
      },
});

export default TextErroEmail;