import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mi Perfil 👤</Text>
        <Text style={styles.subtitle}>Configuración y tus publicaciones</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Usuario Activo</Text>
        <Text style={styles.cardText}>Aquí podrás iniciar sesión con Firebase Auth.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F7', paddingHorizontal: 16 },
  header: { marginTop: 15, marginBottom: 15 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#000' },
  subtitle: { fontSize: 15, color: '#8E8E93', marginTop: 2 },
  card: { backgroundColor: '#FFF', borderRadius: 16, padding: 20, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8, elevation: 2 },
  cardTitle: { fontSize: 18, fontWeight: '600', marginBottom: 6, color: '#1C1C1E' },
  cardText: { fontSize: 14, color: '#3C3C43' },
});