import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

import MapScreen from '../screens/MapScreen';
import AdoptionScreen from '../screens/AdoptionScreen';
import CompanionScreen from '../screens/CompanionScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopWidth: 0,
            elevation: 10,
            shadowColor: '#000',
            shadowOpacity: 0.08,
            shadowRadius: 10,
            height: 60,
            paddingBottom: 8,
          },
          tabBarActiveTintColor: '#007AFF', // Azul clásico estilo iOS
          tabBarInactiveTintColor: '#8E8E93',
          tabBarIcon: ({ focused }) => {
            let icon = '📍';
            if (route.name === 'Mapa') icon = '🗺️';
            else if (route.name === 'Adopciones') icon = '🐾';
            else if (route.name === 'Mi Compañero') icon = '🎮';
            else if (route.name === 'Perfil') icon = '👤';

            return <Text style={{ fontSize: 20 }}>{icon}</Text>;
          },
        })}
      >
        <Tab.Screen name="Mapa" component={MapScreen} />
        <Tab.Screen name="Adopciones" component={AdoptionScreen} />
        <Tab.Screen name="Mi Compañero" component={CompanionScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}