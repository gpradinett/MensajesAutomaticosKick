# 🤖 Kick AutoChatBot

Este script permite enviar mensajes automáticos de forma periódica en los chats de Kick.com, ideal para interactuar con tu audiencia durante un stream. También permite personalizar mensajes y aprovechar comandos de voz como `!Jacinta` para activar el TTS (texto a voz) del canal.

---

### 👤 Autor
**Fernando Gonzales P.**

---

## ✨ ¿Qué hace este bot?

- ✅ Envío de mensajes automáticos al chat de Kick.
- 🔄 Mensajes aleatorios desde una lista predefinida.
- ⏱ Intervalos aleatorios entre 25 y 80 segundos (ajustable).
- 🎤 Compatible con TTS mediante comandos como `!Jacinta`.
- 💬 Emula comportamiento humano (escritura + enter).

---

## 📦 Contenido

El proyecto incluye **dos scripts**:

| Versión             | Archivo                           | Autor                    | Descripción                                                                 |
|---------------------|-----------------------------------|--------------------------|-----------------------------------------------------------------------------|
| 🟢 Versión Simple    | `kick-autochat-original.user.js` | Fernando Gonzales P.     | Versión básica y funcional para pruebas rápidas.                           |
| 🟢 Versión Mejorada  | `kick-autochat-optimizado.user.js` | Fernando Gonzales P.     | Incluye mejoras de compatibilidad, código más limpio y mensajes personalizables. |

---

## 🧠 Requisitos

- ✅ [Tampermonkey](https://www.tampermonkey.net/) (o Violentmonkey) instalado en tu navegador.
- ✅ Cuenta logueada en [https://kick.com](https://kick.com).
- 🚫 No se recomienda abusar del bot para evitar restricciones por spam.

---

## 📦 Instalación

1. Instala **Tampermonkey** desde la [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).
2. Haz clic en el botón `+` para crear un nuevo **User Script**.
3. Copia y pega todo el código del bot dentro del editor.
4. Guarda el script (Ctrl + S).
5. Asegúrate de estar dentro de un canal con chat habilitado en Kick.com.
6. ¡Listo! El bot comenzará a enviar mensajes cada cierto tiempo.

---

## ✏️ Personalización

### 📬 Editar los mensajes

Dentro del script, busca esta parte:

```javascript
let messages = [
    "¡Aguante chillin!",
    "Exploten el chat malditosssss !!!",
    "Denle follow al canal y activen notificaciones 🔔",
    ...
];
```
### Puedes agregar, eliminar o editar los mensajes según tu estilo, por ejemplo:

```javascript
let messages = [
    "!Jacinta Este stream está más prendido que mi cocina de leña 🔥",
    "!Jacinta Yo pensaba que Kick era una bebida, y aquí estoy hablando sola 🤪",
    "¡Sigan al canal y activen la campanita, mis amores! 🔔",
];
```

### ⏱ Cambiar intervalo de tiempo
#### El envío automático de mensajes se controla en esta parte:

```javascript
let interval = getRandomInt(25000, 80000); // entre 25 y 80 segundos
```

Puedes reducir el tiempo así (ejemplo, entre 5 y 10 segundos):

```javascript
let interval = getRandomInt(5000, 10000);
```

##### ⚠️ Advertencia: No reduzcas el tiempo demasiado. Si envías mensajes demasiado rápido, Kick podría bloquearlos o silenciarte.

### 🧠 Notas
###### Recomendado para entretenimiento y pruebas. No se recomienda abusar de los mensajes automáticos.
######Compatible con todos los canales de Kick, siempre que el chat esté habilitado.

### 📜 Licencia
###### MIT License. Uso libre y gratuito, pero el autor no se hace responsable por mal uso del script.

### ❤️ Agradecimientos
###### Este script está basado en ideas comunitarias y adaptado para usarse en Kick. Desarrollado y mantenido por:
###### Fernando Gonzales P.


