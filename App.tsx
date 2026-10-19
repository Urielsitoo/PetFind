import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Switch,
  Modal,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Paleta de colores para el timer automático de 5 segundos
const PALETTE_COLORS = [
  '#C2A649',
  '#2196F3',
  '#E53935',
  '#FFEB3B',
  '#9C27B0',
  '#4CAF50',
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'demo'>('welcome');
  
  // SWITCH: Cambia entre estilo iOS (Cupertino) y Android (Material)
  const [isAndroidMode, setIsAndroidMode] = useState(false);

  // Estados del texto y temporizador
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('Texto de ejemplo');
  const [colorIndex, setColorIndex] = useState(0);

  // Estados para las alertas modales
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // TIMER: Cambia el color del borde cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % PALETTE_COLORS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentColor = PALETTE_COLORS[colorIndex];

  const handlePressSubmit = () => {
    if (inputText.trim() !== '') {
      setDisplayText(inputText);
      setModalMessage(`Texto procesado: "${inputText}"`);
      setModalVisible(true);
    }
  };

  const toggleSwitch = (value: boolean) => {
    setIsAndroidMode(value);
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF8DF" />
      <SafeAreaView style={styles.container}>
        
        {currentScreen === 'welcome' ? (
          /* ================= PANTALLA 1: BIENVENIDA ================= */
          <View style={styles.screenWrapper}>
            <Text style={styles.welcomeTitle}>Hola PetFind</Text>
            <View style={styles.imageContainer}>
              <Image
                source={require('./assets/logo.jpeg')}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.welcomeSubtitle}>Mi App</Text>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => setCurrentScreen('demo')}
            >
              <Text style={styles.primaryButtonText}>Continuar →</Text>
            </TouchableOpacity>
          </View>
        ) : (

          /* ================= PANTALLA 2: PRÁCTICA ================= */
          <View style={styles.screenWrapper}>
            
            {/* SWITCH SUPERIOR (Sin emojis) */}
            <View style={styles.topSwitchContainer}>
              <Text style={styles.switchLabelText}>
                {isAndroidMode ? "Modo Android" : "Modo iOS"}
              </Text>
              <Switch
                trackColor={{ false: '#767577', true: '#3D3425' }}
                thumbColor={isAndroidMode ? '#C2A649' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isAndroidMode}
              />
            </View>

            {/* Título original */}
            <Text style={styles.title}>Hola PetFind</Text>

            {/* STACK: Imagen superpuesta sobre el logo */}
            <View style={styles.imageContainerSmall}>
              <Image
                source={require('./assets/logo.jpeg')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Image
                source={{ uri: 'https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif' }}
                style={styles.stackedOverlayImage}
                resizeMode="cover"
              />
            </View>

            {/* INPUT ADAPTATIVO: Mantiene el texto "Escribe algo aquí..." idéntico */}
            <View style={styles.inputRow}>
              <TextInput
                style={[
                  styles.input,
                  isAndroidMode ? styles.androidInput : styles.iosInput,
                  { borderColor: currentColor }
                ]}
                placeholder="Escribe algo aquí..."
                placeholderTextColor="#8C8275"
                value={inputText}
                onChangeText={setInputText}
              />
              <TouchableOpacity
                style={[
                  styles.buttonSubmit,
                  isAndroidMode ? styles.androidButton : styles.iosButton
                ]}
                onPress={handlePressSubmit}
              >
                <Text style={styles.buttonText}>✓</Text>
              </TouchableOpacity>
            </View>

            {/* TARJETA DE RESULTADO con timer de 5s */}
            <View style={[styles.resultCard, { borderLeftColor: currentColor }]}>
              <Text style={[styles.resultText, isAndroidMode ? styles.androidTextFont : styles.iosTextFont]}>
                {displayText}
              </Text>
              <Text style={styles.modeSubText}>
                Estilo activo: {isAndroidMode ? "Android" : "iOS"}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setCurrentScreen('welcome')}
            >
              <Text style={styles.backButtonText}>← Volver a Bienvenida</Text>
            </TouchableOpacity>

            {/* MODAL DE ALERTA NATIVA */}
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.modalOverlay}>
                {!isAndroidMode ? (
                  /* ALERTA iOS CUPERTINO */
                  <View style={styles.iosAlertBox}>
                    <Text style={styles.iosAlertTitle}>Alerta Cupertino (iOS)</Text>
                    <Text style={styles.iosAlertMessage}>{modalMessage}</Text>
                    <TouchableOpacity
                      style={styles.iosAlertButton}
                      onPress={() => setModalVisible(false)}
                    >
                      <Text style={styles.iosAlertButtonText}>OK</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  /* ALERTA ANDROID MATERIAL */
                  <View style={styles.androidAlertBox}>
                    <Text style={styles.androidAlertTitle}>Alerta Android (Material)</Text>
                    <Text style={styles.androidAlertMessage}>{modalMessage}</Text>
                    <View style={styles.androidAlertActions}>
                      <TouchableOpacity
                        style={styles.androidAlertButton}
                        onPress={() => setModalVisible(false)}
                      >
                        <Text style={styles.androidAlertButtonText}>ACEPTAR</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </View>
            </Modal>

          </View>
        )}

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DF',
  },
  screenWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  welcomeTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#3D3425',
    marginBottom: 20,
    textAlign: 'center',
  },
  welcomeSubtitle: {
    fontSize: 26,
    fontWeight: '600',
    color: '#3D3425',
    marginTop: 15,
    marginBottom: 40,
    textAlign: 'center',
  },
  primaryButton: {
    width: '100%',
    height: 55,
    backgroundColor: '#3D3425',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  primaryButtonText: {
    color: '#FFF8DF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  topSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E8DFCE',
    elevation: 2,
  },
  switchLabelText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#3D3425',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3D3425',
    textAlign: 'center',
    marginBottom: 10,
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    elevation: 6,
  },
  imageContainerSmall: {
    width: 120,
    height: 120,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    elevation: 4,
    position: 'relative',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  stackedOverlayImage: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 35,
    height: 35,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    borderWidth: 2,
    fontSize: 15,
    color: '#3D3425',
    marginRight: 10,
  },
  iosInput: {
    borderRadius: 25,
    backgroundColor: '#FBF9F4',
  },
  androidInput: {
    borderRadius: 4,
    backgroundColor: '#F5F5F5',
  },
  buttonSubmit: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  iosButton: {
    backgroundColor: '#007AFF',
    borderRadius: 25,
  },
  androidButton: {
    backgroundColor: '#3D3425',
    borderRadius: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultCard: {
    width: '100%',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderLeftWidth: 8,
    alignItems: 'center',
    elevation: 6,
    marginBottom: 15,
  },
  resultText: {
    fontSize: 20,
    color: '#3D3425',
    textAlign: 'center',
  },
  iosTextFont: {
    fontWeight: '600',
  },
  androidTextFont: {
    fontWeight: '400',
  },
  modeSubText: {
    fontSize: 11,
    color: '#757575',
    marginTop: 4,
  },
  backButton: {
    paddingVertical: 8,
  },
  backButtonText: {
    color: '#C2A649',
    fontSize: 15,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iosAlertBox: {
    width: '78%',
    backgroundColor: '#F2F2F7',
    borderRadius: 14,
    paddingTop: 20,
    alignItems: 'center',
    overflow: 'hidden',
    elevation: 8,
  },
  iosAlertTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 6,
    textAlign: 'center',
  },
  iosAlertMessage: {
    fontSize: 14,
    color: '#3A3A3C',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 15,
  },
  iosAlertButton: {
    width: '100%',
    paddingVertical: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#C6C6C8',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  iosAlertButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#007AFF',
  },
  androidAlertBox: {
    width: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    padding: 24,
    elevation: 24,
  },
  androidAlertTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#212121',
    marginBottom: 10,
  },
  androidAlertMessage: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 24,
  },
  androidAlertActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  androidAlertButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  androidAlertButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#3D3425',
    letterSpacing: 1,
  },
});