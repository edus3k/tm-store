import {
NativeStackNavigationProp, 
createNativeStackNavigator
} from '@react-navigation/native-stack'

import TabsBottom from '@routes/TabsBottom';

const Stack = createNativeStackNavigator();

const StacksUsers = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='TabsBottom'
                component={TabsBottom}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
};

export default StacksUsers;