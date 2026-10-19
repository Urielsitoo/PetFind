import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Image } from 'react-native';

export const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (navigation?.replace) {
        navigation.replace('Login');
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Contenedor que recorta las esquinas blancas del logo */}
      <View style={styles.logoClipContainer}>
        <Image
          source={require('../../assets/logo.jpeg')}
          style={styles.logoImage}
          resizeMode="cover"
        />
      </View>

      <ActivityIndicator size="large" color="#3D3425" style={styles.loader} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DF', // Fondo crema unificado
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoClipContainer: {
    width: 220,
    height: 220,
    borderRadius: 45,
    overflow: 'hidden', // Oculta los bordes blancos externos
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: '122%', // Escala levemente para sacar los bordes blancos de la vista
    height: '122%',
  },
  loader: {
    position: 'absolute',
    bottom: 60,
  },
});