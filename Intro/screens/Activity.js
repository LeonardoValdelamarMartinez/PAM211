import { Text, StyleSheet, View, Alert, Platform, ActivityIndicator, Button} from 'react-native'
import { useState } from 'react'

export default function Activity() {
  const [cargando,setCargando] = useState(false) //Controlar rueda de carga
  const carga = () =>{
    setCargando(true)
    setTimeout(() => {
      setCargando(false);
      if(Platform.OS === 'web'){
        window.alert('Carga completa')
      } else {
        Alert.alert('Carga completa')
      }
    }, 3000);
  };
  return (
      <View style = {styles.container}>
        <Text style = {styles.texto}>Presione para iniciar la carga </Text>
      <View style = {styles.botonesContainer}> 
        {cargando ? (<ActivityIndicator size = 'large'  color = 'red'> </ActivityIndicator>) : (<Button color= 'green' title='Presione para iniciar' onPress={carga}></Button>)}        
      </View>
      </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bd3ea8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: 30,
    fontFamily: 'times-new-roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  botonesContainer:{
    marginTop: 20,
    gap: 20,
  }
})