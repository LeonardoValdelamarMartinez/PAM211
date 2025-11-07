import { StyleSheet, Text, View , ScrollView, ImageBackground, Button} from 'react-native';
const pizzaImage = require('./assets/pizza.png');
const PanAjoImage = require('./assets/panAjo.png');
const Palillos = require ('./assets/palillos.png');
const Hawaiana = require ('./assets/hawaina.png');
const Mexicana = require ('./assets/mexicana.png');
export default function App() {
  return (
    
    
    <View style={styles.container}>
      <ImageBackground source = {pizzaImage}
      style={styles.backgroundImage}
      resizeMode='cover'
      >    
      <Text style = {styles.title}>
        Cheff Pizza 
      </Text>
      <Text style = {styles.subtitle}>
        Cocinamos con todo el amor del mundo
      </Text>
       
      
      <ScrollView 
      style = {styles.scrollArea}
      showsVerticalScrollIndicator = {true}>
        <Text style = {styles.subtitle}> 
          Entradas
        
        </Text>
        <ImageBackground source={PanAjoImage} style ={styles.imagenes}></ImageBackground>
        <Text style = {styles.subtitle2}>
          - Pan de ajo con queso:
          Esta deliciosa entrada de pan de ajo con queso es perfecta para compartir y disfrutar antes de tu pizza favorita.
          Precio : $5.00 c/u
        </Text>
        <Button onPress={() => alert('Gracias por ordenar Pan de Ajo con Queso, el precio es de $5.00 c/u')} title="Ordenar">
        </Button>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>

        <ImageBackground source={Palillos} style ={styles.imagenes}></ImageBackground>
        <Text style = {styles.subtitle2}>
          - Cesar sticks:
          Estos palillos tienen una explosión de sabor a ajo.
          Precio : $4.00 c/u
        </Text>
        <Button onPress={() => alert('Gracias por ordenar los deliciosos palillos con ajo, el precio es de $4.00 c/u')} title="Ordenar">
          Ordenar Ahora
        </Button>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>

      <Text style = {styles.subtitle}>
          Platillos Fuertes
        </Text>
         <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>

        <ImageBackground source={Hawaiana} style ={styles.imagenes}></ImageBackground>
        <Text style = {styles.subtitle2}>
          - Pizza Hawaiana:   
         Estos pizza tienen una toque dulce junto con el sabor salado del jamón.
          Precio : $150.00 c/u
        </Text>
        <Button onPress={() => alert('Gracias por ordenar la deliciosa pizza hawaiana, el precio es de $150.00 c/u')} title="Ordenar">
          Ordenar Ahora
        </Button>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <ImageBackground source={Mexicana} style ={styles.imagenes}></ImageBackground>
        <Text style = {styles.subtitle2}>
          - Pizza Mexicana: 
          Esta pizza tiene un sabor picante y delicioso con ingredientes típicos mexicanos.
          Precio : $200.00 c/u
        </Text>
        <Button  style = {styles.Botones} onPress={() => alert('Gracias por ordenar la deliciosa pizza mexicana, el precio es de $200.00 c/u' )} title="Ordenar"/>
      </ScrollView>
    </ImageBackground>
    </View>
    
    
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
    textAlign: 'center',
  },
  subtitle : {
    fontSize : 75 ,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
    subtitle2 : {
    fontSize : 60 ,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imagenes : {
    width: 1100,
    height: 400,
    alignSelf: 'center',
  },
  scrollArea : {
    width : '100%',
    paddingHorizontal : 20,
  },
  Botones :{
    width: 50,
    height: 50,
  }
});
