// src/screens/KeranjangScreen.jsx
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
const data = [
  { id: '1', nama: 'Kaos Polos', harga: 'Rp 50.000', jumlah: 2 },
  { id: '2', nama: 'Celana Jeans', harga: 'Rp 150.000', jumlah: 1 },
  // Tambahkan data lain jika diperlukan
];

const KeranjangScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemNama}>{item.nama}</Text>
      <Text style={styles.itemHarga}>{item.harga}</Text>
      <Text>Jumlah: {item.jumlah}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Keranjang Belanja</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      <Text style={styles.total}>Total: Rp {calculateTotal()}</Text>
    </View>
  );
};

const calculateTotal = () => {
  let total = 0;
  data.forEach(item => {
    total += parseFloat(item.harga.replace('Rp ', '')) * item.jumlah;
  });
  return total.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default KeranjangScreen;
