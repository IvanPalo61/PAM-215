import { Text, StyleSheet, View, Modal, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function ModalScreen() {
  const [mostrarModal, setMostrar] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenido</Text>

      <Pressable style={styles.boton} onPress={() => setMostrar('login')}>
        <Text style={styles.text}>Iniciar sesión</Text>
      </Pressable>

      <Pressable style={styles.boton} onPress={() => setMostrar('registro')}>
        <Text style={styles.text}>Registrarse</Text>
      </Pressable>

      <Pressable style={styles.boton} onPress={() => setMostrar('Alerta')}>
        <Text style={styles.text}>Alerta</Text>
      </Pressable>

      {/* Modal de Inicio de Sesión */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={mostrarModal === 'login'}
        onRequestClose={() => setMostrar(null)}>
        <View style={styles.container2}>
          <Text style={styles.titulo}>Formulario de inicio de sesión</Text>
          <TextInput style={styles.input} placeholder="Ingrese su usuario" />
          <TextInput
            style={styles.input}
            placeholder="Ingrese su contraseña"
            secureTextEntry={true}
          />
          <Pressable style={styles.boton} onPress={() => setMostrar(null)}>
            <Text style={styles.text}>Iniciar sesión</Text>
          </Pressable>
        </View>
      </Modal>

      {/* Modal de Registro */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={mostrarModal === 'registro'} // corregido: 'Registro' → 'registro'
        onRequestClose={() => setMostrar(null)}>
        <View style={styles.container2}>
          <Text style={styles.titulo}>Formulario de Registro</Text>
          <TextInput style={styles.input} placeholder="Ingrese su usuario" />
          <TextInput
            style={styles.input}
            placeholder="Ingrese su correo"
            keyboardType={'email-address'}
          />
          <TextInput
            style={styles.input}
            placeholder="Ingrese su contraseña"
            secureTextEntry={true}
          />
          <Pressable style={styles.boton} onPress={() => setMostrar(null)}>
            <Text style={styles.text}>Registrarse</Text>
          </Pressable>
        </View>
      </Modal>

      {/* Modal de Alerta */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={mostrarModal === 'Alerta'}
        onRequestClose={() => setMostrar(null)}>
        <View style={styles.container3}>
          <View style={styles.containerAlerta}>
            <Text style={styles.textAlerta}>Esta es una alerta</Text>
            <View style={styles.containerBoton}>
              <Pressable style={styles.boton1} onPress={() => setMostrar(null)}>
                <Text style={styles.text}>OK</Text>
              </Pressable>
              <Pressable style={styles.boton2} onPress={() => setMostrar(null)}>
                <Text style={styles.text}>Cerrar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a09a9aff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  boton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
    width: '70%',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  container2: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
  },
  container3: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerAlerta: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 20,
    height: 200,
    alignItems: 'center',
width: 300,

  },
  textAlerta: {
    fontSize: 18,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  containerBoton: {
    flexDirection: 'row',
    justifyContent: 'space-beetween',
    width: '100%',
    marginTop: 25,
    width: '80%',
  },
  boton1: {
    backgroundColor: '#28a745',
    padding:15,
    marginRight: 10,
    borderRadius: 20,
    width: 100,
    alignItems: 'center',
  },
  boton2: {
    backgroundColor: '#df1111ff',
    padding:15,
    marginRight: 10,
    borderRadius: 20,
    width: 100,
    alignItems: 'center',
  },
});
