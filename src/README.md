# 🐾 PetFind - Aplicación Móvil de Adopción y Reporte de Mascotas

> **Proyecto Universitario / Desarrollo Móvil**  
> **Repositorio Oficial:** [Urielsitoo/PetFind](https://github.com/Urielsitoo/PetFind)

---

## 📱 Descripción del Proyecto
**PetFind** es una aplicación móvil desarrollada en **React Native** con **Expo** y **Firebase**, diseñada para conectar a la comunidad en la búsqueda de mascotas perdidas, gestión de adopciones, carnet de vacunación virtual y perfil de usuario.

---

## 🛠️ Stack Tecnológico y Arquitectura
- **Framework:** React Native con Expo SDK.
- **Navegación:** React Navigation (Bottom Tabs & Native Stack).
- **Backend / Auth:** Firebase Authentication.
- **Diseño / Identidad:** Paleta corporativa institucional (*Crema #FFF8DF, Café Tierra #3D3425, Caqui #C2A649*).
- **Arquitectura:** Modular en `src/` (`components/`, `navigation/`, `screens/`, `config/`, `services/`).

---

## 🌿 Estrategia de Ramas (Git Branching Strategy)
El proyecto implementa un flujo de trabajo profesional por características:
- `main` / `master`: Rama principal de producción y entregas estables.
- `feature/adopcion`: Rama de desarrollo para el módulo de adopciones, carnet digital y flujos de autenticación.

---

## 📌 Guía de Commits Granulares (Conventional Commits)
- `feat:` Integración de navegación principal y flujo de autenticación (`LoginScreen` y `RegisterScreen`).
- `fix:` Corrección de importaciones y resolución de dependencias.
- `chore:` Eliminación de archivos temporales de prácticas anteriores (`DemoProfeScreen.tsx`).
- `docs:` Actualización de bitácora y documentación del proyecto.

---

## 🏷️ Historial de Versiones (Tags & Releases)
- **`v0.1.0-alpha`**: Inicialización del repositorio y estructura base en Expo.
- **`v0.2.0-beta`**: Configuración del sistema de navegación por pestañas y pantallas principales.
- **`v1.0.0-rc`** *(Actual)*: Módulo de autenticación completo, carnet de vacunación y limpieza de código base para entrega.

---

## 📝 Bitácora de Progreso (Changelog para el Profesor)

| Fecha / Versión | Rama | Descripción del Cambio / Hito Académico |
| :--- | :--- | :--- |
| **2026-10-20** (`v1.0.0-rc`) | `feature/adopcion` | Integración final del flujo completo (Splash ➔ Login / Register ➔ 5 Tabs principales), limpieza de pantallas de práctica (`DemoProfeScreen`) y conexión con Firebase Auth. |
| **2026-10-15** (`v0.2.0-beta`) | `feature/adopcion` | Implementación del navegador inferior (`AppNavigator`), diseño de `CompanionScreen` con carnet de vacunas interactivo y vistas de `AdoptionScreen` y `MapScreen`. |
| **2026-10-10** (`v0.1.0-alpha`) | `master` | Configuración inicial del repositorio local y remoto en GitHub (`Urielsitoo/PetFind`), definición de paleta de colores corporativa y estructura de carpetas en `src/`. |

---

## 🚀 Instrucciones de Instalación y Ejecución
1. Clona el repositorio:
   ```bash
   git clone [https://github.com/Urielsitoo/PetFind.git](https://github.com/Urielsitoo/PetFind.git)
   cd PetFind