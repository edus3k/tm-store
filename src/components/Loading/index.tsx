import React, { useState, useEffect} from "react";
import { StatusBar } from 'expo-status-bar';
import { 
StyleSheet, 
View,
Image,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const Loading = () =>{
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    startLoading();
  }, []);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={styles.spinner_text}
        indicatorStyle={styles.spinner}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinner:{
    marginTop: '20%'
  },
  spinner_text:{
    textAlign: 'center',
    color: '#000',
    marginTop: '20%'
  }
});

export default Loading;