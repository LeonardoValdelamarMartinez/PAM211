import { Text, View, StyleSheet, Button, Modal } from 'react-native'
import React, { useState } from 'react'

export default function ModalScreen() {
const [modalVisible, setModalVisible] = useState(false);

    return (
      <View style = {styles.container}>
        <Button title = 'Mostrar Modal' onPress={() => setModalVisible(true)} color = 'purple'>
        Picame
        </Button>
        <Modal 
        animationType = 'fade'
        transparent = {true}
        visible = {modalVisible}
        onRquestClose = {() => setModalVisible(!modalVisible)}>
          <View style = {styles.modalContainer}>
          <View style = {styles.modalContent}>
            <Text style = {styles.textoModal}>
              Soy un Modal
              </Text>
            <Button title = 'Ocultar Modal' onPress={() => setModalVisible(false)} color = 'purple'>
            </Button>
          </View>
          </View>
        </Modal>
          </View>
    )
  }
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
  },
  textoModal: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  });