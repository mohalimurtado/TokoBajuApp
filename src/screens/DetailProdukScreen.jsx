// src/screens/DetailProdukScreen.jsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DetailProdukScreen = ({ route, navigation }) => {
  const { productId } = route.params;

  const handleBeli = () => {
    console.log(`Membeli produk dengan id: ${productId}`);
    // Tambahkan logika pembelian Anda di sini
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Produk</Text>
      <Text style={styles.text}>ID Produk: {productId}</Text>
      {/* Menampilkan detail produk lainnya */}
      <TouchableOpacity style={styles.button} onPress={handleBeli}>
        <Text style={styles.buttonText}>Beli</Text>
      </TouchableOpacity>
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
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetailProdukScreen;
