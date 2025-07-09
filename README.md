# Juego RPG en JavaScript

Un sencillo juego de rol (RPG) de fantasía, por turnos y basado en navegador, construido con HTML, CSS y JavaScript moderno (Módulos ES6). Juegas como un mago que debe derrotar a una serie de monstruos.

## Características

-   Combate por turnos.
-   Mecánica de tirada de dados para determinar el daño.
-   Barras de salud dinámicas que indican visualmente el daño.
-   Múltiples monstruos para combatir en secuencia.
-   Pantalla de fin de juego con mensaje de victoria o derrota.
-   Uso de Módulos de JavaScript para un código organizado y mantenible.
-   Desarrollado con [Vite](https://vitejs.dev/) para un entorno de desarrollo rápido.

## Cómo Jugar

1.  Abre el juego en tu navegador.
2.  Haz clic en el botón "Attack" para iniciar un turno de combate.
3.  Tanto tu mago como el monstruo actual tirarán los dados.
4.  El resultado de los dados de cada personaje se resta de la salud del oponente.
5.  ¡Sigue atacando hasta que derrotes a todos los monstruos o tu mago sea vencido!

## Instalación y Ejecución Local

Para ejecutar este proyecto en tu máquina local:

1.  **Clona el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd javascript-rpg
    ```

2.  **Instala las dependencias:**
    El proyecto utiliza `vite` como dependencia de desarrollo.
    ```bash
    npm install
    ```

3.  **Inicia el servidor de desarrollo:**
    ```bash
    npm start
    ```
    Esto iniciará un servidor de desarrollo local. Puedes ver el proyecto abriendo la URL que se muestra en tu terminal (normalmente `http://localhost:5173`).

## Estructura del Proyecto

-   `index.html`: El punto de entrada principal y la estructura de la página.
-   `index.css`: Estilos para todos los componentes del juego.
-   `index.js`: La lógica principal del juego, incluyendo el bucle del juego, el manejo de ataques y las condiciones de finalización.
-   `Character.js`: Una clase `Character` que sirve como plantilla para el héroe y los monstruos.
-   `data.js`: Contiene los datos y estadísticas de todos los personajes.
-   `utils.js`: Funciones de utilidad para la mecánica del juego, como las tiradas de dados.
-   `images/`: Contiene las imágenes de los avatares de los personajes.