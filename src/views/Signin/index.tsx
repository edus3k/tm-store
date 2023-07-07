import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import InEmail from '@components/InEmail';

const Signin = () =>{
  return (
    <View style={styles.container}>
      <InEmail/>
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
});

export default Signin;