import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';

export function DemoProfeScreen() {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('Texto de ejemplo');

  const handlePress = () => {
    if (inputText.trim() !== '') {
      setDisplayText(inputText);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Título Superior */}
      <Text style={styles.title}>Hola PetFind</Text>

      {/* 2. Logo / Imagen Central */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/logo.jpeg')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* 3. Input y Botón de Entrada */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Escribe algo aquí..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>✓</Text>
        </TouchableOpacity>
      </View>

      {/* 4. Texto Renderizado con Estilos y Sombra abajo */}
      <View style={styles.resultCard}>
        <Text style={styles.resultText}>{displayText}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DF', // Paleta Crema
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3D3425',
    marginBottom: 20,
  },
  imageContainer: {
    width: 180,
    height: 180,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 25,
    backgroundColor: '#FFFFFF',
    // Estilos de sombra
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 6,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 15,
    borderColor: '#C2A649',
    borderWidth: 1.5,
    fontSize: 16,
    color: '#3D3425',
    marginRight: 10,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#3D3425',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#FFF8DF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  resultCard: {
    width: '100%',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderLeftWidth: 6,
    borderLeftColor: '#C2A649',
    alignItems: 'center',
    // Sombras decorativas para que resalte
    shadowColor: '#3D3425',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  resultText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#3D3425',
    textAlign: 'center',
  },
});