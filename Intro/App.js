//1. Zona de los imports (donde vamos a agregar lo que necesitemos) 
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Reactimport , { useState } from 'react';

//2. Zona de componentes
export default function App() 
{
  const [contador, setContador] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Contador: {contador}</Text>
      <Button title = 'Agregar' onPress={()=>setContador(contador+1)} />
      <StatusBar style="auto" />
      <Button title = 'Quitar' onPress={()=>setContador(contador-1)} />
      <StatusBar style="auto" />
      <Button title = 'Reiniciar' onPress={()=>setContador(0)} />
      <StatusBar style="auto" />
    </View>
  );
}
//3. Zona de los estilos
const styles = StyleSheet.create(
{
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
