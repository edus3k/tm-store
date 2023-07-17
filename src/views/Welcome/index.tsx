import { 
StyleSheet,
View,
Text,
Image,
TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

import Logo from '@assets/logo.tm.png';
import Loading from '@components/Loading';
import { StackTypes } from '@config/StackTypes';

const gradient = [
'transparent', 'rgba(0,0,0,0.2)',
'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.6)',
'rgba(0,0,0,0.8)', 'rgba(0,0,0,9)'];

const Welcome = () => {
    const navigation = useNavigation<StackTypes>();

    const login = () =>{
        navigation.navigate('Signin');
    }
    /**
     * <View style={styles.container_icon}>
            
        </View>
        <Animatable.View 
        delay={700}
        animation='fadeInUp' 
        style={styles.container_text}>
        <Text style={styles.title}>Bem Vindo a Woman's Touch Store</Text>
        <Text style={styles.label}>Vanha comparar sua felicidade</Text>
        <Text style={styles.label_button}>Faça o login para começar!</Text>
        <TouchableOpacity 
        onPress={login}
        style={styles.button}>
            <Text style={styles.button_text}>Acessar</Text>
        </TouchableOpacity>
        </Animatable.View>
     * 
     */
    return (
        <View style={styles.container}>
            <LinearGradient style={styles.gradient} 
            colors={gradient}>    
                <View style={styles.welcome}>
                    <Image source={Logo} style={styles.logo}/>
                    <Text >Bem Vindo a Woman's Touch Store</Text>
                    <Text >Vanha comparar sua felicidade</Text>
                    <Text >Faça o login para começar!</Text>
                    <TouchableOpacity style={styles.button} 
                    onPress={login}>
                        <Text >Acessar</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gradient:{
        width: '100%',
        height: '100%'
    },
    welcome:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        width: 64,
        height: 64
    },
    button:{
        width: '60%',
        height: 40,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 32
    }
});

export default Welcome;
