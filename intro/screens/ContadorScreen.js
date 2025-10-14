//1.-zona de importanciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
//2.-Main: Zona de componentes
export default function App() {
  
  const[contador,setContador]=useState(0);
  
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contador</Text>
      <Text style={styles.texto2}>{contador}</Text>
      <View style={styles.contenedorBotones}>
      <Button  color="red" title='Incrementar' onPress={() => setContador(contador + 1)} />
      <Button  color="blue" title='Decrementar' onPress={() => setContador(contador - 1)} />
      <Button  color="green" title='Reiniciar' onPress={() => setContador (0)} />
        </View>  
      <StatusBar style="auto" />
    </View>
  );
}
//3.-Zona de estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#88a8ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
    fontFamily:"Times New Roman",
    fontSize:30,
    color:"#0f0044ff",
    fontWeight:"bold",
    fontStyle:"italic",
    textDecorationLine:"line-through"
  },
   
   texto2:{
    fontFamily:"Courier",
    fontSize:40,
    color:"#9c1313ff",
    fontWeight:"800",
    textDecorationLine:"underline"
  },

  contenedorBotones:{
    marginTop:20,
    flexDirection:"row",
    gap:10,

  },
});
