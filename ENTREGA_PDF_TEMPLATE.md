# Práctica Integradora 1 - TV Hub V4
## Reporte de Implementación

---

## 📍 Repositorio Público

**URL:** `[AQUI VA TU URL DE GITHUB]`

Ejemplo: `https://github.com/tuusuario/tv-hub-v5-base`

**Instrucción para tomar screenshot:** 
- Abre GitHub en tu navegador
- Copia la URL de tu repositorio público
- Toma una captura de la página principal del repo

---

## Ejercicio 1: La Ruta (Route)

### ¿Qué es una Route?

La ruta es como la puerta de entrada. Cuando alguien desde el navegador pide un canal, la ruta es la que recibe esa solicitud y decide a quién pasársela para que la resuelva.

### Lo que hicimos

Conectamos la ruta `GET /api/channels/:id` con el controlador que busca un canal en la base de datos.

### 📸 Screenshot 1: El código de la Ruta

**Archivo:** `src/routes/channel.routes.ts`

```typescript
channelRouter.get('/', listChannels);
channelRouter.get('/:id', getChannel);
```

**Cómo tocar el screenshot:**
1. Abre VS Code
2. Navega a `src/routes/channel.routes.ts`
3. Selecciona las líneas 15-16 (las que dicen `get('/', ...)` y `get('/:id', ...)`)
4. Toma una captura
5. Pégala aquí en el PDF

**✓ Qué deberías ver:** El código debe mostrar que `getChannel` está conectado a `/:id`

---

### 📸 Screenshot 2: Evidencia de que funciona

**Cómo verificar que la ruta funciona:**
1. Abre el navegador en `http://localhost:3000/home.html`
2. Haz login
3. Haz clic en cualquier canal
4. Se abrirá `watch.html` con el canal seleccionado
5. Abre DevTools (F12)
6. Vé a la pestaña **Network**
7. Busca la solicitud `GET /api/channels/...`
8. Debería mostrar un estado **200** (significa que funcionó)
9. Toma una captura de esa línea de Network

**✓ Qué deberías ver:** Una línea que diga `/api/channels/...` con estado 200 en color verde

---

## Ejercicio 2: El Controlador (Controller)

### ¿Qué es un Controller?

El controlador es el que hace el trabajo. Recibe la solicitud de la ruta y decide qué datos buscar en la base de datos y qué responder.

### Lo que hicimos

Escribimos el código que:
1. Busca el canal en la base de datos
2. Si no existe, devuelve un error 404
3. Si existe, responde con los datos del canal en formato JSON

### 📸 Screenshot 3: La búsqueda en la Base de Datos

**Archivo:** `src/controllers/channel.controller.ts` (líneas 54-57)

```typescript
const channel = await Channel.findOne({
  _id: channelId,
  isActive: true
});
```

**Cómo tomar el screenshot:**
1. Abre VS Code
2. Navega a `src/controllers/channel.controller.ts`
3. Busca la función `getChannel` (alrededor de la línea 47)
4. Selecciona desde `const channel = await Channel.findOne...` hasta la llave que cierra
5. Toma una captura
6. Pégala aquí

**✓ Qué deberías ver:** El código que busca en la base de datos usando `findOne`

---

### 📸 Screenshot 4: La respuesta JSON en el Navegador

**Cómo verificar la respuesta:**
1. En el mismo DevTools (Network), haz clic en la solicitud `/api/channels/...`
2. Busca la pestaña **Preview** o **Response**
3. Deberías ver algo como:

```json
{
  "channel": {
    "_id": "...",
    "name": "Nombre del Canal",
    "country": "País",
    "categories": ["News", "Sports"],
    "streamUrl": "https://...",
    "logoUrl": "...",
    "isActive": true
  }
}
```

4. Toma una captura de esta respuesta
5. Pégala aquí

**✓ Qué deberías ver:** El JSON con todos los datos del canal, especialmente `streamUrl`

---

### 📸 Screenshot 5: El manejo del error 404

**Archivo:** `src/controllers/channel.controller.ts` (líneas 59-65)

