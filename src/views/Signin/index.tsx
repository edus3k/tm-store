import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { 
StyleSheet, 
Text, 
View 
} from 'react-native';

import InEmail from '@components/InEmail';
import InPassword from "@components/InPassword";


const Signin = () =>{

  const [email, setEamil] = useState(null);
  const [password, setPassword] = useState(null);
  const [erroEmail, setErroEmail] = useState('erro');
  const [erroPassword, setErroPassword] = useState('erro');

  function validation(){
    if(email != null && password != null){

    }
    if(email == null || email == ''){

    }
    if(password == null || password == ''){

    }
  }

  return (
    <View style={styles.container}>
      <InEmail email={setEamil}/>
      <View style={styles.container_erro_email}>
        <Text style={styles.text_erro_email}>{erroEmail}</Text>
      </View>
      <InPassword password={setPassword}/>
      <View style={styles.container_erro_password}>
        <Text style={styles.text_erro_password}>{erroPassword}</Text>
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
  container_erro_email:{
    width: '90%',
    marginTop: 2,
    marginStart: 18,
    marginBottom: 18
  },
  text_erro_email:{
    color: '#FF0000',
    fontSize: 12,
    fontStyle: "italic",
    fontWeight: "400"
  },
  container_erro_password:{
    width: '90%',
    marginTop: 2,
    marginStart: 18,
    marginBottom: 18
  },
  text_erro_password:{
    color: '#FF0000',
    fontSize: 12,
    fontStyle: "italic",
    fontWeight: "400"
  }
});

export default Signin;