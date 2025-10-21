import React, { useState } from 'react'; 
import { View, Text, TextInput, Button, Alert, Platform , StyleSheet } from 'react-native';

export default function TextScreen () {
  const [nombre, setNombre] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [comentario, setComentario] = useState('');
  const mostrarAlerta = () => {
    if (nombre.trim() === ''|| contrasenia.trim() === '' || comentario.trim() === '') {
      if (Platform.OS === 'web') {
        window.alert('Error: Por favor llenar todos los campos');
      } else {
        Alert.alert('Error', 'Por favor llenar todos los campos');
      }
    } else {
      if (Platform.OS === 'web') {
        window.alert(`¡Hola ${nombre} tu contrarseña es ${contrasenia} y tu comentario es ${comentario}`);
      } else {
        Alert.alert(`¡Hola ${nombre} tu contrarseña es ${contrasenia} y tu comentario es ${comentario}`);
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Practica TextInput & Alert</Text>
      <TextInput
        style={styles.recuadro}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
        maxLength={50}
    />
      <TextInput
        style={styles.recuadro}
        placeholder="Escribe tu contraseña"
        value={contrasenia}
        onChangeText={setContrasenia}
        maxLength={50}
        keyboardType='numeric'
    />
      <TextInput
        style={styles.recuadro}
        placeholder="Escribe tus comentarios"
        value={comentario}
        onChangeText={setComentario}
        maxLength={50}
        multiline={true}
        numberOfLines={4}
    />

      <Button color='blue'  title="Mostrar saludo" onPress={mostrarAlerta} />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsla(209, 73%, 88%, 1.00)',
    padding: 20, 
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold', 
    marginBottom: 15, 
  },

  recuadro: {
    borderWidth: 1, 
    borderColor: '#0f0e0eff', 
    padding: 10,
    marginBottom: 20, 
  },
  
});