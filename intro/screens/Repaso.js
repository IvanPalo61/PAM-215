import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Button, TextInput, Alert, Switch, ImageBackground, Animated, Easing 
} from 'react-native';

export default function Repaso() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const opacidadSplash = useState(new Animated.Value(1))[0];

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(opacidadSplash, {
        toValue: 0,
        duration: 1500,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start(() => setMostrarFormulario(true));
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

 const mostrarAlerta = () => {
 if (nombre.trim() === '' && correo.trim() === '') {
    Alert.alert('Error', 'Por favor, ingresa tu nombre y tu correo.');
    return;
  }
  if (nombre.trim() === '') {
    Alert.alert('Error', 'Por favor, ingresa tu nombre.');
    return;
  }

 
  if (correo.trim() === '') {
    Alert.alert('Error', 'Por favor, ingresa tu correo.');
    return;
  }
  if (!correo.includes('@') || !correo.includes('.com')) {
    Alert.alert('Correo inválido', 'El correo debe contener "@" y terminar en ".com"');
    return;
  }

 
  if (!aceptaTerminos) {
    Alert.alert('Términos y condiciones', 'Debes aceptar los términos y condiciones.');
    return;
  }

 
  Alert.alert('Registro exitoso', `Nombre: ${nombre}\nCorreo: ${correo}`);
};

 
  if (!mostrarFormulario) {
    return (
      <Animated.View style={[styles.splashContainer, { opacity: opacidadSplash }]}>
        <ImageBackground 
          source={require('../assets/Jose.jpg')}
          style={styles.splashImage}
          resizeMode="contain"
        />
      </Animated.View>
    );
  }

  
  return (
    <ImageBackground 
      source={require('../assets/fondo.jpeg')} 
      resizeMode='cover'
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Registro de usuario</Text>

        <Text style={styles.etiquetas}>Nombre: </Text>
        <TextInput 
          style={styles.input}
          placeholder="Escribe tu nombre"
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.etiquetas}>Correo electrónico: </Text>
        <TextInput 
          style={styles.input}
          placeholder="Escribe tu correo electrónico"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
        />

        <View style={styles.switchContainer}>
          <Text style={styles.textoSwitch}>Aceptar términos</Text>
          <Switch
            value={aceptaTerminos}
            onValueChange={() => setAceptaTerminos(!aceptaTerminos)}
            trackColor={{ true: 'green', false: 'gray' }}
          />
        </View>

        <Button
          title="Mostrar Alerta"
          onPress={mostrarAlerta}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    width: 250,
    height: 250,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  container: {
    width: '90%',
    backgroundColor: '#d3d3d3', 
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  titulo: {
    fontFamily: 'Times New Roman',
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    textDecorationLine: 'underline',
    marginBottom: 20,
    textAlign: 'center',
  },
  etiquetas: {
    fontSize: 18,
    marginBottom: 5,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginVertical: 15,
    paddingHorizontal: 5,
    width: '100%',
  },
  textoSwitch: {
    fontSize: 16,
  },
});
