import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TelaCorNormal from "./componentes/TelaCorNormal";
import TelaCorInvertida from "./componentes/TelaCorInvertida";

const Drawer = createDrawerNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Drawer.Navigator>
        <Drawer.Screen name="Cores Normais" component = { TelaCorNormal } />
        <Drawer.Screen name="Cores Invertidas" component = { TelaCorInvertida } />
      </Drawer.Navigator>
    </NavigationContainer>
  )
};