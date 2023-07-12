import { 
StyleSheet,
View,
Text,
Image,
TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

import { StackTypes } from '@';

const Welcome = () => {
    
    const navigation = useNavigation<StackTypes>();

    const login = () =>{
        navigation.navigate('Signin');
    }

    return (
    <View style={styles.container}>
        <View style={styles.container_icon}>
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
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#FE0364',
    alignItems: 'center',
    justifyContent: 'center',
    },
    container_icon:{
    flex:3,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    },
    container_text:{
    flex:1,
    width:'100%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingStart: '12%',
    paddingEnd: '12%'
    },
    icon:{
    width: '60%',
    height: '70%'
    },
    title:{
    fontSize: 24,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: '600',
    marginBottom: 10
    },
    label:{
    fontSize: 16,
    textAlign: 'justify',
    fontStyle: 'italic',
    fontWeight: '300',
    marginBottom: 18
    },
    label_button:{
    color:'#A1A1A1',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '300',
    marginBottom: 20
    },
    button_text:{
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '800',
    },
    button:{
    backgroundColor: '#FE0364',
    borderRadius: 25,
    textAlign: 'center',
    marginStart: '20%',
    marginEnd: '20%',
    padding: 10
    }
    
});

export default Welcome;
