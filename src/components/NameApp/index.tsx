import {
StyleSheet, 
View, 
TextInput, 
Text,
} from "react-native";

export type Email = {
    email: any
}

const NameApp = ()=>{
    
    return(
        <View style={styles.container}>
            
        <Text style={styles.name_app}>
            Toque de Mulher
        </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignContent:"center",
        justifyContent: "center",
        marginBottom: 42
    },
    name_app:{
        textAlign: "center",
        fontSize: 26,
        fontStyle: "italic",
        fontWeight: "300"
    }
});

export default NameApp;