# Bioferia 2027 · App (prototipo navegable)

Prototipo de la app de Bioferia 2027 (9, 10 y 11 de abril · Hipódromo de Palermo).
Es un sitio estático: un `index.html` y la carpeta `img/`. No necesita servidor ni instalación.

## Qué incluye
- Pantalla de bienvenida "¡Activemos el cambio!"
- Inicio con video de portada, accesos rápidos y las cinco formas de activar el cambio (Fuego, Aire, Agua, Tierra, Corazón)
- Agenda por día con filtros, inscripción a talleres, cupos y lista de espera
- Mapa ilustrado con lugares, filtros por color y recorrido simulado
- Acciones ambientales
- Entradas (compra simulada y QR de demostración)
- Avisos, modo DEMO (reloj simulado, cupos, sin conexión) y acceso al BioJuego

> Los datos (stands, descuentos, horarios, organizaciones, entradas) son de ejemplo.
> No se procesan pagos ni se emiten entradas.

## Publicar en GitHub Pages
1. Creá un repositorio nuevo en GitHub (por ejemplo `bioferia-app`), público.
2. Subí **todo el contenido de esta carpeta** (`index.html`, `img/`, `.nojekyll`, `README.md`).
   - Por la web: *Add file → Upload files* y arrastrá los archivos y la carpeta `img`.
3. En el repositorio: *Settings → Pages → Build and deployment*.
   - *Source*: **Deploy from a branch**
   - *Branch*: **main** · carpeta **/ (root)** → *Save*
4. A los 1–2 minutos queda en `https://TU-USUARIO.github.io/bioferia-app/`.

Por línea de comandos:
```bash
git init
git add .
git commit -m "Bioferia 2027 app"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/bioferia-app.git
git push -u origin main
```

## Notas
- `img/portada.mp4` pesa ~18 MB. Para que cargue más rápido con datos móviles conviene comprimirlo.
- Las fotos de `img/acciones/` son de Wikimedia Commons (CC0 / dominio público). Detalle en `img/acciones/CREDITOS.txt`.
- El estado de la demo (nombre, inscripciones) se guarda solo en el navegador de cada persona.
- El BioJuego es externo: https://catalisis-one.vercel.app/
