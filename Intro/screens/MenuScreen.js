import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import BotonesScreen from './BotonesScreen';
import ContadorScreen from './ContadorScreen';
import Modal from './Modal';
import FlatList from './FlatList';
import Activity from './Activity';
import ScrollView from './ScrollView';
import ImageBackground from './ImageBackground';
import TextInput from './TextInput';

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

    case 'ImageBackground & Splash Screen':
      return <ImageBackground/>;

    case 'ScrollView':
      return <ScrollView/>;

    case 'Activity Indicator':
      return <Activity/>;

    case 'FlatList & SectionList':
      return <FlatList/>;

    case 'Modal':
      return <Modal/>;
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
          <Button color = 'grey' onPress={()=>setScreen('Flatlist & SectionList')} title='Practica Flatlist'></Button>
          <Button color = 'grey' onPress={()=>setScreen('Modal')} title='Practica Modal'></Button>

        
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