import {
StyleSheet, 
View,
Text,
} from "react-native";


const ButtonLogin = ()=>{

    return(
        <View style={styles.container}>
            <View style={styles.container_btn_login}>
                <Text style={styles.text_btn_login}>
                    login
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#000',
        borderRadius: 22,
        borderWidth: 1,
        borderColor: '#A4A4A4',
    },
    container_btn_login:{
        width: '100%',
        height: '100%',
        alignItems: "center",
        justifyContent: "center"
    },
    text_btn_login:{
        color: '#FFF',
        fontSize: 18,
        textTransform: "uppercase",
        fontStyle: "italic",
        fontWeight: "700"
    }
});

export default ButtonLogin;