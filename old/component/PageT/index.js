import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './Dashboard';
import hompage from './hompage';
import Dashboard1 from './Dashboard1';
import BundesLiga from './BundesLiga';
import Laliga from './Laliga';
import Premier from './Premier';


const Stack = createStackNavigator();

export default function PageT() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="BFL" component={Dashboard} />
        <Stack.Screen name="hompage" component={hompage} />
        <Stack.Screen name="Dashboard1" component={Dashboard1} />
        <Stack.Screen name="BundesLiga" component={BundesLiga} />
        <Stack.Screen name="Laliga" component={Laliga} />
        <Stack.Screen name="Premier" component={Premier} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

