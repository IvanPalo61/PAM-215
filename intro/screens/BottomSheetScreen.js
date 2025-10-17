import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);

  return (
    <View style={styles.container}>
      <Button title="Abrir Bottom Sheet" onPress={openModal} />

      <Modal
        isVisible={isVisible}
        onBackdropPress={closeModal}
        onSwipeComplete={closeModal}
        swipeDirection="down"
        style={styles.modal}
        propagateSwipe={true} // permite que el scroll dentro del modal funcione
      >
        <View style={styles.sheet}>
          <View style={styles.handle} />
          <Text style={styles.text}>👋 ¡Hola desde el Bottom Sheet!</Text>
          <Button title="Cerrar" onPress={closeModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  modal: { justifyContent: 'flex-end', margin: 0 },
  sheet: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  text: { fontSize: 16, marginVertical: 10 },
  handle: {
    width: 40,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
});