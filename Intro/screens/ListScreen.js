import { Text, StyleSheet, View, FlatList, SectionList} from 'react-native'

export default function ListScreen() 
{
  //Flatlist
  const ejercicios = [
    {id: '1', nombre : 'Sentadillas', descripcion: 'Ejercicio para piernas'},
    {id: '2', nombre : 'Curl de bicep', descripcion: 'Ejercicio para biceps'},
    {id: '3', nombre : 'Press de banca', descripcion: 'Ejercicio para piernas'},
    {id: '4', nombre : 'Press militar', descripcion: 'Ejercicio para piernas'},
    {id: '5', nombre : 'Sentadillas', descripcion: 'Ejercicio para piernas'},
    {id: '6', nombre : 'Sentadillas', descripcion: 'Ejercicio para piernas'},
    {id: '7', nombre : 'Sentadillas', descripcion: 'Ejercicio para piernas'},
    {id: '8', nombre : 'Sentadillas', descripcion: 'Ejercicio para piernas'},
    {id: '9', nombre : 'Sentadillas', descripcion: 'Ejercicio para piernas'},
    {id: '10', nombre : 'Sentadillas', descripcion: 'Ejercicio para piernas'},
  ]
  const contactos = [
    {titulo: 'A', data: ['Alejandra','Ana de Armas', 'Abigail']},
    {titulo: 'B', data: ['Belen','Brenda', 'Bruno']},
    {titulo: 'C', data: ['Carlos','Chef', 'Cecilia']},
  ]
    return (
      <View style={styles.container}>
        <View style = {styles.listContainer}>
        <Text style = {styles.titulo}>Lista de Ejercicios</Text>
        <FlatList
        data = {ejercicios}
        renderItem={({item}) => (
          <View style = {styles.item}>
            <Text style = {styles.nombre}> {item.nombre}</Text>
            <Text style = {styles.descripcion}> {item.descripcion}</Text>
          </View>
        )}/>
        </View>


        <View style={styles.listContainer}>
        <Text style ={styles.titulo}> Contactos</Text>
        <SectionList
        sections={contactos}
        renderItem={({item}) =>(
          <Text style = {styles.item}> {item} </Text>
        )}
        renderSectionHeader={({section}) => (
          <Text style = {styles.header}> {section.titulo} </Text>
        )}
        />
      </View>
        </View>
      
    )
    
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  listContainer:{
    flex: 1,
    marginBottom: 20,
  },
  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  item:{
    padding: 10,
    backgroundColor: '#df6ccbff',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  nombre:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descripcion:{
    fontSize: 14,
    color: '#555',
  },
  header:{
    fontSize: 18,
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
  },
  });