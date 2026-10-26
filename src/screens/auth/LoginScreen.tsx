import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../config/firebase';

export const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Manejar Inicio de Sesión (Bypass temporal para práctica + Firebase real)
  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Campos incompletos', 'Por favor ingresa tu correo y contraseña.');
      return;
    }

    // 1. Validar credenciales de la práctica académica
    if (email.trim() === 'Administrador' && password === 'Uriel123') {
      Alert.alert('¡Bienvenido!', 'Acceso de administrador concedido.', [
        {
          text: 'Continuar',
          onPress: () => {
            navigation.replace('MainApp');
          },
        },
      ]);
      return;
    }

    // 2. Si no son las de práctica, ejecuta el login normal de Firebase
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
    } catch (error: any) {
      let message = 'Ocurrió un error al iniciar sesión.';
      if (
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/wrong-password' ||
        error.code === 'auth/invalid-credential'
      ) {
        message = 'Correo o contraseña incorrectos.';
      } else if (error.code === 'auth/invalid-email') {
        message = 'El formato del correo no es válido.';
      }
      Alert.alert('Error', message);
    } finally {
      setLoading(false);
    }
  };

  // Manejar Olvidé mi contraseña
  const handleForgotPassword = async () => {
    if (!email.trim()) {
      Alert.alert(
        'Correo requerido',
        'Ingresa tu correo en el campo para enviarte el enlace de recuperación.'
      );
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email.trim());
      Alert.alert(
        'Correo enviado',
        'Te hemos enviado un enlace a tu correo para restablecer tu contraseña.'
      );
    } catch (error: any) {
      Alert.alert(
        'Error',
        'No se pudo enviar el correo de recuperación. Verifica que esté bien escrito.'
      );
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        {/* Encabezado con Logo oficial (logo.jpeg) y recorte de esquinas blancas */}
        <View style={styles.header}>
          <View style={styles.logoClipContainer}>
            <Image
              source={require('../../../assets/logo.jpeg')}
              style={styles.logoImage}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.title}>PetFind</Text>
          <Text style={styles.subtitle}>Inicia sesión para cuidar a tu compañero</Text>
        </View>

        {/* Formulario */}
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Correo Electrónico o Usuario</Text>
            <TextInput
              style={styles.input}
              placeholder="tu@correo.com o Administrador"
              placeholderTextColor="#A09382"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor="#A09382"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotButton}>
            <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          {/* Botón Principal: Café Tierra Oscuro (#3D3425) */}
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFF8DF" />
            ) : (
              <Text style={styles.primaryButtonText}>Iniciar Sesión</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Sección de Proveedores con Íconos Oficiales (Google, Facebook, GitHub) */}
        <View style={styles.socialSection}>
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>O continúa con</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialButtonsRow}>
            {/* Botón Google */}
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => Alert.alert('Google Auth', 'Iniciando sesión con Google...')}
            >
              <AntDesign name="google" size={18} color="#EA4335" />
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>

            {/* Botón Facebook */}
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => Alert.alert('Facebook Auth', 'Iniciando sesión con Facebook...')}
            >
              <FontAwesome name="facebook" size={18} color="#1877F2" />
              <Text style={styles.socialButtonText}>Facebook</Text>
            </TouchableOpacity>

            {/* Botón GitHub */}
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => Alert.alert('GitHub Auth', 'Iniciando sesión con GitHub...')}
            >
              <FontAwesome name="github" size={18} color="#24292E" />
              <Text style={styles.socialButtonText}>GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Enlace a Registro */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>¿No tienes cuenta? </Text>
          <TouchableOpacity onPress={() => navigation?.navigate('Register')}>
            <Text style={styles.registerLink}>Regístrate aquí</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DF', // Fondo crema unificado
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 20,
    alignItems: 'center',
  },
  logoClipContainer: {
    width: 110,
    height: 110,
    borderRadius: 24,
    overflow: 'hidden', // Recorta las esquinas blancas externas de la imagen
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  logoImage: {
    width: '122%',
    height: '122%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3D3425',
  },
  subtitle: {
    fontSize: 14,
    color: '#6E6252',
    marginTop: 4,
    textAlign: 'center',
  },
  form: {
    gap: 14,
    marginVertical: 16,
  },
  inputContainer: {
    gap: 6,
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#3D3425',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#E8DFCE',
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    fontSize: 15,
    color: '#3D3425',
  },
  forgotButton: {
    alignSelf: 'flex-end',
  },
  forgotText: {
    fontSize: 13,
    color: '#C2A649', // Caqui secundario
    fontWeight: '600',
  },
  primaryButton: {
    height: 52,
    backgroundColor: '#3D3425', // Café Tierra Oscuro (Botón principal)
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#3D3425',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  primaryButtonText: {
    color: '#FFF8DF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialSection: {
    marginVertical: 10,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 14,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E8DFCE',
  },
  dividerText: {
    marginHorizontal: 12,
    fontSize: 12,
    color: '#8C8275',
    fontWeight: '500',
  },
  socialButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    height: 44,
    borderWidth: 1,
    borderColor: '#E8DFCE',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  socialButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#3D3425',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#6E6252',
  },
  registerLink: {
    fontSize: 14,
    color: '#C2A649', // Caqui destacado
    fontWeight: 'bold',
  },
});