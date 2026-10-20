# TodoFlow ✨

🌐 **Español** | [Português](README.pt-BR.md) | [English](../README.md)

> TodoFlow es una aplicación minimalista de tareas creada con React, Redux Toolkit, Vite y Tailwind CSS.

![Vista previa de la aplicación](../public/preview-app.png)

La aplicación está optimizada para ofrecer un flujo de trabajo sencillo:
- ✅ Crear, actualizar, completar y eliminar tareas
- 🔎 Filtrar por `all` (todas), `active` (pendientes) y `completed` (completadas)
- 📊 Consultar el progreso mediante estadísticas derivadas
- 💾 Guardar las tareas en el `localStorage` del navegador

## 🔗 Demostración en vivo

**Enlace:** [Haz clic aquí para ver el proyecto de demostración](https://app-todo-self-seven.vercel.app/)

## Tecnologías 🛠️

- React 19
- Redux Toolkit + React Redux
- Vite 8
- Tailwind CSS 4
- Lucide React + React Icons

## Cómo funciona el proyecto ⚙️

### Gestión del estado 🧠

El estado global se administra con Redux Toolkit en [src/store/todoSlice.js](../src/store/todoSlice.js), configurado en [src/store/store.js](../src/store/store.js).

Estructura principal del estado:
- `items`: lista de tareas
- `filter`: filtro actual (`all`, `active`, `completed`)
- `isAddingTodo`: controla si se muestra el formulario para agregar una tarea

Cada tarea contiene:
- `id`
- `text`
- `completed`
- `createdAt`
- `updatedAt`

### Persistencia 💾

La aplicación usa `localStorage` para guardar las tareas:
- Al iniciar, `loadTodos()` carga las tareas guardadas con la clave `todos`
- Cuando hay cambios (`add`, `toggle`, `update`, `delete`, `markAllComplete`, `clearCompleted`), `saveTodos()` guarda la lista actualizada

Esto significa que los datos se almacenan en cada navegador o dispositivo y no se necesita un backend (al menos por ahora; quizá lo implemente en futuras versiones).

### Datos derivados (selectores memorizados) 📈

Los selectores están definidos en [src/store/selectors.js](../src/store/selectors.js):
- `selectFilteredTodos`
- `selectTodosStats`

Estos selectores usan memoización con `createSelector` para evitar renderizados innecesarios y devolver referencias estables cuando las entradas no cambian.

### Componentes de interfaz 🧩

- [src/components/TodoApp.jsx](../src/components/TodoApp.jsx): diseño principal, estadísticas, filtros, lista y pie de página
- [src/components/TodoForm.jsx](../src/components/TodoForm.jsx): formulario para agregar o editar tareas
- [src/components/TodoItem.jsx](../src/components/TodoItem.jsx): elemento individual de la lista
- [src/components/TodoFilters.jsx](../src/components/TodoFilters.jsx): controles de filtrado

## Inicio rápido en local 🚀

### 1. Instalar dependencias 📦

```bash
npm install
```

### 2. Iniciar el servidor de desarrollo 🧪

```bash
npm run dev
```

### 3. Crear una compilación para producción 🏗️

```bash
npm run build
```

### 4. Previsualizar la compilación de producción 👀

```bash
npm run preview
```

## Despliegue en Vercel ▲

Este proyecto es una aplicación estática estándar de Vite, por lo que desplegarlo en Vercel es sencillo.

### Opción A: Desplegar desde GitHub (recomendado) 🌐

1. Sube este repositorio a GitHub.
2. En Vercel, haz clic en **Add New Project**.
3. Importa el repositorio de GitHub.
4. Vercel suele detectar Vite automáticamente.
5. Confirma la configuración de compilación:
	- Build Command: `npm run build`
	- Output Directory: `dist`
	- Install Command: `npm install`
6. Haz clic en **Deploy**.

### Opción B: Desplegar con Vercel CLI 💻

```bash
npm i -g vercel
vercel
```

Para desplegar en producción:

```bash
vercel --main
```

## Notas para producción 📝

- La versión actual no requiere variables de entorno.
- Los datos se guardan en el `localStorage` del navegador, por lo que cada usuario conserva sus propios datos locales.
- Si borras los datos del sitio en el navegador, se eliminarán las tareas guardadas.

## Posibles mejoras futuras 🔮

- Sincronización con un backend (Supabase/Firebase/API de Node)
- Autenticación de usuarios
- Persistencia en la nube entre dispositivos
- Ordenamiento mediante arrastrar y soltar
- Pruebas unitarias para reducers y selectores

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo los términos de la [Licencia MIT](../LICENSE).

## 👨‍💻 Conecta conmigo
Sigue mi trayectoria y descubre otros proyectos:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-lucsantosdev-blue?logo=linkedin)](https://www.linkedin.com/in/lucsantosdev)
[![GitHub](https://img.shields.io/badge/GitHub-lucsantosdev-181717?logo=github)](https://github.com/lucsantosdev)
[![Email](https://img.shields.io/badge/Gmail-lucsantosdev@gmail.com-181717?logo=gmail)](mailto:lucsantosdev@gmail.com)
[![YouTube](https://img.shields.io/badge/YouTube-lucsantosdev-FF0000?logo=youtube&logoColor=white)](https://youtube.com/@lucsantosdev)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-Support-ff5e5b?logo=ko-fi)](https://ko-fi.com/lucsantosdev)

---

🧠 Je 9:23-24
