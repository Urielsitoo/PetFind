# 🐾 PetFind - Mi Aplicación Móvil de Adopción y Reporte de Mascotas

> **Proyecto Universitario / Aplicaciones Móviles**  
> **Alumno / Desarrollador:** Uriel (`Urielsitoo`)  
> **Repositorio Oficial:** [Urielsitoo/PetFind](https://github.com/Urielsitoo/PetFind)

---

## 📱 ¿De qué trata mi proyecto?
**PetFind** es una aplicación móvil que estoy desarrollando con **React Native**, **Expo** y **Firebase**. El objetivo principal es ayudar a la comunidad a reportar y encontrar mascotas perdidas, gestionar adopciones de forma sencilla, llevar un carnet de vacunación digital para las mascotas y contar con perfiles de usuario personalizados.

---

## 🛠️ Stack Tecnológico y Arquitectura que Utilicé
- **Framework:** React Native con Expo SDK.
- **Navegación:** React Navigation (Bottom Tabs & Native Stack / navegación por estado para fluidez).
- **Backend / Autenticación:** Firebase Authentication (correo/contraseña y logins sociales).
- **Diseño / Identidad Visual:** Definí una paleta de colores propia para darle identidad corporativa (*Fondo Crema #FFF8DF, Café Tierra #3D3425, Caqui #C2A649*).
- **Estructura:** Organicé el código de forma modular en la carpeta `src/` (`components/`, `navigation/`, `screens/`, `config/`, `services/`).

---

## 🌿 Mi Estrategia de Ramas (Git Branching)
Para trabajar de manera ordenada y seguir buenas prácticas de control de versiones, dividí mi desarrollo en ramas:
- `master` / `maestro`: Mi rama principal con el código estable listo para producción y entregas.
- `feature/adopcion`: La rama de trabajo donde desarrollé y probé los módulos de adopción, carnet virtual y flujos de autenticación.

---

## 📌 Mis Commits Granulares (Convención)
En lugar de subir todo en un solo cambio, organicé mis avances con mensajes descriptivos:
- `feat:` Para la integración de nuevas pantallas y la navegación principal (`SplashScreen`, `LoginScreen`, `RegisterScreen` y las 5 pestañas).
- `fix:` Para corregir errores de importaciones y ajustar tipos de exportación de mis componentes.
- `chore:` Para limpiar archivos de prácticas previas y mantener el repositorio impecable (`DemoProfeScreen.tsx`).
- `docs:` Para actualizar la bitácora de mi proyecto y el README.

---

## 🏷️ Historial de Versiones y Releases
- **`v0.1.0-alpha`**: Inicialización de mi repositorio local/remoto y estructura base de Expo.
- **`v0.2.0-beta`**: Configuración inicial de pestañas e interfaz gráfica.
- **`v1.0.0-rc`** *(Versión Actual)*: Flujo de autenticación completo con Firebase, carnet de vacunación en *Mi Compañero*, catálogo de razas/especies y navegación de 5 pestañas pulida.

---

## 📝 Mi Bitácora de Progreso (Changelog)

| Fecha / Versión | Rama | Descripción de mis Avances y Cambios Realizados |
| :--- | :--- | :--- |
| **2026-10-20** (`v1.0.0-rc`) | `feature/adopcion` | Conecté el flujo inicial completo (`SplashScreen` ➔ `LoginScreen` / `RegisterScreen` ➔ Navegador de 5 pestañas). Eliminé archivos de pruebas anteriores (`DemoProfeScreen`) y dejé lista la estructura modular en `src/`. |
| **2026-10-15** (`v0.2.0-beta`) | `feature/adopcion` | Diseñé la pantalla de `CompanionScreen` agregando el carnet interactivo de vacunas y el catálogo de perros/gatos. Armé el navegador inferior `AppNavigator.tsx`. |
| **2026-10-10** (`v0.1.0-alpha`) | `master` | Creé mi repositorio en GitHub (`Urielsitoo/PetFind`), estructuré las carpetas en `src/` y configuré la paleta de colores del tema en `theme.ts`. |

---

## 🚀 Cómo Ejecutar Mi Proyecto
1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/Urielsitoo/PetFind.git](https://github.com/Urielsitoo/PetFind.git)
   cd PetFind