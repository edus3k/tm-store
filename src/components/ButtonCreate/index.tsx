import React, {useState} from 'react';
import {
StyleSheet,
View,
Text
} from 'react-native';


const ButtonCreate = ()=>{
    
    const routerCreate = ()=>{
        console.log('view CREATE');
        
    }

    return(
        <View style={styles.conatiner}>
            <Text 
                onPress={routerCreate}
                style={styles.text_btn_create}>
                    Não possui uma conta?<br></br>
                    Cadastre-se!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    conatiner:{
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 42,
    },
    text_btn_create:{
        textAlign: 'center',
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: '600'
    }

});

export default ButtonCreate;