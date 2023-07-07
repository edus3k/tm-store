import {NativeStackNavigationProp, createNativeStackNavigator} from '@react-navigation/native-stack'

//import Welcome from '@views/Welcome';
import Signin from '@views/Signin';
//import RecoverUsers from '@views/RecoverUsers';
//import CreateUsers from '@views/CreateUsers';
//import Home from '@views/Home';;

const Stack = createNativeStackNavigator();

type StackNavigation = {
    Welcome: undefined,
    Signin: undefined,
    RecoverUsers: undefined,
    CreateUsers: undefined,
    Home: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

const UsersStacks = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Signin'
                component={Signin}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
};

export default UsersStacks;