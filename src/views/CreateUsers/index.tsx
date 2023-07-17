import React from 'react';
import {
StyleSheet,
View,
Text
} from 'react-native';

const CreateUsers = ()=>{
    return(
        <View style={styles.conatiner}>
            <Text>Create Users</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    conatiner:{
        width: '100%',
        height: '100%'
    }
});

export default CreateUsers;