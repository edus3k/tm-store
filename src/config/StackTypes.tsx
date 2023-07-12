import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type StackNavigation = {
    Welcome: undefined,
    Signin: undefined,
    RecoverUsers: undefined,
    CreateUsers: undefined,
    Home: undefined
    TabsBottom: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>