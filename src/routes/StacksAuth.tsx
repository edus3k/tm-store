import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '@views/Welcome';
import Signin from '@views/Signin';
//import RecoverUsers from '@views/RecoverUsers';
//import CreateUsers from '@views/CreateUsers';
import TabsBottom from '@routes/TabsBottom';

const Stack = createNativeStackNavigator();

const StacksAuth = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='Signin'
                component={Signin}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='TabsBottom'
                component={TabsBottom}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
};

export default StacksAuth;