```typescript
if (!channel) {
  throw new AppError(
    404,
    'CHANNEL_NOT_FOUND',
    'Channel was not found'
  );
}
```

**Cómo tomar el screenshot:**
1. Abre VS Code
2. Navega al mismo archivo
3. Selecciona el código del `if (!channel)` hasta el cierre de la llave
4. Toma una captura
5. Pégala aquí

**✓ Qué deberías ver:** El código que verifica si el canal existe y devuelve error 404

---

## Ejercicio 3: La Vista y el Fetch (View)

### ¿Qué es un Fetch?

El fetch es como enviar un mensaje. La página (Vista) le pide al servidor un canal y espera la respuesta.

### Lo que hicimos

Desde la página `watch.js`, hacemos un fetch para obtener los datos del canal y luego mostramos esos datos en la pantalla.

### 📸 Screenshot 6: El código del Fetch

**Archivo:** `src/public/js/watch.js` (líneas 48-52)

```typescript
const response = await fetch(`/api/channels/${channelId}`);
if (!response.ok) { showPlayerState('error', 'Channel could not be loaded.'); return; }

const data = await response.json();
channel = data.channel;
```

**Cómo tomar el screenshot:**
1. Abre VS Code
2. Navega a `src/public/js/watch.js`
3. Busca la función `loadChannel` (alrededor de la línea 45)
4. Selecciona el código del fetch hasta donde se asigna `channel = data.channel`
5. Toma una captura
6. Pégala aquí

**✓ Qué deberías ver:** El código que hace el fetch a `/api/channels/${channelId}`

---

### 📸 Screenshot 7: Mostrando los datos en la página

**Archivo:** `src/public/js/watch.js` (líneas 54-56)

```typescript
document.querySelector('#channel-name').textContent = channel.name;
document.querySelector('#channel-country').textContent = channel.country;
document.querySelector('#channel-categories').textContent = channel.categories.join(', ') || 'Live TV';
```

**Cómo tomar el screenshot:**
1. En el mismo archivo
2. Debajo del código anterior, selecciona las tres líneas que actualizan la página
3. Toma una captura
4. Pégala aquí

**✓ Qué deberías ver:** El código que coloca el nombre, país y categorías en la página

---

### 📸 Screenshot 8: Evidencia de que se muestra correctamente

**Cómo verificar:**
1. Abre la página Watch en el navegador (haz clic en un canal desde Home)
2. Deberías ver:
   - ✓ El nombre del canal en grande
   - ✓ El país debajo del nombre
   - ✓ Las categorías (ej: "News, Sports")
3. Toma una captura de la pantalla mostrando esta información
4. Pégala aquí

**✓ Qué deberías ver:** La página Watch con el nombre, país y categorías del canal visible

---

## Ejercicio 4: El Reproductor (Player)

### ¿Qué es Shaka Player?

Es una librería que toma una URL de video (streamUrl) y la reproduce en la página. Es como un "control remoto" para videos en internet.

### Lo que hicimos

Inicializamos Shaka Player con el video de la página y le pasamos la URL del stream que obtuvimos del servidor.

### 📸 Screenshot 9: El código del Player

**Archivo:** `src/public/js/watch.js` (líneas 30-43)

```typescript
async function playChannel() {
  showPlayerState('loading', 'Preparing the live stream...');

  player = new shaka.Player(video);

  try {
    await player.load(channel.streamUrl);
    showPlayerState('playing', '');
  } catch {
    showPlayerState(
      'error',
      'This live stream cannot be played right now.'
    );
  }
}
```

**Cómo tomar el screenshot:**
1. Abre VS Code
2. Navega a `src/public/js/watch.js`
3. Busca la función `playChannel` (alrededor de la línea 30)
4. Selecciona toda la función completa
5. Toma una captura
6. Pégala aquí

**✓ Qué deberías ver:** El código que crea el player, carga el stream y maneja los errores

---

### 📸 Screenshot 10: El stream reproduciéndose

