import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, ScrollView } from 'react-native';


import ContadorScreen from './ContadorScreen';
import BotonesScreens from './BotonesScreens';

import TextInputScreen from './TextInputScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import BottomSheetScreen from './BottomSheetScreen';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'contador':
      return <ContadorScreen />;
    case 'botones':
      return <BotonesScreens />;
    case 'textinput':
    return <TextInputScreen />;
    case 'imagebg':
     return <ImageBackgroundScreen />;
    case 'scroll':
     return <ScrollViewScreen />;
    case 'activity':
      return <ActivityIndicatorScreen />;
    case 'flatlist':
     return <FlatListScreen />;
    case 'modal':
      return <ModalScreen />;
    case 'bottom':
      return <BottomSheetScreen />;
    default:
      return (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Menú de Prácticas</Text>

          <View style={styles.buttonContainer}>
            <Button title="Pract: Contador" onPress={() => setScreen('contador')} />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Pract: Buttons & Switch" onPress={() => setScreen('botones')} />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Pract: Text Input & Alert" onPress={() => setScreen('textinput')} />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Pract: ImageBackground & SplashScreen" onPress={() => setScreen('imagebg')} />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Pract: ScrollView" onPress={() => setScreen('scroll')} />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Pract: ActivityIndicator" onPress={() => setScreen('activity')} />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Pract: FlatList & SectionList" onPress={() => setScreen('flatlist')} />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Pract: Modal" onPress={() => setScreen('modal')} />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Pract: Bottom Sheet" onPress={() => setScreen('bottom')} />
          </View>
        </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f6f8',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#222',
  },
  buttonContainer: {
    width: '90%',
    marginVertical: 6,
  },
});
