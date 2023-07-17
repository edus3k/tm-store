import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, AntDesign } from '@expo/vector-icons';

import Store from '@views/Store';
import Home from '@views/Home';
import Profiler from '@views/Profiler';

import Welcome from '@views/Welcome';
import Signin from '@views/Signin';
//import RecoverUsers from '@views/RecoverUsers';
import CreateUsers from '@views/CreateUsers';
import TabsBottom from '@routes/TabsBottom';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const RoutesDev = () =>{

    const Rtabs = ()=>{
        <Tabs.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true
            }}>
            <Tabs.Screen
                name='Store'
                component={Store}
                options={{
                    tabBarIcon: ({ size, color })=><AntDesign 
                        name='shoppingcart'
                        size={size}
                        color={color}
                    />
                }}
            />
            <Tabs.Screen
                name='Profiler'
                component={Profiler}
                options={{
                    tabBarIcon: ({ size, color })=><Feather 
                        name='user'
                        size={size}
                        color={color}
                    />
                }}
            />
        </Tabs.Navigator>
    }

    const Rstacks = ()=>{
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name='Create Users'
                component={CreateUsers}
            />
            <Stack.Screen
                name='Welcome'
                component={Welcome}
            />
            <Stack.Screen
                name='Signin'
                component={Signin}
            />
            <Stack.Screen
                name='TabsBottom'
                component={TabsBottom}
            />
        </Stack.Navigator>
    }

    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name='Welcome'
                component={Welcome}
            />
            
            <Stack.Screen
                name='Create Users'
                component={CreateUsers}
            />
            <Stack.Screen
                name='Signin'
                component={Signin}
            />
            <Stack.Screen
                name='TabsBottom'
                component={TabsBottom}
            />
        </Stack.Navigator>
    )
};

export default RoutesDev;