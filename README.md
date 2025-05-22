# pokedexDA

Una aplicación de Pokédex moderna desarrollada con Vue 3 que permite a los usuarios explorar y buscar información sobre Pokémon.

## Tecnologías utilizadas y decisiones de implementación

- **Vue 3**: Utilizado como framework principal para construir la interfaz de usuario de manera reactiva y basada en componentes.
- **Vite**: Elegido como herramienta de desarrollo y build por su rapidez y simplicidad en la configuración de proyectos modernos de Vue.
- **Pinia**: Usado para el manejo de estado global, facilitando la gestión y acceso a los datos de la aplicación desde distintos componentes.
- **Vue Router**: Implementado para la navegación entre diferentes vistas de la aplicación.
- **CSS Scoped**: Los estilos están encapsulados a nivel de componente para evitar conflictos y mantener el código organizado.

### Decisiones de diseño y escalabilidad

La estructura del proyecto está organizada de manera modular y escalable:

- **Componentes (`/src/components`)**: Componentes reutilizables que encapsulan funcionalidad específica.
- **Vistas (`/src/views`)**: Páginas principales de la aplicación, cada una con su propia lógica y diseño.
- **Estado (`/src/stores`)**: Gestión centralizada del estado de la aplicación usando Pinia.
- **Rutas (`/src/router/index.js`)**: Configuración de navegación y rutas de la aplicación.
- **Assets (`/src/assets`)**: Recursos estáticos como imágenes y estilos globales.

Esta arquitectura permite:
- Separación clara de responsabilidades
- Fácil mantenimiento y escalabilidad
- Reutilización de componentes
- Gestión eficiente del estado global
- Navegación fluida entre diferentes secciones

La aplicación está diseñada para ser escalable, permitiendo:
- Agregar nuevas funcionalidades sin afectar el código existente
- Manejar grandes volúmenes de datos de Pokémon
- Implementar nuevas características de manera modular
- Mantener un rendimiento óptimo incluso con muchos datos

## Instalación y ejecución

1. Clona el repositorio
2. Instala las dependencias:
```bash
npm install
```
3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```


