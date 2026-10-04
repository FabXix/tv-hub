# 📸 Guía Rápida de Screenshots para la Entrega

## Resumen de 13 Screenshots Necesarios

| # | Nombre | De qué es | Dónde va en el PDF |
|---|--------|-----------|-------------------|
| 1 | Repo GitHub | Tu repositorio público | Sección "Repositorio Público" |
| 2 | Código Route | Archivo `channel.routes.ts` líneas 15-16 | Ejercicio 1 - Código |
| 3 | Network 200 | DevTools mostrando GET /api/channels/... con status 200 | Ejercicio 1 - Evidencia |
| 4 | Código findOne | Archivo `channel.controller.ts` líneas 54-57 | Ejercicio 2 - Búsqueda |
| 5 | JSON Response | DevTools → Network → Response mostrando el JSON del canal | Ejercicio 2 - Respuesta JSON |
| 6 | Código Error 404 | Archivo `channel.controller.ts` líneas 59-65 (el if !channel) | Ejercicio 2 - Error |
| 7 | Código Fetch | Archivo `watch.js` líneas 48-52 | Ejercicio 3 - Fetch |
| 8 | Código DOM Update | Archivo `watch.js` líneas 54-56 (querySelector) | Ejercicio 3 - Mostrar datos |
| 9 | Página Watch con datos | Navegador mostrando nombre, país y categorías del canal | Ejercicio 3 - Evidencia |
| 10 | Código Shaka Player | Archivo `watch.js` líneas 30-43 (función playChannel) | Ejercicio 4 - Código |
| 11 | Estado Loading | Navegador mostrando "Preparing the live stream..." | Ejercicio 5 - Loading |
| 12 | Estado Playing o Error | Navegador mostrando video (Playing) O error (Error) | Ejercicio 5 - Playing/Error |
| 13 | Código Estados | Archivo `watch.js` las líneas de showPlayerState | Ejercicio 5 - Código Estados |

---

## 🎯 Plan de Acción

### Paso 1: Preparar el Entorno
```bash
# 1. Asegúrate de que el servidor esté corriendo
npm run dev

# 2. Abre el navegador en http://localhost:3000
# 3. Haz login
# 4. Abre DevTools (F12) en toda la sesión
```

### Paso 2: Capturar Screenshots de Código (en VS Code)
Haz estos screenshots primero en VS Code, sin el servidor:

1. **Screenshot 2:** `channel.routes.ts` líneas 15-16
2. **Screenshot 4:** `channel.controller.ts` líneas 54-57
3. **Screenshot 6:** `channel.controller.ts` líneas 59-65
4. **Screenshot 7:** `watch.js` líneas 48-52
5. **Screenshot 8:** `watch.js` líneas 54-56
6. **Screenshot 10:** `watch.js` líneas 30-43
7. **Screenshot 13:** `watch.js` líneas que dicen `showPlayerState(...)`

### Paso 3: Capturar Screenshots de Navegador

Con el servidor corriendo:

1. **Screenshot 1:** GitHub
   - Abre tu repositorio en GitHub
   - Copia la URL
   - Toma una captura de la página del repo

2. **Screenshot 3:** Network - Status 200
   - Abre Home.html
   - Haz login
   - Abre DevTools (F12)
   - Vé a Network
   - Haz click en un canal
   - Busca `/api/channels/...`
   - Toma una captura (debe mostrar status 200)

3. **Screenshot 5:** JSON Response
   - En la misma ventana de Network
   - Haz click en la solicitud `/api/channels/...`
   - Vé a la pestaña "Response"
   - Toma una captura del JSON

4. **Screenshot 9:** Página Watch con Datos
   - En la página Watch.html (después de hacer clic en un canal)
   - Deberías ver: nombre, país, categorías
   - Toma una captura de la página

5. **Screenshot 11:** Estado Loading
   - En Watch.html
   - Justo después de que carga
   - Verás "Preparing the live stream..."
   - Toma una captura rápido

6. **Screenshot 12:** Estado Playing o Error
   - Espera 3 segundos a que cargue
   - Si ves el video → toma screenshot de Playing
   - Si ves error → toma screenshot de Error
   - Elige el que esté disponible

---

## 💡 Tips para Tomar Buenos Screenshots

### Para código en VS Code:
- ✅ Selecciona el código completo que quieres mostrar
- ✅ Usa zoom (Ctrl + Plus) si es necesario para que se vea bien
- ✅ Muestra el nombre del archivo en la pestaña
- ✅ Incluye los números de línea

### Para DevTools:
- ✅ Usa solo la mitad de la pantalla para DevTools
- ✅ Expande la solicitud para ver detalles
- ✅ Resalta la respuesta importante
- ✅ Cierra otros elementos que no necesitas

### Para la página Watch:
- ✅ Toma full-page screenshots
- ✅ Asegúrate de ver el nombre, país y categorías
- ✅ Si es posible, muestra el video reproduciéndose

---

## ✅ Checklist Antes de Entregar

- [ ] Tengo 13 screenshots listos
- [ ] Cada screenshot es claro y legible
- [ ] Copié el template a Word
- [ ] Pegué los screenshots en los lugares indicados
- [ ] Completé todos los campos en bracket `[AQUI VA...]`
- [ ] Mi repositorio de GitHub es público
- [ ] Escribí la conclusión sobre MVC
- [ ] Completé el checklist final
- [ ] Guardé como PDF
- [ ] Verifiqué que el PDF se abre bien

---

## 🔗 Links Útiles para Tomar Screenshots

**En Windows:**
- Windows + Shift + S = Herramienta de captura
- O usa ScreenSnip integrado

**En Mac:**
- Cmd + Shift + 4 = Seleccionar área
- Cmd + Shift + 5 = Captura avanzada

**Alternativa:**
- Usa Snagit, ShareX o cualquier herramienta que gustes

---

## 📝 Orden de Trabajo Recomendado

1. Abre VS Code y copia los 7 screenshots de código
2. Copia el template de ENTREGA_PDF_TEMPLATE.md a Word
3. Pega los screenshots de código en Word
4. Inicia el servidor
5. Toma los 6 screenshots del navegador
6. Pega en Word
7. Escribe la conclusión
8. Completa el checklist
9. Guarda como PDF
10. Verifica que todo se vea bien

---

**Tiempo estimado:** 30-45 minutos para hacer todos los screenshots

Cualquier duda, revisa el template completo en `ENTREGA_PDF_TEMPLATE.md`
