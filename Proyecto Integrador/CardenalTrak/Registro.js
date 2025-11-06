import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import InicioDeSesion from './InicioDeSesion';


const Cardenal = require('./assets/LogoCardenal.png');
export default function Pantalla_Inicial({ onBack }) {
      const [screen, setScreen] = useState('menu');
        switch (screen) {
          case 'InicioDeSesion':
            return <InicioDeSesion/>
            break;
        
          case 'Registrarse' :
            return <Registro/>
            break; 
      
          
          default:
            break;
        }
  return (
    <View style={styles.container}>
      <Image source={Cardenal} style={styles.logo} />
      <Text style={styles.title}>CardenalTrak</Text>

      <Text style={styles.subtitle}>Crea una nueva cuenta </Text>
      <Text style={styles.subtitle}>
        Completa la información para registrarte
      </Text>

      <View >
        <Text style={styles.subtitle2}>
        Nombre Completo
        </Text>
        <TextInput 
        style = {styles.textBox}
        placeholder='Nombre Completo'
        />
      </View>

      <View>
        <Text style={styles.subtitle2}>
        Correo Institucional
        </Text>
        <TextInput 
        style = {styles.textBox}
        placeholder='usuario@upq.edu.mx'
        />
      </View>

      <View>
        <Text style={styles.subtitle2}>
        Contraseña
        </Text>
        <TextInput 
        style = {styles.textBox}
        placeholder='Ingrese su contraseña'
        />
      </View>

      <TouchableOpacity style={styles.secondaryBtn}>
        <Text style={styles.secondaryText}>Registrarse</Text>
      </TouchableOpacity>

        <View>
        <Text style={styles.secondaryText2}>
            ¿Ya tienes cuenta?
        </Text>
        <TouchableOpacity style={styles.secondaryBtn2} onPress={() => setScreen('InicioDeSesion')}>
        <Text style={styles.secondaryText2}>Iniciar sesión</Text>
      </TouchableOpacity>
        </View>
      {onBack && (
        <TouchableOpacity style={styles.back} onPress={onBack}>
          <Text> Volver</Text>
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
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 6,
    color: '#222',
    fontWeight : 'bold'
  },
  subtitle2: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 6,
    color: '#222',
    fontWeight : 'bold',
    padding : 10,
  },
  secondaryBtn: {
    backgroundColor: '#BD0A0A',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 12,
    width: '40%',
    alignItems: 'center',
  },
  secondaryBtn2: {
    backgroundColor: '#ffffffff',
    paddingVertical: 12,
    borderRadius: 8,
    width: '40%',
    alignItems: 'center',
    alignSelf : 'center'
  },
  secondaryText2: { 
    color: 'black', 
    fontSize: 16, 
    fontWeight: 'bold', 
    textAlign : 'center'
  },
  secondaryText: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: '600' 
  },
  back: { 
    position: 'absolute', 
    top: 40, 
    left: 20 
  },
  textBox : {
    height: 45,
    width: '100%',
    borderColor: '#000000ff',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    alignSelf : 'center'
    }
});
