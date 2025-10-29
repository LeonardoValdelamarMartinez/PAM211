import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import BotonesScreen from './BotonesScreen';
import ContadorScreen from './ContadorScreen';
import Modal from './Modal';
import Activity from './Activity';
import ImageBackground from './ImageBackground';
import TextInput from './TextInput';
import Practica11 from './Practica11';
import ScrollScreen from './ScrollView';
import ListScreen from './ListScreen';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) 
  {
    case 'Contador':
      return <ContadorScreen/>;

    case 'Botones':
      return <BotonesScreen/>;
    
    case 'Text Input':
      return <TextInput/>;

    case 'ImageBackground':
      return <ImageBackground/>;

    case 'ScrollView':
      return <ScrollScreen/>;

    case 'Activity Indicator':
      return <Activity/>;

    case 'ListScreen':
      return <ListScreen/>;

    case 'Modal':
      return <Modal/>;

      case 'Practica 11':
      return <Practica11/>;
    case 'menu':
    default:
      return (
        <View style = {styles.container}>
          <Text style ={styles.texto} >Menu de Prácticas</ Text>
          <Button color = 'grey' onPress={()=>setScreen('Contador')} title='Practica Contador'></Button>
          <Button color = 'grey' onPress={()=>setScreen('Botones')} title='Practica Botones'></Button>
          <Button color = 'grey' onPress={()=>setScreen('Text Input')} title='Practica Text'></Button>
          <Button color = 'grey' onPress={()=>setScreen('ImageBackground')} title='Practica ImageBackground'></Button>
          <Button color = 'grey' onPress={()=>setScreen('ScrollView')} title='Practica Scrollview'></Button>
          <Button color = 'grey' onPress={()=>setScreen('Activity Indicator')} title='Practica Activity Indicator'></Button>
          <Button color = 'grey' onPress={()=>setScreen('ListScreen')} title='Practica ListScreen'></Button>
          <Button color = 'grey' onPress={()=>setScreen('Modal')} title='Practica Modal'></Button>
          <Button color = 'grey' onPress={()=>setScreen('Practica 11')} title='Practica 11'></Button>
        
          </View>
      );
    }
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
    fontSize: 60,
    fontWeight: 'bold',
    fontStyle: 'italic',
  }
}
);