// src/screens/RiwayatPesananScreen.jsx
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const data = [
  { id: '1', tanggal: '01/05/2024', total: 'Rp 200.000' },
  { id: '2', tanggal: '02/05/2024', total: 'Rp 350.000' },
  // Tambahkan data lain jika diperlukan
];

const RiwayatPesananScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTanggal}>Tanggal: {item.tanggal}</Text>
      <Text style={styles.itemTotal}>Total: {item.total}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Riwayat Pesanan</Text>
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
  itemTanggal: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemTotal: {
    fontSize: 16,
    color: 'green',
  },
});

export default RiwayatPesananScreen;
