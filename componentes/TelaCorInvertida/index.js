import React from 'react';
import { Text, View } from 'react-native';

import estilos from './estilos';

export default function TelaCorInvertida () {
  return (
    <View style={estilos.container}>
      
      <Text style={estilos.texto}>
      Tela com as cores invertidas
      </Text>
    </View>
  );
}