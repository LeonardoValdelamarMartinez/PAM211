import { Text, StyleSheet, View, ScrollView} from 'react-native'
import React, { Component } from 'react'

export default function ScrollScreen()  {
    return (
      <View style = {styles.container}>
        <ScrollView style = {styles.scrollArea} 
        contentContainerStyle = {styles.scrollContent} 
        showVerticalScrollIndicator={true}>
        <Text style={styles.title}> Letra de la canción</Text>
        <Text style={styles.title}> Vamos a darnos un tiempo</Text>
        <Text style={styles.title}> Jose Jose</Text>

        <Text style={styles.title}> Qué difícil es cuando las cosas no van bien
               <Text><br/></Text>
               Tú no estás feliz y eso me pasa a mí también
               <Text><br/></Text>
               Porque hemos perdido la frescura del amor
               <Text><br/></Text>
               El respeto por los dos
               <Text><br/></Text>
               Discutiendo a cada instante sin razón
        </Text>

        <Text style={styles.title}>Qué difícil es hablarte y tú no comprender
              <Text><br/></Text>
              Conversar lo mismo y enfadarnos otra vez
              <Text><br/></Text>
              Porque no me dejas que me vaya por un tiempo
              <Text><br/></Text>
              Sin decirme que, al momento
              <Text><br/></Text>
              Te vas a quitar la vida si me voy
        </Text>

        <Text style={styles.title}>Pero, antes, déjame decirte que te quiero
              <Text><br/></Text>
              Que tu amor es la única cosa que yo tengo
              <Text><br/></Text>
              Y me voy de tu lado porque no quiero perderlo
              <Text><br/></Text>
              Lo que tú y yo necesitamos solo es tiempo
        </Text>
        
        <Text style={styles.title}>Tiempo para poder curar nuestras heridas
              <Text><br/></Text>
              Tiempo para empezar de nuevo nuestras vidas
              <Text><br/></Text>
              Tiempo para saber si tú me necesitas
              <Text><br/></Text>
              Tiempo para saber si me quieres o me olvidas
        </Text>

        <Text style={styles.title}>Qué difícil es hablarte y tú no comprender
              <Text><br/></Text>
              Conversar lo mismo y enfadarnos otra vez
              <Text><br/></Text>
              Porque no me dejas que me vaya por un tiempo
              <Text><br/></Text>
              Sin decirme que, al momento
              <Text><br/></Text>
              Te vas a quitar la vida si me voy
              
        </Text>

        <Text style={styles.title}>Pero, antes, déjame decirte que te quiero
              <Text><br/></Text>
              Que tu amor es la única cosa que yo tengo
              <Text><br/></Text>
              Y me voy de tu lado porque no quiero perderlo
              <Text><br/></Text>
              Lo que tú y yo necesitamos solo es tiempo
        </Text>

        <Text style={styles.title}>Tiempo para poder curar nuestras heridas</Text>
        
        <Text style={styles.title}>Tiempo para empezar de nuevo nuestras vidas</Text>

        <Text style={styles.title}>Tiempo para saber si tú me necesitas</Text>

        <Text style={styles.title}>Tiempo para saber si me quieres o me olvidas</Text>

        <Text style={styles.subtitleRed}>Jose Jose te amo</Text>
        
        <Text style={styles.subtitleRed}>Jose Jose, patria y monogamia o muerte</Text>
        
        </ScrollView>
      
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollArea: {
  flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: '#c9a0ff',
    color: '#000000ff',
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    textAlign: 'center'
  },
  item: {
    backgroundColor: '#c9a0ff',
    color: '#fff',
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    textAlign: 'center',
  },
  subtitleRed: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#FF0000',
    borderRadius: 10,
    marginVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: '95%',
    alignSelf: 'center'
  },
  text:{
    fontSize:50,
    color:'#fff',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 15,
    padding: 10,
  },
  textRed:{
    fontSize:16,
    color:'#fff',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#ff0000',
    borderRadius: 10,
  },
  
});