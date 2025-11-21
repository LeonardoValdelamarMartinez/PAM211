import {View, Text, Pressable, StyleSheet} from 'react-native';

export default function Detalles({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de usuario</Text>
      <Text style={styles.Navigation_}>Usando Navegación Stack</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'black',
  },
  Navigation_: {
    fontSize: 16,
    marginTop: 10,
    color: 'blue',
  },
});