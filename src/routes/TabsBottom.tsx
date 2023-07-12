import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@views/Home';
import Profiler from '@views/Profiler';

const Tabs = createBottomTabNavigator();

const BottomTabs = () =>{
    return(
        <Tabs.Navigator>
            <Tabs.Screen
                name='Home'
                component={Home}
                options={{headerShown: false}}
            />
            <Tabs.Screen
                name='Profiler'
                component={Profiler}
                options={{headerShown: false}}
            />
        </Tabs.Navigator>
    )
};

export default BottomTabs;