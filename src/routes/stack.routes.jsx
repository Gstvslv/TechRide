import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SignIn } from '../screens/SignIn'
import { SignName } from '../screens/SignName'
import {SignDoc} from '../screens/SignDoc'
import { SignEmail } from '../screens/SignEmail'
import { Home } from '../screens/Home'




export const StackRoutes = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={{headerShown:false,}}>
            <Stack.Screen name='SignIn' component={SignIn} />
            <Stack.Screen name='SignName' component={SignName} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name = 'SignDoc' component={SignDoc} />
            <Stack.Screen name ='SignEmail' component={SignEmail} />
        </Stack.Navigator>
    )
}
