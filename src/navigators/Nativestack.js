import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import Login from '../Login';
import Otp from '../Otp';
import GoogleSign from '../GoogleSign';

const Stack = createNativeStackNavigator();

export default function NavigationContainerdata() {
    return (
        // <SafeAreaView>

        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown:false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Otp" component={Otp} />
                <Stack.Screen name="Googlesign" component={GoogleSign} />
            </Stack.Navigator>

        </NavigationContainer>
        // </SafeAreaView>
    );
}

