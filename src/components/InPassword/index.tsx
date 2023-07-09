import {useState} from 'react';
import {
StyleSheet, 
View, 
TextInput, 
Text,
Image
} from "react-native";
    
import ic_cadeado from '@assets/cadeado.png';
import ic_olhoF from '@assets/olhoFechado.png';
import ic_olhoA from '@assets/olhoAberto.png';

export type Password = {
    password: any
}

const InPassword = (props:Password)=>{

    let icOlhos = {
        F: ic_olhoF,
        A: ic_olhoA
    }
    
    const [secure, setSecure] = useState(true);
    const [icSecure, setIcSecure] = useState(icOlhos.F);

    const stateSecure = ()=>{
        if(secure == true){
            setSecure(false);
            setIcSecure(icOlhos.A);
        }else{
            setSecure(true);
            setIcSecure(icOlhos.F);
        }
    }

    return(
        <View style={styles.container}>
            <Image style={styles.icon_password} source={ic_cadeado}/>
            <TextInput
                style={styles.in_password}
                placeholder="Digite sua senha"
                keyboardType="visible-password"
                onChangeText={props.password}
                secureTextEntry={secure}
            />
            <Text onPress={stateSecure}>
                <Image  style={styles.icon_secure} source={icSecure}/>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#FFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#000'
    },
    icon_password:{
        width: 16,
        height: 16,
        marginEnd: 6,
        marginStart: 6,
        fontSize: 18,
        fontStyle: "italic",
        fontWeight: "500"
    },
    in_password:{
        width: '80%',
        height: 40,
        fontSize: 16
    },
    icon_secure:{
        width: 20,
        height: 20,
        marginTop: 6,
        marginEnd: 6,
        marginStart: 6
    }
});

export default InPassword;