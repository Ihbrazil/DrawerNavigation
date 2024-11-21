import React from 'react';
import { Text, View } from 'react-native';

import estilos from './estilos';

export default function TelaCorNormal () {
  return (
    <View style={estilos.container}>
      
      <Text style={estilos.texto}>
        Tela com as cores normais
      </Text>
    </View>
  );
}