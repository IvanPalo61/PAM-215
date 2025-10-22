import {Text, StyleSheet, View, ImageBackground, Animated, Easing} from 'react-native';
import React, {use, useEffect} from 'react';
export default function ImageBackgroundScreen() {
  const[cargando, setCargando]= React.useState(true);
  const desvanecido= new Animated.Value(1);
  
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
      <ImageBackground source={require('../assets/Jose.jpg')} 
      resizeMode='contain' style={styles.splashImage}>

       <Text style={styles.splashText}>Cargando Imagen...</Text>
      </ImageBackground>

    </Animated.View>);
  }

  return (
   
    <ImageBackground 
    source={require('../assets/lol.png')}
    resizeMode='contain'
    style={styles.background}>
      <Text style={styles.texto}>Bienvenido a mi App!!</Text>
    </ImageBackground>
  
  
    //<View>
     //<Text></Text>
   // </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },

  texto:{
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',

  },
  splashContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   padding:50,

  },
  splashImage:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    width:'100%',
    
  },
  splashText:{
  position:'absolute',
  marginBottom:50,
  fontSize:20,
  color:'black',
  }
});
