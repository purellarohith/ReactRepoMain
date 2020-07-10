/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//Stack for Native
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
//Stack for drawer
import {createDrawerNavigator} from '@react-navigation/drawer';


//Pages or Screens
import Home from "./Pages/Home"


enableScreens();
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        {/* <Drawer.Screen name="Article" component={} /> */}
      </Drawer.Navigator>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
