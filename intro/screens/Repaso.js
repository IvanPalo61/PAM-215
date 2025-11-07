import React, { useState, useEffect } from "react";
import { 
  Text, 
  StyleSheet, 
  View, 
  Button, 
  TextInput, 
  Switch, 
  ImageBackground, 
  Animated, 
  Easing  
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
    const isWeb = typeof window !== 'undefined' && window.alert;
    
    if (nombre.trim() === '' && correo.trim() === '') {
      isWeb ? window.alert('Por favor, ingresa tu nombre y tu correo.') : Alert.alert('Error', 'Por favor, ingresa tu nombre y tu correo.');
      return;
    }
    if (nombre.trim() === '') {
      isWeb ? window.alert('Por favor, ingresa tu nombre.') : Alert.alert('Error', 'Por favor, ingresa tu nombre.');
      return;
    }

    if (correo.trim() === '') {
      isWeb ? window.alert('Por favor, ingresa tu correo.') : Alert.alert('Error', 'Por favor, ingresa tu correo.');
      return;
    }
    if (!correo.includes('@') || !correo.includes('.com')) {
      isWeb ? window.alert('El correo debe contener "@" y terminar en ".com"') : Alert.alert('Correo inválido', 'El correo debe contener "@" y terminar en ".com"');
      return;
    }

    if (!aceptaTerminos) {
      isWeb ? window.alert('Debes aceptar los términos y condiciones.') : Alert.alert('Términos y condiciones', 'Debes aceptar los términos y condiciones.');
      return;
    }

    if (isWeb && window.confirm) {
      const guardar = window.confirm('¿Deseas guardar tu información?');
      if (guardar) {
        window.alert(`Registro exitoso\nNombre: ${nombre}\nCorreo: ${correo}`);
      }
    } else {
      Alert.alert(
        'Confirmación',
        '¿Deseas guardar tu información?',
        [
          { text: 'Cancelar', style: 'cancel' },
          { text: 'Guardar info', onPress: () => Alert.alert('Registro exitoso', `Nombre: ${nombre}\nCorreo: ${correo}`) }
        ],
        { cancelable: false }
      );
    }
  };

  if (!mostrarFormulario) {
    return (
      <Animated.View style={[styles.splashContainer, { opacity: opacidadSplash }]}>
        <ImageBackground
          source={require('../assets/Jose.jpg')}
          style={styles.fullscreenImage}
          resizeMode="cover"
        />
      </Animated.View>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/fondo.jpeg')}
      resizeMode='cover'
      style={styles.fullscreenImage}
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
  fullscreenImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashContainer: {
    flex: 1,
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
