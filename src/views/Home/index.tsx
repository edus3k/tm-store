import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { 
StyleSheet, 
Text,
TouchableOpacity, 
View, 
} from 'react-native';

const Home = () =>{

  return (
    <View style={styles.container}>
      <View style={styles.container_view}>
        <Text>Home</Text>
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

export default Home;