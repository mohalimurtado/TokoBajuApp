// src/screens/BerandaScreen.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Komponen1 from '../components/Komponen1';
import Komponen2 from '../components/Komponen2';

const BerandaScreen = () => {
  const handlePress = () => {
    console.log('Tombol ditekan');
    // Tambahkan logika Anda di sini
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halaman Beranda</Text>
      <Komponen1 />
      <Komponen2 onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default BerandaScreen;
