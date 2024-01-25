import React from 'react';
import HomeScreen from '../screens/home';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default Navigation;