import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function MapScreen() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  // Coordenadas iniciales por defecto (Reynosa, Tamps aprox)
  const initialRegion = {
    latitude: 26.092,
    longitude: -98.287,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Encabezado */}
        <View style={styles.header}>
          <Text style={styles.title}>Mascotas Perdidas</Text>
          <Text style={styles.subtitle}>Reportes en tu comunidad</Text>
        </View>

        {/* Buscador */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#8C8275" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar por zona o raza..."
            placeholderTextColor="#A09382"
          />
        </View>

        {/* Filtros rápidos (Píldoras) */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersScroll}>
          {['Todos', 'Perros', 'Gatos', 'Recientes'].map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterChip,
                activeFilter === filter && styles.filterChipActive,
              ]}
              onPress={() => setActiveFilter(filter)}
            >
              <Text
                style={[
                  styles.filterText,
                  activeFilter === filter && styles.filterTextActive,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Contenedor del Mapa */}
        <View style={styles.mapCard}>
          <MapView
            provider={PROVIDER_DEFAULT}
            style={styles.map}
            initialRegion={initialRegion}
          >
            <Marker
              coordinate={{ latitude: 26.092, longitude: -98.287 }}
              title="Firulais"
              description="Perdido cerca del parque cultural"
            />
          </MapView>
          <View style={styles.mapBadge}>
            <View style={styles.dotRed} />
            <Text style={styles.mapBadgeText}>Reportes cerca de ti</Text>
          </View>
        </View>

        {/* Botón de Reportar Extravío */}
        <TouchableOpacity style={styles.reportButton}>
          <Text style={styles.reportButtonText}>+ Reportar Extravío</Text>
        </TouchableOpacity>

        {/* Sección: Ayudemos a encontrarlos */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Ayudemos a encontrarlos</Text>
          <Text style={styles.sectionLink}>Más recientes</Text>
        </View>

        {/* Tarjeta de Mascota Perdida (Firulais) */}
        <View style={styles.petCard}>
          <View style={styles.petImageContainer}>
            {/* Puedes cambiar esta imagen por una de prueba de un perrito */}
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=500&auto=format&fit=crop' }}
              style={styles.petImage}
              resizeMode="cover"
            />
            <View style={styles.badgeLost}>
              <Text style={styles.badgeLostText}>PERDIDO</Text>
            </View>
          </View>

          <View style={styles.petInfoContainer}>
            <View style={styles.petRowHeader}>
              <Text style={styles.petName}>Firulais</Text>
              <Text style={styles.petBreed}>Mestizo · Collar café</Text>
            </View>
            <Text style={styles.petLocation}>Reynosa, Tamps - Hace 2h</Text>

            <TouchableOpacity style={styles.contactButton}>
              <Ionicons name="chatbubble-outline" size={16} color="#3D3425" />
              <Text style={styles.contactButtonText}>Contactar</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DF', // Fondo crema oficial de PetFind
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 30,
  },
  header: {
    marginTop: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3D3425',
  },
  subtitle: {
    fontSize: 14,
    color: '#6E6252',
    marginTop: 2,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 14,
    height: 48,
    borderWidth: 1,
    borderColor: '#E8DFCE',
    marginBottom: 14,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#3D3425',
  },
  filtersScroll: {
    marginBottom: 16,
  },
  filterChip: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8DFCE',
    marginRight: 8,
    height: 38,
    justifyContent: 'center',
  },
  filterChipActive: {
    backgroundColor: '#C2A649',
    borderColor: '#C2A649',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6E6252',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },
  mapCard: {
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E8DFCE',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  mapBadge: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dotRed: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E53935',
  },
  mapBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#3D3425',
  },
  reportButton: {
    backgroundColor: '#3D3425',
    borderRadius: 14,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#3D3425',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  reportButtonText: {
    color: '#FFF8DF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3D3425',
  },
  sectionLink: {
    fontSize: 13,
    color: '#8C8275',
    fontWeight: '600',
  },
  petCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E8DFCE',
    marginBottom: 12,
  },
  petImageContainer: {
    height: 140,
    width: '100%',
    backgroundColor: '#E8DFCE',
  },
  petImage: {
    width: '100%',
    height: '100%',
  },
  badgeLost: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#E53935',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeLostText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  petInfoContainer: {
    padding: 14,
  },
  petRowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  petName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3D3425',
  },
  petBreed: {
    fontSize: 12,
    color: '#8C8275',
  },
  petLocation: {
    fontSize: 13,
    color: '#6E6252',
    marginBottom: 12,
  },
  contactButton: {
    backgroundColor: '#F7F2E7',
    borderRadius: 10,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    borderWidth: 1,
    borderColor: '#E8DFCE',
  },
  contactButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3D3425',
  },
});