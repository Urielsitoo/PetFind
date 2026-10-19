// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY, SHADOWS } from '../config/theme';

export const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Superior */}
      <View style={styles.header}>
        <View style={styles.logoRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeIcon}>🐾</Text>
          </View>
          <Text style={styles.headerTitle}>PetFind</Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* Secciones de Historias / Momentos estilo Facebook */}
      <View style={styles.storiesContainer}>
        <Text style={styles.sectionTitle}>Historias de Mascotas</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesList}>
          {/* Tu historia */}
          <View style={styles.storyCardItem}>
            <View style={[styles.storyAvatar, { backgroundColor: COLORS.primary }]}>
              <Text style={{ fontSize: 20 }}>+</Text>
            </View>
            <Text style={styles.storyName}>Mi Historia</Text>
          </View>
          
          {/* Historias de la comunidad */}
          {['Firulais 🐶', 'Michi 🐱', 'Rocky 🐕', 'Luna 🐈'].map((item, index) => (
            <View key={index} style={styles.storyCardItem}>
              <View style={styles.storyAvatar}>
                <Text style={{ fontSize: 20 }}>🐾</Text>
              </View>
              <Text style={styles.storyName}>{item}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Tarjeta de Mapa Compacto (Mascotas Perdidas) */}
      <View style={styles.mapCard}>
        <View style={styles.mapHeader}>
          <Text style={styles.mapTitle}>🚨 Alerta de Pérdidas Cercanas</Text>
          <Text style={styles.mapBadge}>2 activas</Text>
        </View>
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>🗺️ Visor de Mapa Interactivo</Text>
          <Text style={styles.mapSubtext}>Camargo, Tamps. • A 1.2 km de ti</Text>
        </View>
        {/* BOTÓN PRIORITARIO CÁLIDO */}
        <TouchableOpacity style={styles.reportButton}>
          <Text style={styles.reportButtonText}>+ Crear Reporte de Emergencia</Text>
        </TouchableOpacity>
      </View>

      {/* Publicación Social 1 (Perro Mestizo) */}
      <View style={styles.postCard}>
        <View style={styles.postHeader}>
          <View style={styles.userAvatar}>
            <Text style={{ fontSize: 18 }}>👤</Text>
          </View>
          <View style={{ flex: 1, marginLeft: SPACING.sm }}>
            <Text style={styles.userName}>Carlos Mendoza</Text>
            <Text style={styles.postTime}>Hace 15 min • Mestizo / Criollo</Text>
          </View>
        </View>
        
        <Text style={styles.postContent}>
          ¡Encontré a este perrito cerca del parque! Es súper juguetón y trae collar café. ¿Alguien lo reconoce? 🐶
        </Text>
        
        <View style={styles.postImagePlaceholder}>
          <Text style={{ fontSize: 48 }}>🐕</Text>
          <Text style={styles.imageTag}>Perrito Mestizo (3D Toy)</Text>
        </View>

        <View style={styles.postActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>❤️ Me gusta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>💬 Comentar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>🔗 Compartir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    backgroundColor: COLORS.white,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: COLORS.neutralDark,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.sm,
  },
  badgeIcon: {
    fontSize: 18,
  },
  headerTitle: {
    ...TYPOGRAPHY.h1,
    color: COLORS.neutralDark,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 18,
  },
  storiesContainer: {
    backgroundColor: COLORS.white,
    paddingVertical: SPACING.md,
    marginBottom: SPACING.sm,
  },
  sectionTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.neutralDark,
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.sm,
  },
  storiesList: {
    paddingLeft: SPACING.lg,
  },
  storyCardItem: {
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  storyAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.secondaryLight,
    borderWidth: 2,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  storyName: {
    ...TYPOGRAPHY.caption,
    color: COLORS.neutralDark,
  },
  mapCard: {
    backgroundColor: COLORS.white,
    marginHorizontal: SPACING.lg,
    marginVertical: SPACING.sm,
    borderRadius: 16,
    padding: SPACING.md,
    ...SHADOWS.card,
  },
  mapHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  mapTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.neutralDark,
  },
  mapBadge: {
    ...TYPOGRAPHY.caption,
    color: COLORS.white,
    backgroundColor: COLORS.danger,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 2,
    borderRadius: 8,
  },
  mapPlaceholder: {
    height: 100,
    backgroundColor: COLORS.secondaryLight,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  mapText: {
    ...TYPOGRAPHY.h3,
    color: COLORS.primary,
  },
  mapSubtext: {
    ...TYPOGRAPHY.caption,
    color: COLORS.neutralMedium,
  },
  reportButton: {
    height: 44,
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reportButtonText: {
    ...TYPOGRAPHY.h3,
    color: COLORS.white,
  },
  postCard: {
    backgroundColor: COLORS.white,
    marginHorizontal: SPACING.lg,
    marginVertical: SPACING.sm,
    borderRadius: 16,
    padding: SPACING.md,
    ...SHADOWS.card,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.neutralLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    ...TYPOGRAPHY.h3,
    color: COLORS.neutralDark,
  },
  postTime: {
    ...TYPOGRAPHY.caption,
    color: COLORS.neutralMedium,
  },
  postContent: {
    ...TYPOGRAPHY.body,
    color: COLORS.neutralDark,
    marginBottom: SPACING.md,
  },
  postImagePlaceholder: {
    height: 180,
    backgroundColor: '#FAF5EE',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  imageTag: {
    ...TYPOGRAPHY.caption,
    color: COLORS.neutralMedium,
    marginTop: SPACING.xs,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: COLORS.neutralLight,
    paddingTop: SPACING.sm,
  },
  actionButton: {
    paddingVertical: SPACING.xs,
  },
  actionText: {
    ...TYPOGRAPHY.caption,
    color: COLORS.neutralMedium,
  },
});