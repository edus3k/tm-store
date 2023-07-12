import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { 
StyleSheet, 
Text,
TouchableOpacity, 
View, 
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from '@config/Firebase';

import { StackTypes } from '@config/StackTypes';
import NameApp from "@components/NameApp";
import InEmail from '@components/InEmail';
import InPassword from "@components/InPassword";
import ButtonLogin from "@components/ButtonLogin";
import TextErroEmail from "@components/TextErroEmail";
import TextErroPassword from "@components/TextErroPassword";
import ButtonRecover from "@components/ButtonRecover";
import ButtonCreate from "@components/ButtonCreate";


const Signin = () =>{

  const navigation = useNavigation<StackTypes>();

  const [email, setEamil] = useState(null);
  const [password, setPassword] = useState(null);
  const [errEmail, setErroEmail] = useState('');
  const [errPassword, setErroPassword] = useState('');

  const validation = ()=>{
    if(email != null && password != null){
      
      const getAuths = Auth;
      
      signInWithEmailAndPassword(getAuths, email, password)
        .then((userCredential) => {
          // Signed in 
          console.log('entrando no app...');
          //const user = userCredential.user;
          navigation.navigate('Home');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log({erro:errorCode, errorMesg: errorMessage});
        });
    }
    if(email == null || password == null){
      console.log('email ou senha null');
      setErroEmail('*Email informado errado.');
      setErroPassword('*Senha informada errada.');
    }
    if(email == null){
      console.log('email null');
      setErroEmail('*Email informado errado.');
    }
    if(password == null){
      console.log('senha null');
      setErroPassword('*Senha informada errada.');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.container_view}>
        
        <NameApp/>

        <InEmail email={setEamil}/>
        <TextErroEmail errEmail={errEmail}/>     
        
        <InPassword password={setPassword}/>
        <TextErroPassword errPassword={errPassword}/>
        
        <ButtonRecover/>

        <TouchableOpacity
          style={styles.container_btn_login}
          onPress={validation}>
          <ButtonLogin/>
        </TouchableOpacity>

        <ButtonCreate/>
        
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_view:{
    width: '80%'
  },
  container_btn_login:{
    alignItems: "center",
    justifyContent: "center",
    marginStart: 32,
    marginEnd: 32
  }
});

export default Signin;