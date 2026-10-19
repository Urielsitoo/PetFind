import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';

export default function MapScreen() {
  // Coordenadas iniciales por defecto
  const initialRegion = {
    latitude: 26.05,
    longitude: -98.28,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Encabezado estilo iOS */}
      <View style={styles.header}>
        <Text style={styles.title}>PetFind 🐾</Text>
        <Text style={styles.subtitle}>Mascotas perdidas cerca de ti</Text>
      </View>

      {/* Contenedor del Mapa con bordes redondeados estilo Apple */}
      <View style={styles.mapCard}>
        <MapView
          provider={PROVIDER_DEFAULT}
          style={styles.map}
          initialRegion={initialRegion}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
          {/* Marcador de prueba para reporte de mascota */}
          <Marker
            coordinate={{ latitude: 26.05, longitude: -98.28 }}
            title="Perrito extraviado 🐶"
            description="Visto cerca del parque central"
          />
        </MapView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7', // Fondo iOS
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  subtitle: {
    fontSize: 15,
    color: '#8E8E93',
    marginTop: 2,
  },
  mapCard: {
    flex: 1,
    borderRadius: 20, // Curva estilo Apple
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});