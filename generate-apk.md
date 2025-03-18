# Generación de APK en React Native CLI

Sigue estos pasos para generar un archivo APK de tu aplicación React Native:

## Requisitos previos
- Proyecto React Native configurado
- JDK (Java Development Kit) instalado
- Android SDK instalado y configurado
- Archivo keystore generado para firma (para versión release)

## Pasos para generar el APK

### PASO 1: Ubicarse en la raíz del proyecto
Abre una terminal y asegúrate de estar en el directorio raíz de tu proyecto React Native.

```bash
cd ruta/a/tu/proyecto-react-native
```

### PASO 2: Ingresar a la carpeta Android
Navega al directorio Android de tu proyecto.

```bash
cd android
```

### PASO 3: Limpiar el proyecto
Ejecuta el comando clean para eliminar compilaciones anteriores.

```bash
./gradlew clean
```

### PASO 4: Generar el APK de release
Ejecuta el comando para generar el APK firmado.

```bash
./gradlew assembleRelease
```

## Localización del APK generado

Una vez completado el proceso, el archivo APK se encontrará en la siguiente ruta:

```
android/app/build/outputs/apk/release/app-release.apk
```

