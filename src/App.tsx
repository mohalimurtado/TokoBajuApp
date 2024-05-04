import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BerandaScreen from './screens/BerandaScreen';
import KatalogScreen from './screens/KatalogScreen';
import KeranjangScreen from './screens/KeranjangScreen';
import RiwayatPesananScreen from './screens/RiwayatPesananScreen';
import DetailProdukScreen from './screens/DetailProdukScreen';
import PembayaranScreen from './screens/PembayaranScreen';
import Icon from 'react-native-vector-icons/Ionicons'; // Import ikon dari paket

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const KatalogStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Katalog" component={KatalogScreen} />
    <Stack.Screen name="DetailProduk" component={DetailProdukScreen} />
    <Stack.Screen name="Pembayaran" component={PembayaranScreen} />
  </Stack.Navigator>
);

const RiwayatPesananStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="RiwayatPesanan" component={RiwayatPesananScreen} />
    {/* Jika diperlukan, tambahkan screen detail pesanan */}
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Beranda') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Katalog') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Keranjang') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Riwayat Pesanan') {
              iconName = focused ? 'list' : 'list-outline';
            }

            // Return the icon component
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen 
          name="Beranda" 
          component={BerandaScreen} 
          options={{
            tabBarLabel: 'Beranda',
          }}
        />
        <Tab.Screen 
          name="Katalog" 
          component={KatalogStack} 
          options={{
            tabBarLabel: 'Katalog',
          }}
        />
        <Tab.Screen 
          name="Keranjang" 
          component={KeranjangScreen} 
          options={{
            tabBarLabel: 'Keranjang',
          }}
        />
        <Tab.Screen 
          name="Riwayat Pesanan" 
          component={RiwayatPesananStack} 
          options={{
            tabBarLabel: 'Riwayat Pesanan',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
