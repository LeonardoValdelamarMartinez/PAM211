import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  Switch,
  Alert,
  Button,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';

export default function Practica11() {
  const backgroundImage = require('../assets/UPQ.jpg');
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    const onChange = ({ window }) => {
      setScreenWidth(window.width);
      setScreenHeight(window.height);
    };

    Dimensions.addEventListener('change', onChange);
    return () => Dimensions.removeEventListener('change', onChange);
  }, []);

  const manejarRegistro = () => {
    if (nombre.trim() === '' || correo.trim() === '') {
      Alert.alert('Error', 'Por favor llena todos los campos');
      return;
    }

    if (!aceptaTerminos) {
      Alert.alert('Error', 'Debes aceptar los términos y condiciones');
      return;
    }

    Alert.alert(
      'Éxito',
      `Registro completado:\nNombre: ${nombre}\nCorreo: ${correo}`
    );
  };

  const isSmallScreen = screenWidth < 380;
  const inputWidth = screenWidth * (isSmallScreen ? 0.8 : 0.6);
  
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.overlay}>
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={[
            styles.container,
            { padding: screenWidth * 0.05 }
          ]}>
            <Text style={[
              styles.titulo,
              { fontSize: isSmallScreen ? 20 : 24 }
            ]}>Registro de Usuario</Text>

            <TextInput
              style={[
                styles.input,
                { 
                  width: inputWidth,
                  height: screenHeight * 0.06,
                  fontSize: isSmallScreen ? 14 : 16
                }
              ]}
              placeholder="Nombre completo"
              value={nombre}
              onChangeText={setNombre}
              placeholderTextColor="#666"
            />

            <TextInput
              style={[
                styles.input,
                { 
                  width: inputWidth,
                  height: screenHeight * 0.06,
                  fontSize: isSmallScreen ? 14 : 16
                }
              ]}
              placeholder="Correo electrónico"
              keyboardType="email-address"
              value={correo}
              onChangeText={setCorreo}
              placeholderTextColor="#666"
              autoCapitalize="none"
            />

            <View style={[
              styles.terminosContainer,
              { 
                width: inputWidth,
                padding: screenWidth * 0.03
              }
            ]}>
              <Text style={[
                styles.textoTerminos,
                { fontSize: isSmallScreen ? 14 : 16 }
              ]}>Acepto términos y condiciones</Text>
              <Switch 
                value={aceptaTerminos} 
                onValueChange={setAceptaTerminos}
              />
            </View>

            <View style={[
              styles.buttonContainer,
              { width: inputWidth * 0.7 }
            ]}>
              <Button
                title="Registrarse"
                onPress={manejarRegistro}
                color="#007AFF"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
  },
  titulo: {
    fontWeight: 'bold',
    marginBottom: '5%',
    color: '#000',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#8f7575',
    borderRadius: 8,
    backgroundColor: 'white',
    marginBottom: '3%',
    paddingHorizontal: '3%',
    textAlign: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  terminosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '3%',
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    borderWidth: 1,
    borderColor: '#8f7575',
  },
  textoTerminos: {
    flex: 1,
    marginRight: '3%',
    textAlign: 'left',
  },
  buttonContainer: {
    marginTop: '5%',
    overflow: 'hidden',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
