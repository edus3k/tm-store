import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { 
StyleSheet, 
Text,
TouchableOpacity, 
View, 
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import StacksApp from "@routes/StacksApp";
import StacksAuth from '@routes/StacksAuth';
import { Auth } from "@config/Firebase";
import { StackTypes } from "@config/StackTypes";

const Profiler = () =>{

  const navigation = useNavigation<StackTypes>();

  const user = Auth

  const exit = ()=>{
    user.signOut();
    navigation.navigate('StacksApp')
  }

  return (
    <View style={styles.container}>
      <View style={styles.container_view}>
        <Text>Profielr</Text>
        <Text>{}</Text>
        <TouchableOpacity
        onPress={exit}>
          <Text>Sair</Text>
        </TouchableOpacity>
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
  }
});

export default Profiler;