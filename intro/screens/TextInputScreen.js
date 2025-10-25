import {Text, StyleSheet, View, Button, TextInput, Alert,} from 'react-native';
import React, { useState } from 'react';

export default function TextInputScreen() {
const [nombre, setNombre] = useState('');
const [password, setPassword] = useState('');
const [telefono, setTelefono] = useState('');
const mostrarAlerta = () => {
  if (nombre.trim() === '' || correo.trim() === '') {
    Alert.alert('Error', 'Por favor, completa todos los campos (movil).');
     alert('Error', 'Por favor, completa todos los campos (web).');
  } 
  else {
    Alert.alert('Datos ingresados'+ `Nombre: ${nombre}\nContraseña: ${password}\nTeléfono: ${telefono}`);
    alert('Datos ingresados\n'+ `Nombre: ${nombre}\nContraseña: ${password}\nTeléfono: ${telefono}`);
  }

};

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>TextInput & Alert</Text>
      <Text style={styles.etiquetas}>Nombre: </Text>
      <TextInput style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <Text style={styles.etiquetas}>Password: </Text>
      <TextInput style={styles.input}
        placeholder="Escribe tu contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text style={styles.etiquetas}>Telefono: </Text>
      <TextInput style={styles.input}
        placeholder="Escribe tu telefono"
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="phone-pad"
      />
      <Button
      title="Mostrar Alerta"
        onPress={mostrarAlerta}
      />
    </View>
  );
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
   titulo: {
    fontFamily:'Times New Roman',
      fontSize: 32,
      fontWeight: 'bold',
      color: 'black',
      textDecorationLine: 'underline',
      marginBottom: 20,
  },
  etiquetas: {
    fontSize: 18,
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    width: '100%',
    borderStartWidth: 2,
    borderColor: 'blue',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
});

