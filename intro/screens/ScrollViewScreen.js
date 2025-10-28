import {Text, StyleSheet, View, ScrollView,Button,} from 'react-native';
import React, {useState,useRef} from 'react';
export default function ScrollViewScreen() {
  const scrollRef = useRef();
const iralFinal=() => {
  scrollRef.current.scrollToEnd({animated:true});
}
  return (
    <ScrollView  
    ref={scrollRef}
    style={styles.container}
    contentContainerStyle={styles.content}
    showsVerticalScrollIndicator={true}
  >

     <Text style={styles.titulo}>Practica ScrollView</Text>
      <Text style={styles.titulo2}>Ejemplo de desplazamiento vertical</Text>
<View>
  <Button title="Ir al final" onPress={iralFinal} />
</View>


      <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 1</Text>
      </View>
      <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 2</Text>
      </View>
      <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 3</Text>
      </View>
      <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 4</Text>
      </View>
      <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 5</Text>
      </View>
     <Text style={styles.titulo}>Desplazamiento horizontal</Text>
     <ScrollView
     horizontal
     nestedScrollEnabled={true}
     style={styles.scrollHorizontal}
    showsHorizontalScrollIndicator={true}
     >
      <View style={styles.elementos2}>
        <Text style={styles.text}>Elemento 1</Text>
      </View>
      <View style={styles.elementos2}>
        <Text style={styles.text}>Elemento 2</Text>
      </View>
      <View style={styles.elementos2}>
        <Text style={styles.text}>Elemento 3</Text>
      </View>
      <View style={styles.elementos2}>
        <Text style={styles.text}>Elemento 4</Text>
      </View>
      <View style={styles.elementos2}>
        <Text style={styles.text}>Elemento 5</Text>
      </View>
      <View style={styles.elementos2}>
        <Text style={styles.text}>Elemento 6</Text>
      </View>
      <View style={styles.elementos2}>
        <Text style={styles.text}>Elemento 7</Text>
      </View>
      <View style={styles.elementos2}>
        <Text style={styles.text}>Elemento 8</Text>
      </View>
      <View style={styles.elementos2}>
        <Text style={styles.text}>Elemento 9</Text>
      </View>
      <View style={styles.elementos2}>
        <Text style={styles.text}>Elemento 10</Text>
      </View>
      <View style={styles.elementos2}>
        <Text style={styles.text}>Elemento 11</Text>
      </View>
      <View style={styles.elementos2}>
        <Text style={styles.text}>Elemento 12</Text>
      </View>
      

     </ScrollView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
container:{
  backcolor:'#16465aff',
},
content:{
padding:20,
paddingButtom:100,
},
titulo:{
fontSize:30,
fontWeight:'bold',  
marginBottom:10,
color:'#354A90',
textAlign:'center',
},
titulo2:{
fontSize:30,
fontWeight:'bold',  
marginBottom:10,
marginTop:20,
textAlign:'center',
},
elementos:{
  width:'100%',
  height:100,
  backgroundColor:'#87CEEB',
  justifyContent:'center',
  alignItems:'center',
  marginVertical:10,
  borderRadius:10, 
},
elementos2:{
  width:100,
  height:120,
  backgroundColor:'#105e7cff',
  justifyContent:'center',
  alignItems:'center',
  marginRight:10,
  borderRadius:10, 
},
text:{
  fontSize:16,
  fontFamily:'Courier New',
  color:'#020202ff',
  fontWeight:'900',
  textDecorationLine:'underline',

},
scrollHorizontal:{
  marginVertical:10,
  width:'100%',
},
});