import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Detalle({ navigation }) {

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: 'none' }
    });

    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined
      });
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detalles Usuario</Text>
      <Text style={styles.subText}>Usando Navigation stack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
  },
  subText: {
    fontSize: 16,
    color: 'green',
  },
});