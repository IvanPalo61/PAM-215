
import {Text, StyleSheet, View, ImageBackground, Animated, Easing,ScrollView,TextInput,Button,Switch} from 'react-native';
import React, {use, useEffect} from 'react';
export default function App() {
  const[cargando, setCargando]= React.useState(true);
  const desvanecido= new Animated.Value(1);
 const [completado, pendiente] = useState(false);
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
        <Text>Estatus: Pendiente</Text>


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
  },
});