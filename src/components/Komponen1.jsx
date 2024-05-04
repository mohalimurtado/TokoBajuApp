// src/components/Komponen1.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Komponen1 = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.textLarge]}>Ini adalah Komponen 1</Text>
      <Text style={styles.text}>Anda dapat menambahkan elemen lain di sini</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Ubah warna teks menjadi abu-abu tua
    textShadowColor: '#000', // Tambahkan bayangan teks
    textShadowOffset: {width: 1, height: 1}, // Atur offset bayangan
    textShadowRadius: 5, // Atur jari-jari bayangan
    fontFamily: 'Arial', // Ganti jenis font
  },
  textLarge: {
    fontSize: 24, // Tambahkan ukuran font yang lebih besar
  },
});

export default Komponen1;
