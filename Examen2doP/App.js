import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView, ImageBackground} from 'react-native';
const pizzaImage = require('./assets/pizza.png');
const PanAjoImage = require('./assets/panAjo.png');
const Palillos = require ('./assets/palillos.png');
const Hawaiana = require ('./assets/hawaina.png');
const Mexicana = require ('./assets/mexicana.png');
export default function App() {
  return (
    <ImageBackground source={pizzaImage}
      style={styles.backgroundImage}>
    <View style={styles.container}>
      
            
      <Text style = {styles.title}>
        Cheff Pizza 
      </Text>
      <Text style = {styles.subtitle}>
        Cocinamos con todo el amor del mundo
      </Text>
       <Text style = {styles.subtitle}> 
          Entradas
        </Text>
        
      <ScrollView 
      style = {styles.scrollArea}
      showsVerticalScrollIndicator = {true}>
        <Text style = {styles.subtitle2}>
          - Pan de ajo con queso
          <ImageBackground source={PanAjoImage} style ={styles.backgroundImage}></ImageBackground>
        </Text>
        <Text style = {styles.subtitle2}>
          - Cesar sticks
          <ImageBackground source={Palillos} style ={styles.backgroundImage}></ImageBackground>
        </Text>

      <Text style = {styles.subtitle}>
          Platillos Fuertes
        </Text>
        <Text style = {styles.subtitle2}>
          - Pizza Hawaiana
          <ImageBackground source={Hawaiana} style ={styles.backgroundImage}></ImageBackground>
        </Text>
        <Text style = {styles.subtitle2}>
          - Pizza Mexicana
          <ImageBackground source={Mexicana} style ={styles.backgroundImage}></ImageBackground>
        </Text>
      </ScrollView>

    </View>
    </ImageBackground>
  );
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title : {
    fontSize: 80,
    fontWeight: 'bold',
    marginBottom: 100,
  },
  subtitle : {
    fontSize : 75 ,
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
  },
    subtitle2 : {
    fontSize : 60 ,
    fontWeight: 'bold',
  },
});
