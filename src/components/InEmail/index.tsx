import {
StyleSheet, 
View, 
TextInput, 
Text,
} from "react-native";

export type Email = {
    email: any
}

const InEmail = (props:Email)=>{
   
    return(
        <View style={styles.container}>
            <Text style={styles.icon_email}>@</Text>
            <TextInput
                style={styles.in_email}
                placeholder="Digite um email"
                keyboardType="email-address"
                onChangeText={props.email}
            />
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
    icon_email:{
        paddingEnd: 6,
        paddingStart: 6,
        fontSize: 18,
        fontStyle: "italic",
        fontWeight: "500"
    },
    in_email:{
        width: '90%',
        height: 40,
        fontSize: 16
    }
});

export default InEmail;