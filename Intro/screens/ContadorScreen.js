// 1. Zona de los imports
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// 2. Zona de componentes
export default function ContadorScreen() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contador:</Text>
      <Text style={styles.texto2}>{contador}</Text>

      <View style={styles.botonesContainer}>
        <View style={styles.buttonWrap}>
          <Button
            title="Agregar"
            color="red"
            onPress={() => setContador(c => c + 1)}
          />
        </View>
        <View style={styles.buttonWrap}>
          <Button
            title="Quitar"
            color="gold"
            onPress={() => setContador(c => c - 1)}
          />
        </View>
        <View style={styles.buttonWrap}>
          <Button
            title="Reiniciar"
            color="black"
            onPress={() => setContador(0)}
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

// 3. Zona de los estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aeaaaaff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  texto: {
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },
  texto2: {
    color: 'red',
    fontSize: 40,
    fontWeight: '400',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    marginBottom: 12,
  },
  botonesContainer: {
    marginTop: 15,
    flexDirection: 'row', 
  },
  buttonWrap: {
    marginHorizontal: 8, 
  },
});
