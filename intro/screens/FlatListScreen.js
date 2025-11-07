import {Text, StyleSheet, View,FlatList,SectionList,ScrollView} from 'react-native';

export default function FlatListScreen() {
  const datos = [
    {id: '1', nombre: 'Manzana'},
    {id: '2', nombre: 'platano'},
     {id: '1', nombre: 'naranja'},
    {id: '2', nombre: 'uva'},
     {id: '1', nombre: 'Fresa'},
    {id: '2', nombre: 'sandia'},
  ]
  const secciones = [ 
    {
      title: 'Frutras',
Data:[
        {nombre: 'Manzana'},
        {nombre: 'Platano'},
        {nombre: 'Naranja'},
        {nombre: 'Uva'},
        

]
    },
    {
      title: 'Verduras',
      data:[
        {nombre: 'Zanahoria'},
        {nombre: 'Lechuga'},
        {nombre: 'Cebolla'},
        {nombre: 'Pepino'}, 
      ]
    }
  ]
  return (
    <scrollView style={StyleSheet.container}>
      <View style={style.container}>
        <Text style={style.titulo}>Ejemplo de FlatList</Text>
        <FlatList></FlatList>
      </View>
    </scrollView>
  );
}
