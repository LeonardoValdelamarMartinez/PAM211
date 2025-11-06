import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Registro from './Registro';
import InicioDeSesion from './InicioDeSesion';


const Cardenal = require('./assets/LogoCardenal.png');
export default function Pantalla_Inicial({ onBack }) {
  const [screen, setScreen] = useState('menu');
    switch (screen) {
      case 'InicioDeSesion':
        return <InicioDeSesion/>
        break;
    
      case 'Registro' :
        return <Registro/>
        break; 
  
      
      default:
        break;
    }
  return (
    <View style={styles.container}>
      <Image source={Cardenal} style={styles.logo} />
      <Text style={styles.title}>CardenalTrak</Text>

      <Text style={styles.subtitle}>Reporta, limpia y mejora tu espacio</Text>
      <Text style={styles.subtitle}>
        Únete y contribuye a mantener los espacios limpios y seguros.
      </Text>

      <TouchableOpacity style={styles.primaryBtn} onPress={() => setScreen('InicioDeSesion')}>
        <Text style={styles.primaryText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryBtn} onPress={() => setScreen('Registro')}>
        <Text style={styles.secondaryText}>Registrarse</Text>

      </TouchableOpacity>

      {onBack && (
        <TouchableOpacity style={styles.back} onPress={onBack}>
          <Text>← Volver</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  title: {
    fontSize: 30,
    color: '#BD0A0A',
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 6,
    color: '#222',
  },
  primaryBtn: {
    backgroundColor: '#BD0A0A',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 200,
    width: '40%',
    alignItems: 'center',
  },
  primaryText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: '600' 
  },
  secondaryBtn: {
    backgroundColor: '#F4DDDD',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 12,
    width: '40%',
    alignItems: 'center',
  },
  secondaryText: { 
    color: '#BD0A0A', 
    fontSize: 18, 
    fontWeight: '600' 
  },
  back: { 
    position: 'absolute', 
    top: 40, 
    left: 20 
  },
});
