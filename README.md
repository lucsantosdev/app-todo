# TodoFlow ✨

🌐 **English** | [Português](lang/README.pt-BR.md) | [Español](lang/README.es.md)

>TodoFlow is a minimalist todo app built with React, Redux Toolkit, Vite, and Tailwind CSS.

![App Preview](public/preview-app.png)

The app is optimized for a simple workflow:
- ✅ Create, update, complete, and delete todos
- 🔎 Filter by `all`, `active`, and `completed`
- 📊 Track progress with derived stats
- 💾 Persist todos in browser `localStorage`

## 🔗 Live Demo

**Link:** [Click here to see the demo project](https://app-todo-self-seven.vercel.app/)

## Tech Stack 🛠️

- React 19
- Redux Toolkit + React Redux
- Vite 8
- Tailwind CSS 4
- Lucide React + React Icons

## How The Project Works ⚙️

### State Management 🧠

Global state is managed by Redux Toolkit in [src/store/todoSlice.js](src/store/todoSlice.js), configured in [src/store/store.js](src/store/store.js).

Main state shape:
- `items`: list of todo objects
- `filter`: current filter (`all`, `active`, `completed`)
- `isAddingTodo`: controls whether the add form is visible

Each todo contains:
- `id`
- `text`
- `completed`
- `createdAt`
- `updatedAt`

### Persistence 💾

The app uses `localStorage` to persist todos:
- On startup, `loadTodos()` loads saved todos from key `todos`
- On changes (`add`, `toggle`, `update`, `delete`, `markAllComplete`, `clearCompleted`), `saveTodos()` writes the latest list back

This means user data is stored per browser/device and does not require a backend (at least for now - maybe I'll implement this in future versions).

### Derived Data (Memoized Selectors) 📈

Selectors are defined in [src/store/selectors.js](src/store/selectors.js):
- `selectFilteredTodos`
- `selectTodosStats`

These selectors are memoized with `createSelector` to avoid unnecessary rerenders and return stable references when inputs do not change.

### UI Components 🧩

- [src/components/TodoApp.jsx](src/components/TodoApp.jsx): Main layout, stats, filters, list, footer
- [src/components/TodoForm.jsx](src/components/TodoForm.jsx): Add/edit form
- [src/components/TodoItem.jsx](src/components/TodoItem.jsx): Single todo row
- [src/components/TodoFilters.jsx](src/components/TodoFilters.jsx): Filter controls

## Getting Started Locally 🚀

### 1. Install dependencies 📦

```bash
npm install
```

### 2. Run development server 🧪

```bash
npm run dev
```

### 3. Build for production 🏗️

```bash
npm run build
```

### 4. Preview production build 👀

```bash
npm run preview
```

## Deploying To Vercel ▲

This project is a standard Vite static app, so Vercel deployment is straightforward.

### Option A: Deploy from GitHub (recommended) 🌐

1. Push this repository to GitHub.
2. In Vercel, click **Add New Project**.
3. Import the GitHub repository.
4. Vercel usually detects Vite automatically.
5. Confirm build settings:
	- Build Command: `npm run build`
	- Output Directory: `dist`
	- Install Command: `npm install`
6. Click **Deploy**.

### Option B: Deploy with Vercel CLI 💻

```bash
npm i -g vercel
vercel
```

For production deployment:

```bash
vercel --main
```

## Notes For Production 📝

- No environment variables are required for the current version.
- Data is stored in browser `localStorage`, so each user keeps their own local data.
- Clearing browser site data will remove saved todos.

## Possible Future Improvements 🔮

- Backend sync (Supabase/Firebase/Node API)
- User authentication
- Cloud persistence across devices
- Drag-and-drop sorting
- Unit tests for reducers and selectors

## 📝 License

This project is open source under the terms of the [MIT License](LICENSE).

## 👨‍💻 Connect with Me
Follow my journey and other projects on:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-lucsantosdev-blue?logo=linkedin)](https://www.linkedin.com/in/lucsantosdev)
[![GitHub](https://img.shields.io/badge/GitHub-lucsantosdev-181717?logo=github)](https://github.com/lucsantosdev)
[![Email](https://img.shields.io/badge/Gmail-lucsantosdev@gmail.com-181717?logo=gmail)](mailto:lucsantosdev@gmail.com)
[![YouTube](https://img.shields.io/badge/YouTube-lucsantosdev-FF0000?logo=youtube&logoColor=white)](https://youtube.com/@lucsantosdev)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-Support-ff5e5b?logo=ko-fi)](https://ko-fi.com/lucsantosdev)

---

🧠 Je 9:23-24