import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, AntDesign } from '@expo/vector-icons';

import Store from '@views/Store';
import Home from '@views/Home';
import Profiler from '@views/Profiler';

const Tabs = createBottomTabNavigator();

const BottomTabs = () =>{
    return(
        <Tabs.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true
            }}>
            <Tabs.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ size, color })=><Feather 
                        name='home'
                        size={size}
                        color={color}
                    />
                }}
            />
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
    )
};

export default BottomTabs;