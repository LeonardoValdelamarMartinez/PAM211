// MenuScreen.js
import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import Pantalla_Inicial from './Pantalla_Inicial';
import Registro from './Registro';


export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');
  switch (screen) {
    case 'Pantalla Inicio':
      return <Pantalla_Inicial/>
      break;
  
    case 'Registro' :
      return <Registro/>
      break; 

    
    default:
      break;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Menú de Interfaces</Text>
      <Button color="grey" onPress={() => setScreen('Pantalla Inicio')} title="Pantalla Inicial" />
      <Button color="grey" onPress={() => setScreen('Registro')} title="Registro" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aeaaaaff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  texto: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 24,
  },
});
