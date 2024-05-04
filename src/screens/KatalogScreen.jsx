
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const data = [
  { id: '1', nama: 'Kaos Polos', harga: 'Rp 50.000' },
  { id: '2', nama: 'Celana Jeans', harga: 'Rp 150.000' },
  { id: '3', nama: 'Jaket Kulit', harga: 'Rp 300.000' },
  // Tambahkan data lain jika diperlukan
];

const KatalogScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('DetailProduk', { productId: item.id })}>
      <Text style={styles.itemNama}>{item.nama}</Text>
      <Text style={styles.itemHarga}>{item.harga}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Katalog Produk</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
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
  list: {
    width: '100%',
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemNama: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemHarga: {
    fontSize: 16,
    color: 'green',
  },
});

export default KatalogScreen;
