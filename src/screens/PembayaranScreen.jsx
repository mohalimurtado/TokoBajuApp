import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const PembayaranScreen = ({ navigation }) => {
  const [metodePembayaran, setMetodePembayaran] = useState('');
  const [nomorKartu, setNomorKartu] = useState('');

  const handleBayar = () => {
    if (metodePembayaran === '' || nomorKartu === '') {
      Alert.alert('Peringatan', 'Harap lengkapi semua field');
      return;
    }

    console.log('Proses pembayaran...');
    // Tambahkan logika pembayaran Anda di sini
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pembayaran</Text>
      <TextInput
        style={styles.input}
        placeholder="Metode Pembayaran"
        value={metodePembayaran}
        onChangeText={text => setMetodePembayaran(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nomor Kartu"
        keyboardType="numeric"
        value={nomorKartu}
        onChangeText={text => setNomorKartu(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleBayar}>
        <Text style={styles.buttonText}>Bayar</Text>
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
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PembayaranScreen;
