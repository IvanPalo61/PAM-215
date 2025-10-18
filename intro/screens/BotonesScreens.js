import {Text, StyleSheet, View,Button,Switch} from 'react-native';
import React, { useState } from 'react';

export default function BotonesScreens() {
  const [esEncendido, cambiarEncendido] = useState(false);
  const [color, cambiarColor] = useState('yellow');
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Control de luz</Text>
      {
        /*Operador terneario Condicional ? valor true : valor false*/
      }
      <Text style={[styles.luz, {color:esEncendido ? color : 'black'}]}>
        {esEncendido ? 'Luz Encendida' : 'Luz Apagada'}
      </Text>
      <Switch
        value={esEncendido}
        onValueChange={() => cambiarEncendido(!esEncendido)}
        trackColor={{true:'yellow', false:'gray'}}
      />

      <View style={styles.cajaBotones}>
      <Button 
      title='Amarillo'
      onPress={() => esEncendido && cambiarColor('yellow')}
      color='#f5e642'
      />
      <Button 
      title='Azul'
      onPress={() => esEncendido && cambiarColor('blue')}
      color='#42a5f5'
      />
      <Button 
      title='Rojo'
      onPress={() => esEncendido && cambiarColor('red')}
      color='#f44336'
      />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#583a3aff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajaBotones: {
flexDirection: 'row',
gap: 10,
marginTop: 20,
  },
 titulo: {
    fontSize: 40,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },
luz: {
    fontSize: 30,
    marginBottom: 15,
  },
});

