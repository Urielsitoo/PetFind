// src/config/theme.ts

export const COLORS = {
  // Marca
  primary: '#8B5A2B',       // Café Terracota (Acción principal / Botón prioritario)
  primaryPressed: '#6F4620',// Estado presionado
  secondary: '#E0CDA3',     // Caqui Arena (Acción secundaria / Acentos)
  secondaryLight: '#F4EFE6',// Fondo suave de tarjetas
  
  // Neutros
  neutralDark: '#1A1A1A',   // Negro Mate (Encabezados y texto principal)
  neutralMedium: '#6E6E73', // Gris Medio (Texto secundario / Placeholders)
  neutralLight: '#E5E5EA',  // Gris Claro (Bordes y divisores)
  background: '#F8F9FA',    // Blanco Humo (Fondo general de la app)
  white: '#FFFFFF',         // Blanco Puro

  // Semánticos (Estados)
  danger: '#D9534F',        // Rojo (Mascotas perdidas / Alertas)
  success: '#28A745',       // Verde (Encontrados / Estado activo)
  warning: '#FFC107',       // Amarillo
};

export const SPACING = {
  xs: 4,   // Badges / Ajustes mínimos
  sm: 8,   // Gaps y separación de texto
  md: 12,  // Margen interno de tarjetas
  lg: 16,  // Padding lateral estándar de pantallas (iOS/Android)
  xl: 24,  // Separador de secciones
  xxl: 32, // Hero / Modales
};

export const TYPOGRAPHY = {
  title: { fontSize: 32, fontWeight: '700' as const },
  h1: { fontSize: 24, fontWeight: '700' as const },
  h2: { fontSize: 18, fontWeight: '600' as const },
  h3: { fontSize: 16, fontWeight: '600' as const },
  body: { fontSize: 14, fontWeight: '400' as const },
  caption: { fontSize: 12, fontWeight: '500' as const },
};

export const SHADOWS = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3, // Sombras nativas para Android
  },
};