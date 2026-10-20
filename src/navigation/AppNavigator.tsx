import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

// Importación de Pantallas
import { SplashScreen } from '../screens/SplashScreen';
import { LoginScreen } from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

import { HomeScreen } from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import AdoptionScreen from '../screens/AdoptionScreen';
import { CompanionScreen } from '../screens/CompanionScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

// Navegador de las 5 Pestañas Inferiores
function MainTabNavigator() {
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
          tabBarActiveTintColor: '#3D3425',
          tabBarInactiveTintColor: '#8E8E93',
          tabBarIcon: ({ focused }) => {
            let icon = '📍';
            if (route.name === 'Inicio') icon = '🏠';
            else if (route.name === 'Mapa') icon = '🗺️';
            else if (route.name === 'Adopciones') icon = '🐾';
            else if (route.name === 'Mi Compañero') icon = '🐕‍🦺';
            else if (route.name === 'Perfil') icon = '👤';

            return <Text style={{ fontSize: 20 }}>{icon}</Text>;
          },
        })}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Mapa" component={MapScreen} />
        <Tab.Screen name="Adopciones" component={AdoptionScreen} />
        <Tab.Screen name="Mi Compañero" component={CompanionScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Navegador Principal de la App (Maneja Splash, Login, Register y MainApp)
export default function AppNavigator() {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'login' | 'register' | 'main'>('splash');

  // Objeto con funciones para cambiar de pantalla
  const navigationMock = {
    replace: (screenName: string) => {
      if (screenName === 'Login') setCurrentScreen('login');
      else if (screenName === 'MainApp') setCurrentScreen('main');
    },
    navigate: (screenName: string) => {
      if (screenName === 'Register') setCurrentScreen('register');
      else if (screenName === 'Login') setCurrentScreen('login');
      else if (screenName === 'MainApp') setCurrentScreen('main');
    },
    goBack: () => setCurrentScreen('login'),
  };

  if (currentScreen === 'splash') {
    return <SplashScreen navigation={navigationMock} />;
  }

  if (currentScreen === 'login') {
    return <LoginScreen navigation={navigationMock} />;
  }

  if (currentScreen === 'register') {
    return <RegisterScreen navigation={navigationMock} />;
  }

  return <MainTabNavigator />;
}