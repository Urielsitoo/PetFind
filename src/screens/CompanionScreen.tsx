// src/screens/CompanionScreen.tsx
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  PanResponder,
  Animated,
  Image,
} from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY, SHADOWS } from '../config/theme';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - SPACING.lg * 2 - SPACING.md) / 2;

// Catálogo completo mapeado a tus archivos de assets/dogs
const DOG_BREEDS = [
  { id: 'd1', name: 'Chihuahua', image: require('../../assets/dogs/chihuahua.jpeg') },
  { id: 'd2', name: 'Doberman', image: require('../../assets/dogs/doberman.png') },
  { id: 'd3', name: 'French Bulldog', image: require('../../assets/dogs/french_bulldog.png') },
  { id: 'd4', name: 'Golden Retriever', image: require('../../assets/dogs/golde_retriever.png') },
  { id: 'd5', name: 'Husky', image: require('../../assets/dogs/husky.png') },
  { id: 'd6', name: 'Labrador Retriever', image: require('../../assets/dogs/labrador_retriever.png') },
  { id: 'd7', name: 'Pastor Alemán', image: require('../../assets/dogs/pastor_aleman.jpeg') },
  { id: 'd8', name: 'Perro Salchicha', image: require('../../assets/dogs/perro_salchicha.png') },
  { id: 'd9', name: 'Pomeranian', image: require('../../assets/dogs/pomeranian.png') },
  { id: 'd10', name: 'Poodle', image: require('../../assets/dogs/poodle.png') },
  { id: 'd11', name: 'Pug', image: require('../../assets/dogs/pug.png') },
  { id: 'd12', name: 'Shih Tzu', image: require('../../assets/dogs/shih_tzu.png') },
];

// Catálogo completo mapeado a tus archivos de assets/cats
const CAT_BREEDS = [
  { id: 'c1', name: 'Atigrado Naranja', image: require('../../assets/cats/gato_atigrado_naranja.png') },
  { id: 'c2', name: 'Blanco con Negro', image: require('../../assets/cats/gato_blanco_con_negro.png') },
  { id: 'c3', name: 'Gato Gris', image: require('../../assets/cats/gato_gris.png') },
  { id: 'c4', name: 'Manchas Cafés', image: require('../../assets/cats/gato_mancha_cafes.png') },
  { id: 'c5', name: 'Gato Negro', image: require('../../assets/cats/gato_negro.png') },
  { id: 'c6', name: 'Gato Persa', image: require('../../assets/cats/gato_persa.png') },
  { id: 'c7', name: 'Gato Siamés', image: require('../../assets/cats/gato_siames.png') },
  { id: 'c8', name: 'Tres Colores', image: require('../../assets/cats/gato_tres_colores.png') },
];

const VACCINES_LIST = [
  { id: 'v1', name: 'Rabia' },
  { id: 'v2', name: 'Múltiple / Triple Felina' },
  { id: 'v3', name: 'Parvovirus / Quinta' },
  { id: 'v4', name: 'Desparasitación Interna' },
  { id: 'v5', name: 'Bordetella' },
];

