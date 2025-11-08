
import {Text, StyleSheet, View, ImageBackground, Animated, Easing,ScrollView,TextInput,Button,Switch} from 'react-native';
import React, {use, useEffect,useState} from 'react';
export default function App() {
  const[cargando, setCargando]= React.useState(true);
  const desvanecido= new Animated.Value(1);
 const [completado, setCompletado] = useState(false);
 const [completado1, setCompletado1] = useState(false);
  const [completado2, setCompletado2] = useState(false);
   const [completado3, setCompletado3] = useState(false);
   const [completado4, setCompletado4] = useState(false);
   const [completado5, setCompletado5] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
   Animated.timing(desvanecido,{
    toValue:0,
    duration:800,
    easing:Easing.out(Easing.ease),
    useNativeDriver:true,
    }).start(()=>setCargando(false));
    }, 2000);  
    return () => clearTimeout(timer);
  },[])
  
  
  if(cargando){

    return(<Animated.View style={[styles.splashContainer,{opacity:desvanecido}]}>
    
   

       <Text style={styles.splashText}>Si se puede pasar el examen</Text>
      

    </Animated.View>);
  }

  return (
    
   <ScrollView>
      <Text style={styles.texto}>Mis deberes</Text>
      <Text style={styles.texto}>Fecha: 07/11/2025</Text>
       <View style={styles.container}>
        <Text style={styles.titulo}>Trabajo</Text>
        <Text>Tarea 1: Realizar reporte de ventas</Text>
        <Text>Prioridad: Alta</Text>
        <Text style={[styles.luz, {color:completado ? 'green' : 'red'}]}>
        {completado ? 'Completado' : 'Pendiente'}
      </Text>
      <Switch
        value={completado}
        onValueChange={() => setCompletado(!completado)}
      />
        <Text>Tarea 2: Entregar informe de gastos</Text>
         <Text>Prioridad: media</Text>
        <Text style={[styles.luz, {color:completado1 ? 'green' : 'red'}]}>
        {completado1 ? 'Completado' : 'Pendiente'}
      </Text>
      <Switch
        value={completado1}
        onValueChange={() => setCompletado1(!completado1)}
      />
    </View>
    <View style={styles.container2}>
        <Text style={styles.titulo}>Casa</Text>
        <Text>Tarea 1: Limpiar la sala</Text>
        <Text>Prioridad: Media</Text>
        <Text style={[styles.luz, {color:completado2 ? 'green' : 'red'}]}>
        {completado2 ? 'Completado' : 'Pendiente'}
      </Text>
      <Switch
        value={completado2}
        onValueChange={() => setCompletado2(!completado2)}
      />
        <Text>Tarea 2: Lavar la ropa</Text>
         <Text>Prioridad: media</Text>
        <Text style={[styles.luz, {color:completado3 ? 'green' : 'red'}]}>
        {completado3 ? 'Completado' : 'Pendiente'}
      </Text>
      <Switch
        value={completado3}
        onValueChange={() => setCompletado3(!completado3)}
      />
    </View>
     <View style={styles.container2}>
        <Text style={styles.titulo}>Escuela</Text>
        <Text>Tarea 1: Estudiar para el examen</Text>
        <Text>Prioridad: Media</Text>
        <Text style={[styles.luz, {color:completado4 ? 'green' : 'red'}]}>
        {completado4 ? 'Completado' : 'Pendiente'}
      </Text>
      <Switch
        value={completado4}
        onValueChange={() => setCompletado4(!completado4)}
      />
        <Text>Tarea 2: Entregar tarea de matemáticas</Text>
         <Text>Prioridad: media</Text>
        <Text style={[styles.luz, {color:completado5 ? 'green' : 'red'}]}>
        {completado5 ? 'Completado' : 'Pendiente'}
      </Text>
      <Switch
        value={completado5}
        onValueChange={() => setCompletado5(!completado5)}
      />
    </View>
    <View style={{margin:20}}>
    <Button title="Reiniciar tareas" onPress={() => {
      setCompletado(false);
      setCompletado1(false);
      setCompletado2(false);
      setCompletado3(false);
      setCompletado4(false);
      setCompletado5(false);
      
    }} />
    </View>
   </ScrollView>
  
    
  );
}
const styles = StyleSheet.create({
 
  background: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  },
  texto:{
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  splashContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   padding:50,

  
  },
  splashText:{
  position:'absolute',
  marginBottom:50,
  fontSize:20,
  color:'black',
  },
  container: {
    width: '100%',
    backgroundColor: '#d3d3d3', 
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 20,
  },
   container2: {
    width: '100%',
    backgroundColor: '#eb8c8cff', 
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  luz: {
    fontSize: 20,
    marginBottom: 15,
  },
  
});