**Cómo verificar:**
1. Abre la página Watch en el navegador
2. Espera 2-3 segundos mientras se carga
3. Si el canal tiene un stream válido, deberías ver:
   - ✓ El video aparecer en la pantalla
   - ✓ Los controles del reproductor (play, pause, volumen)
   - ✓ El video reproduciéndose (si el stream está activo)
4. Toma una captura de la pantalla con el video visible
5. Pégala aquí

**⚠️ Nota:** Algunos streams pueden estar caídos o geo-bloqueados. Si no se reproduce, prueba con otro canal.

**✓ Qué deberías ver:** La página Watch con un video reproduciéndose o visible en pantalla

---

## Ejercicio 5: Los Estados de la Interfaz

### ¿Qué son los Estados?

Los estados son los diferentes mensajes que le mostramos al usuario mientras ocurren cosas. Por ejemplo: "Esperando..." mientras carga, "Reproduciendo" cuando funciona, o "Error" cuando algo falla.

### Lo que hicimos

Implementamos tres estados:
- **Loading:** Mientras se prepara el stream
- **Playing:** Cuando el stream está reproduciendo
- **Error:** Cuando no se pudo cargar el stream

### 📸 Screenshot 11: El estado Loading

**Cómo verificar:**
1. Abre la página Watch en el navegador
2. Justo después de que haces clic en un canal, deberías ver el mensaje:
   - **"Preparing the live stream..."**
3. Toma una captura de este estado
4. Pégala aquí

**✓ Qué deberías ver:** La página mostrando el mensaje "Preparing the live stream..."

---

### 📸 Screenshot 12: El estado Playing o Error

Necesitas mostrar al menos UNO de estos dos estados:

**Opción A: Estado Playing**
1. Espera a que el stream cargue completamente (2-3 segundos)
2. Deberías ver:
   - ✓ El mensaje desaparece
   - ✓ El video aparece en pantalla
   - ✓ El reproductor es visible
3. Toma una captura
4. Pégala aquí

**Opción B: Estado Error** (si el stream no funciona)
1. Espera a que transcurran 2-5 segundos
2. Deberías ver:
   - ✓ El mensaje: "This live stream cannot be played right now."
   - ✓ Un botón "Try again"
3. Toma una captura
4. Pégala aquí

**✓ Qué deberías ver:** Uno de los dos estados claramente visible

---

### 📸 Screenshot 13: El código de los estados

**Archivo:** `src/public/js/watch.js` (líneas 30-43)

Ya lo incluiste en el Screenshot 9, pero puedes destacar especialmente estas líneas:

```typescript
showPlayerState('loading', 'Preparing the live stream...');
// ... después ...
showPlayerState('playing', '');
// ... o ...
showPlayerState('error', 'This live stream cannot be played right now.');
```

**¿Qué mostrar en el screenshot?**
- Las tres líneas que cambian el estado

**✓ Qué deberías ver:** Las llamadas a `showPlayerState` con los tres estados diferentes

---

## Conclusión: Entendiendo MVC

### ¿Qué aprendiste sobre MVC en esta práctica?

MVC significa:
- **M** (Model) = La base de datos y cómo se guardan los canales
- **V** (View) = La página que ves en el navegador (watch.html y watch.js)
- **C** (Controller) = El código que hace el trabajo entre la página y la base de datos

### Explicación de lo que hicimos

**1. Por qué watch.js no consulta MongoDB directamente:**

La página (watch.js) no puede hablar con la base de datos directamente porque está corriendo en el navegador, no en el servidor. MongoDB está en el servidor. Por eso necesitamos un intermediario (el Controller).

**2. Qué responsabilidad tiene channel.routes.ts:**

La ruta es la que recibe el mensaje del navegador y dice: "Ah, alguien pide un canal, voy a pasar esto al Controller para que lo resuelva."

**3. Por qué la consulta Mongoose pertenece al Controller y Model:**

El Controller es el que sabe qué datos pedir. Mongoose es la herramienta que usamos para pedirle a MongoDB: "Dame el canal con este ID." El Controller dice QUÉ, y Mongoose dice CÓMO.