export const CompanionScreen = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  // Mascota activa
  const [registeredPet, setRegisteredPet] = useState<any>(null);

  // Campos del Formulario
  const [petName, setPetName] = useState('');
  const [species, setSpecies] = useState<'dog' | 'cat'>('dog');
  const [selectedBreed, setSelectedBreed] = useState<any>(null);
  const [petAge, setPetAge] = useState('');
  const [appliedVaccines, setAppliedVaccines] = useState<string[]>([]);

  // Animaciones de Posición X
  const formTranslateX = useRef(new Animated.Value(width)).current;
  const catalogTranslateX = useRef(new Animated.Value(width)).current;

  const openForm = () => {
    setIsFormOpen(true);
    Animated.timing(formTranslateX, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const closeForm = () => {
    Animated.timing(formTranslateX, {
      toValue: width,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setIsFormOpen(false);
    });
  };

  const openCatalog = () => {
    setIsCatalogOpen(true);
    Animated.timing(catalogTranslateX, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const closeCatalog = () => {
    Animated.timing(catalogTranslateX, {
      toValue: width,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setIsCatalogOpen(false);
    });
  };

  // Gesto Deslizar a la derecha en Formulario
  const formPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, gestureState) => gestureState.dx > 20 && Math.abs(gestureState.dy) < 30,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx > 0) formTranslateX.setValue(gestureState.dx);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 120) {
          closeForm();
        } else {
          Animated.spring(formTranslateX, { toValue: 0, useNativeDriver: true }).start();
        }
      },
    })
  ).current;

  // Gesto Deslizar a la derecha en Catálogo
  const catalogPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, gestureState) => gestureState.dx > 20 && Math.abs(gestureState.dy) < 30,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx > 0) catalogTranslateX.setValue(gestureState.dx);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 120) {
          closeCatalog();
        } else {
          Animated.spring(catalogTranslateX, { toValue: 0, useNativeDriver: true }).start();
        }
      },
    })
  ).current;

  const toggleVaccine = (vaccineName: string) => {
    if (appliedVaccines.includes(vaccineName)) {
      setAppliedVaccines(appliedVaccines.filter((v) => v !== vaccineName));
    } else {
      setAppliedVaccines([...appliedVaccines, vaccineName]);
    }
  };

  const handleSavePet = () => {
    if (!petName || !selectedBreed) {
      alert('Por favor ingresa el nombre de tu mascota y selecciona su raza/especie.');
      return;
    }

    setRegisteredPet({
      name: petName,
      species: species === 'dog' ? 'Perro' : 'Gato',
      breed: selectedBreed.name,
      image: selectedBreed.image,
      age: petAge || '1 año',
      appliedVaccines,
      pendingVaccines: VACCINES_LIST.filter((v) => !appliedVaccines.includes(v.name)),
    });

    closeForm();
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background }}>
      {/* 1. VISTA PRINCIPAL (PESTAÑA) */}
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={TYPOGRAPHY.h1}>🐾 Mi Compañero Virtual</Text>
          <Text style={TYPOGRAPHY.caption}>Expediente digital, carnet de vacunas y registro</Text>
        </View>

        {!registeredPet ? (
          <View style={styles.emptyCard}>
            <Text style={{ fontSize: 50, marginBottom: SPACING.sm }}>🐕‍🦺</Text>
            <Text style={TYPOGRAPHY.h2}>Sin mascota registrada</Text>
            <Text style={[TYPOGRAPHY.body, styles.emptySubtext]}>
              Registra a tu perro o gato para personalizar su carnet de vacunas y fotos.
            </Text>
            <TouchableOpacity style={styles.primaryButton} onPress={openForm}>
              <Text style={styles.primaryButtonText}>+ Registrar Nueva Mascota</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.petCard}>
            <View style={styles.avatarContainer}>
              <Image source={registeredPet.image} style={styles.petAvatarImage} />
            </View>

            <Text style={styles.petName}>{registeredPet.name}</Text>
            <Text style={styles.petDetails}>
              {registeredPet.species} • {registeredPet.breed} • {registeredPet.age}
            </Text>

            <TouchableOpacity style={styles.secondaryButton} onPress={openForm}>
              <Text style={styles.secondaryButtonText}>+ Registrar Otra Mascota</Text>
            </TouchableOpacity>
          </View>
        )}

        {registeredPet && (
          <View style={styles.section}>
            <Text style={TYPOGRAPHY.h2}>💉 Carnet de Vacunación</Text>
            
            <Text style={[TYPOGRAPHY.caption, { marginTop: SPACING.sm, color: COLORS.success }]}>
              ✓ Vacunas Aplicadas ({registeredPet.appliedVaccines.length})
            </Text>
            {registeredPet.appliedVaccines.length === 0 ? (
              <Text style={TYPOGRAPHY.caption}>Ninguna vacuna marcada</Text>
            ) : (
              registeredPet.appliedVaccines.map((v: string, index: number) => (
                <View key={index} style={styles.vaccineRow}>
                  <Text style={TYPOGRAPHY.body}>• {v}</Text>
                  <View style={[styles.badge, styles.badgeOk]}>
                    <Text style={styles.textOk}>Al día</Text>
                  </View>
                </View>
              ))
            )}

            <Text style={[TYPOGRAPHY.caption, { marginTop: SPACING.md, color: COLORS.danger }]}>
              ⚠️ Vacunas Pendientes ({registeredPet.pendingVaccines.length})
            </Text>
            {registeredPet.pendingVaccines.map((v: any) => (
              <View key={v.id} style={styles.vaccineRow}>
                <Text style={TYPOGRAPHY.body}>• {v.name}</Text>
                <View style={[styles.badge, styles.badgePending]}>
                  <Text style={styles.textPending}>Pendiente</Text>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* 2. FORMULARIO DE REGISTRO */}
      {isFormOpen && (
        <Animated.View
          {...formPanResponder.panHandlers}
          style={[styles.fullOverlayScreen, { transform: [{ translateX: formTranslateX }] }]}
        >
          <View style={styles.topHeader}>
            <TouchableOpacity onPress={closeForm} style={styles.backBtn}>
              <Text style={styles.backBtnText}>‹ Cancelar</Text>
            </TouchableOpacity>
            <Text style={TYPOGRAPHY.h2}>Nueva Mascota</Text>
            <View style={{ width: 60 }} />
          </View>

          <ScrollView style={{ flex: 1, paddingHorizontal: SPACING.lg }} showsVerticalScrollIndicator={false}>
            <Text style={styles.inputLabel}>Nombre de la Mascota</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej. Pelusa, Rocky, Michi"
              value={petName}
              onChangeText={setPetName}
            />

            <Text style={styles.inputLabel}>Especie y Raza</Text>
            <TouchableOpacity style={styles.selectBreedButton} onPress={openCatalog} activeOpacity={0.7}>
              {selectedBreed ? (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={selectedBreed.image} style={styles.smallPreviewImage} />
                  <Text style={styles.selectBreedText}>{selectedBreed.name}</Text>
                </View>
              ) : (
                <Text style={styles.selectBreedText}>🔍 Elegir Raza y Especie</Text>
              )}
            </TouchableOpacity>

            <Text style={styles.inputLabel}>Edad</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej. 2 años"
              value={petAge}
              onChangeText={setPetAge}
            />

            <Text style={styles.inputLabel}>Vacunas Aplicadas Hasta Ahora</Text>
            {VACCINES_LIST.map((item) => {
              const isChecked = appliedVaccines.includes(item.name);
              return (
                <TouchableOpacity key={item.id} style={styles.checkRow} onPress={() => toggleVaccine(item.name)}>
                  <Text style={styles.checkText}>{isChecked ? '☑' : '⬜'} {item.name}</Text>
                </TouchableOpacity>
              );
            })}

            <TouchableOpacity style={styles.saveFullButton} onPress={handleSavePet}>
              <Text style={styles.saveFullText}>Guardar Mascota</Text>
            </TouchableOpacity>
          </ScrollView>
        </Animated.View>
      )}

      {/* 3. CATÁLOGO CON FOTO A PANTALLA COMPLETA Y NOMBRE SOBREPUESTO */}
      {isCatalogOpen && (
        <Animated.View
          {...catalogPanResponder.panHandlers}
          style={[styles.fullOverlayScreen, { transform: [{ translateX: catalogTranslateX }] }]}
        >
          <View style={styles.topHeader}>
            <TouchableOpacity onPress={closeCatalog} style={styles.backBtn}>
              <Text style={styles.backBtnText}>‹ Volver</Text>
            </TouchableOpacity>
            <Text style={TYPOGRAPHY.h2}>Catálogo de Mascotas</Text>
            <View style={{ width: 60 }} />
          </View>

          <View style={{ flex: 1, paddingHorizontal: SPACING.lg }}>
            <View style={styles.tabsRow}>
              <TouchableOpacity
                style={[styles.tabButton, species === 'dog' && styles.tabButtonActive]}
                onPress={() => setSpecies('dog')}
              >
                <Text style={[styles.tabText, species === 'dog' && styles.tabTextActive]}>🐶 Perros</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tabButton, species === 'cat' && styles.tabButtonActive]}
                onPress={() => setSpecies('cat')}
              >
                <Text style={[styles.tabText, species === 'cat' && styles.tabTextActive]}>🐱 Gatos</Text>
              </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.catalogGrid} showsVerticalScrollIndicator={false}>
              {(species === 'dog' ? DOG_BREEDS : CAT_BREEDS).map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={[styles.largeBreedCard, selectedBreed?.id === item.id && styles.largeBreedCardActive]}
                  onPress={() => {
                    setSelectedBreed(item);
                    closeCatalog();
                  }}
                  activeOpacity={0.85}
                >
                  {/* FOTO AGRANDADA DE BORDE A BORDE */}
                  <Image source={item.image} style={styles.fullCardImage} />

                  {/* NOMBRE SOBREPUESTO ABAJO CON PASTILLA */}
                  <View style={styles.overlayNameBadge}>
                    <Text style={styles.overlayNameText}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { padding: SPACING.lg, backgroundColor: COLORS.white },
  emptyCard: {
    backgroundColor: COLORS.white,
    margin: SPACING.lg,
    padding: SPACING.xl,
    borderRadius: 16,
    alignItems: 'center',
    ...SHADOWS.card,
  },
  emptySubtext: { textAlign: 'center', color: COLORS.neutralMedium, marginVertical: SPACING.md },
  petCard: {
    backgroundColor: COLORS.white,
    margin: SPACING.lg,
    padding: SPACING.lg,
    borderRadius: 16,
    alignItems: 'center',
    ...SHADOWS.card,
  },
  avatarContainer: { marginBottom: SPACING.sm },
  petAvatarImage: {
    width: 120,
    height: 120,
    borderRadius: 16,
    resizeMode: 'cover',
  },
  petName: { ...TYPOGRAPHY.h1, color: COLORS.neutralDark },
  petDetails: { ...TYPOGRAPHY.caption, color: COLORS.neutralMedium, marginBottom: SPACING.md },
  primaryButton: {
    width: '100%',
    height: 48,
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButtonText: { ...TYPOGRAPHY.h3, color: COLORS.white },
  secondaryButton: {
    width: '100%',
    height: 40,
    backgroundColor: COLORS.secondaryLight,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButtonText: { ...TYPOGRAPHY.body, color: COLORS.neutralDark, fontWeight: '600' },
  section: {
    backgroundColor: COLORS.white,
    marginHorizontal: SPACING.lg,
    padding: SPACING.lg,
    borderRadius: 16,
    marginBottom: SPACING.xl,
    ...SHADOWS.card,
  },
  vaccineRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SPACING.xs,
  },
  badge: { paddingHorizontal: SPACING.sm, paddingVertical: 2, borderRadius: 6 },
  badgeOk: { backgroundColor: '#E8F5E9' },
  badgePending: { backgroundColor: '#FFEBEE' },
  textOk: { ...TYPOGRAPHY.caption, color: COLORS.success, fontWeight: '700' },
  textPending: { ...TYPOGRAPHY.caption, color: COLORS.danger, fontWeight: '700' },

  fullOverlayScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.white,
    paddingTop: 50,
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.neutralLight,
    marginBottom: SPACING.md,
  },
  backBtn: {
    paddingVertical: SPACING.xs,
    paddingRight: SPACING.md,
  },
  backBtnText: {
    ...TYPOGRAPHY.h3,
    color: COLORS.primary,
    fontSize: 18,
  },
  inputLabel: { ...TYPOGRAPHY.caption, color: COLORS.neutralDark, marginTop: SPACING.md, marginBottom: 6 },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.neutralLight,
    borderRadius: 12,
    paddingHorizontal: SPACING.md,
    backgroundColor: COLORS.background,
    ...TYPOGRAPHY.body,
  },
  selectBreedButton: {
    height: 50,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    borderRadius: 12,
    backgroundColor: COLORS.secondaryLight,
    justifyContent: 'center',
    paddingHorizontal: SPACING.md,
  },
  selectBreedText: { ...TYPOGRAPHY.h3, color: COLORS.primary },
  smallPreviewImage: {
    width: 32,
    height: 32,
    borderRadius: 8,
    marginRight: 8,
  },
  checkRow: { paddingVertical: SPACING.sm },
  checkText: { ...TYPOGRAPHY.body, color: COLORS.neutralDark },
  saveFullButton: {
    height: 52,
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SPACING.xl,
    marginBottom: SPACING.xxl,
  },
  saveFullText: { ...TYPOGRAPHY.h2, color: COLORS.white },

  tabsRow: {
    flexDirection: 'row',
    marginBottom: SPACING.md,
  },
  tabButton: {
    flex: 1,
    height: 44,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 4,
  },
  tabButtonActive: { backgroundColor: COLORS.primary },
  tabText: { ...TYPOGRAPHY.h3, color: COLORS.neutralDark },
  tabTextActive: { color: COLORS.white },
  catalogGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: SPACING.xxl,
  },
  
  // TARJETA AGRANDADA CON FOTO DE BORDE A BORDE
  largeBreedCard: {
    width: CARD_WIDTH,
    height: 190,
    borderRadius: 20,
    marginBottom: SPACING.md,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: COLORS.background,
    ...SHADOWS.card,
  },
  largeBreedCardActive: {
    borderWidth: 3,
    borderColor: COLORS.primary,
  },
  fullCardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // La foto se expande completa para llenar la tarjeta
  },
  overlayNameBadge: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  overlayNameText: {
    ...TYPOGRAPHY.caption,
    color: COLORS.neutralDark,
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 12,
  },
});