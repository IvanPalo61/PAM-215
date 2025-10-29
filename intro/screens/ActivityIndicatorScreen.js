import { Text, StyleSheet, View, Button, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';

export default function ActivityIndicatorScreen() {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator 
            size="large" 
            color="#1964d3ff" 
            animating={true}
            hidesWhenStopped={true}
          />
          <Text>Cargando.........</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ActivityIndicator</Text>
      <Button title="Iniciar Carga" onPress={startLoading} />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#96c7d3ff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loaderContainer: {
    alignItems: 'center',
  },
});
