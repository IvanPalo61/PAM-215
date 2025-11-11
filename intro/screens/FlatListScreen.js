import { Text, StyleSheet, View, FlatList, SectionList, ScrollView } from 'react-native'
import React from 'react'

export default function FlatListt() {
  const datos = [
    { id: '1', nombre: 'manzana' },
    { id: '2', nombre: 'plátano' },
    { id: '3', nombre: 'naranja' },
    { id: '4', nombre: 'uva' },
    { id: '5', nombre: 'fresa' },
    { id: '6', nombre: 'sandía' },
  ]

  const secciones = [
    {
      titulo: 'Frutas',
      data: [
        { nombre: 'Manzana' },
        { nombre: 'Plátano' },
        { nombre: 'Naranja' },
        { nombre: 'Uva' },
      ],
    },
    {
      titulo: 'Verduras',
      data: [
        { nombre: 'Zanahoria' },
        { nombre: 'Lechuga' },
        { nombre: 'Tomate' },
        { nombre: 'Brócoli' },
      ],
    },
  ]

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.Titulo}>Ejemplo de FlatList</Text>

        <FlatList
          data={datos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.elementos}>
              <Text style={styles.text}>{item.nombre}</Text>
            </View>
          )}
          scrollEnabled={false}
          ItemSeparatorComponent={() => <View style={styles.separador} />}
        />

        <Text style={styles.Titulo2}>Ejemplo de SectionList</Text>

        <SectionList
          sections={secciones}
          keyExtractor={(item, index) => item.nombre + index}
          renderItem={({ item }) => (
            <View style={styles.itemSeccion}>
              <Text style={styles.text}>{item.nombre}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { titulo } }) => (
            <View style={styles.encabezado}>
              <Text style={styles.tituloSeccion}>{titulo}</Text>
            </View>
          )}
          scrollEnabled={false}
          stickySectionHeadersEnabled={false}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ebf0', // fondo suave gris-azulado
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  Titulo: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 15,
    marginTop: 20,
    textAlign: 'center',
    color: '#1e3a8a',
    fontFamily: 'Times New Roman',
  },
  Titulo2: {
    fontSize: 26,
    fontWeight: '700',
    marginVertical: 20,
    textAlign: 'center',
    color: '#14532d',
    fontFamily: 'Times New Roman',
  },
  elementos: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  itemSeccion: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  text: {
    fontSize: 18,
    color: '#333333',
    textTransform: 'capitalize',
    fontFamily: 'Times New Roman',
  },
  separador: {
    height: 10,
  },
  encabezado: {
    backgroundColor: '#bbf7d0',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
  tituloSeccion: {
    fontSize: 20,
    fontWeight: '700',
    color: '#065f46',
    fontFamily: 'Times New Roman',
  },
})