**4. Cómo el JSON regresa desde el backend hasta la View:**

1. watch.js hace un fetch
2. El servidor recibe la solicitud en la ruta
3. La ruta pasa a el Controller
4. El Controller busca en la base de datos (Model/Mongoose)
5. El Controller responde con JSON
6. watch.js recibe el JSON
7. watch.js coloca los datos en la página (View)

**5. Por qué streamUrl llega al player únicamente después del recorrido:**

Si mandáramos la URL del stream directamente desde la página, estaría "hardcodeada" (escrita fija) y no sería real. El flujo correcto es:
1. Obtener el canal del servidor (fetch)
2. El servidor devuelve el streamUrl real (que puede cambiar)
3. Usar ese streamUrl en el player

De esta forma, los datos siempre están actualizados y seguros en el servidor.

**6. Cómo MVC ayuda a localizar errores:**

Si el video no funciona, usando MVC podemos preguntar:
- ¿Funciona la **Route**? (¿Llega la solicitud al servidor?)
- ¿Funciona el **Controller**? (¿Se obtiene el canal de la base de datos?)
- ¿Funciona el **Model**? (¿Están los datos en MongoDB?)
- ¿Funciona la **View**? (¿Se muestra el streamUrl en la página?)
- ¿Funciona el **Player**? (¿Puede reproducir el streamUrl?)

Si dividimos en capas, es mucho más fácil encontrar dónde está el problema.

---

## Checklist de Cumplimiento

Marca lo que completaste:

### Route y flujo HTTP (15%)
- [ ] La ruta `/:id` está conectada con `getChannel`
- [ ] Se puede ver en Network que la solicitud llega al servidor
- [ ] La respuesta tiene estado 200 (verde)
- [ ] El screenshot muestra el código y la evidencia

### Controller, Model y MongoDB (25%)
- [ ] El Controller usa `Channel.findOne()`
- [ ] Busca por `_id` e `isActive: true`
- [ ] Devuelve error 404 si no existe
- [ ] Responde con `response.json({ channel })`
- [ ] El screenshot muestra el código y el JSON en la respuesta

### View y consumo de API (20%)
- [ ] watch.js hace fetch a `/api/channels/${channelId}`
- [ ] Obtiene el JSON y extrae `data.channel`
- [ ] Actualiza el DOM con nombre, país y categorías
- [ ] Todos los datos se ven correctamente en la página

### Player (20%)
- [ ] Shaka Player se inicializa con el elemento video
- [ ] Usa `channel.streamUrl` para cargar el stream
- [ ] Maneja errores con try/catch
- [ ] El screenshot muestra el código
- [ ] El screenshot muestra el video o el intento de reproducción

### Estados de UI (10%)
- [ ] "Loading" se muestra mientras carga
- [ ] "Playing" o estado de éxito cuando funciona
- [ ] "Error" cuando falla
- [ ] Los estados se ven en la pantalla
- [ ] Hay al menos dos screenshots de estados diferentes

### Evidencias y conclusión MVC (10%)
- [ ] URL del repositorio public válida
- [ ] Mínimo 13 screenshots claros
- [ ] Conclusión explica por qué watch.js no accede a MongoDB directamente
- [ ] Explica la responsabilidad de cada capa
- [ ] Muestra cómo MVC ayuda a encontrar errores
- [ ] El documento es ordenado y fácil de leer

---

## 📋 Instrucciones Finales

1. **Copiar este contenido** a un documento Word
2. **Reemplazar los textos en bracket** `[AQUI VA...]` con tu información
3. **Insertar imágenes** en los lugares indicados (📸 Screenshot X)
4. **Tomar screenshots** según las instrucciones de cada ejercicio
5. **Completar el checklist**
6. **Guardar como PDF**
7. **Subir tu repositorio de GitHub como público**

---

**Fecha de entrega:** [Completa con tu fecha]  
**Alumno:** [Tu nombre]  
**Curso:** Servidores - Práctica Integradora 1
