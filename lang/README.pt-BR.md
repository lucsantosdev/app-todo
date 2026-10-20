# TodoFlow ✨

🌐 **Português** | [English](../README.md) | [Español](README.es.md)

>TodoFlow é um aplicativo de tarefas minimalista construído com React, Redux Toolkit, Vite e Tailwind CSS.

![Prévia do aplicativo](../public/preview-app.png)

A aplicação é otimizada para um fluxo de trabalho simples:
- ✅ Criar, atualizar, concluir e excluir tarefas
- 🔎 Filtrar por `all` (todas), `active` (ativas) e `completed` (concluídas)
- 📊 Acompanhar o progresso por meio de estatísticas derivadas
- 💾 Salvar as tarefas no `localStorage` do navegador

## 🔗 Demonstração ao vivo

**Link:** [Clique aqui para ver o projeto de demonstração](https://app-todo-self-seven.vercel.app/)

## Tecnologias 🛠️

- React 19
- Redux Toolkit + React Redux
- Vite 8
- Tailwind CSS 4
- Lucide React + React Icons

## Como o projeto funciona ⚙️

### Gerenciamento de estado 🧠

O estado global é gerenciado pelo Redux Toolkit em [src/store/todoSlice.js](../src/store/todoSlice.js), configurado em [src/store/store.js](../src/store/store.js).

Estrutura principal do estado:
- `items`: lista de tarefas
- `filter`: filtro atual (`all`, `active`, `completed`)
- `isAddingTodo`: controla se o formulário para adicionar uma tarefa está visível

Cada tarefa contém:
- `id`
- `text`
- `completed`
- `createdAt`
- `updatedAt`

### Persistência 💾

A aplicação usa o `localStorage` para salvar as tarefas:
- Ao iniciar, `loadTodos()` carrega as tarefas salvas na chave `todos`
- Quando há alterações (`add`, `toggle`, `update`, `delete`, `markAllComplete`, `clearCompleted`), `saveTodos()` salva a lista atualizada

Isso significa que os dados ficam armazenados em cada navegador ou dispositivo, sem necessidade de um backend (pelo menos por enquanto; talvez eu implemente isso em versões futuras).

### Dados derivados (seletores memorizados) 📈

Os seletores estão definidos em [src/store/selectors.js](../src/store/selectors.js):
- `selectFilteredTodos`
- `selectTodosStats`

Esses seletores usam memoização com `createSelector` para evitar renderizações desnecessárias e retornar referências estáveis quando as entradas não mudam.

### Componentes da interface 🧩

- [src/components/TodoApp.jsx](../src/components/TodoApp.jsx): layout principal, estatísticas, filtros, lista e rodapé
- [src/components/TodoForm.jsx](../src/components/TodoForm.jsx): formulário para adicionar ou editar tarefas
- [src/components/TodoItem.jsx](../src/components/TodoItem.jsx): item individual da lista
- [src/components/TodoFilters.jsx](../src/components/TodoFilters.jsx): controles de filtro

## Como começar localmente 🚀

### 1. Instale as dependências 📦

```bash
npm install
```

### 2. Inicie o servidor de desenvolvimento 🧪

```bash
npm run dev
```

### 3. Gere a build de produção 🏗️

```bash
npm run build
```

### 4. Visualize a build de produção 👀

```bash
npm run preview
```

## Deploy na Vercel ▲

Este projeto é um aplicativo estático Vite padrão, então o deploy no Vercel é direto.

### Opção A: Deploy a partir do GitHub (recomendado) 🌐

1. Envie este repositório para o GitHub.
2. No Vercel, clique em **Adicionar Novo Projeto**.
3. Importe o repositório GitHub.
4. Vercel geralmente detecta automaticamente o Vite.
5. Confirme as configurações da build:
	- Build Command: `npm run build`
	- Output Directory: `dist`
	- Install Command: `npm install`
6. Clique em **Deploy**.

### Opção B: Deploy com Vercel CLI 💻

```bash
npm i -g vercel
vercel
```

Para fazer o deploy de produção:

```bash
vercel --main
```

## Observações para Produção 📝

- A versão atual não exige variáveis de ambiente.
- Os dados são armazenados no `localStorage` do navegador, então cada usuário mantém seus próprios dados localmente.
- Limpar os dados do site no navegador removerá todas as tarefas salvas.

## Possíveis melhorias futuras 🔮

- Sincronização com backend (Supabase/Firebase/API em Node)
- Autenticação de usuários
- Persistência na nuvem entre dispositivos
- Ordenação por arrastar e soltar
- Testes unitários para reducers e seletores

## 📝 Licença

Este projeto é de código aberto e está disponível sob os termos da [Licença MIT](../LICENSE).

## 👨‍💻 Conecte-se comigo
Acompanhe minha trajetória e conheça outros projetos:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-lucsantosdev-blue?logo=linkedin)](https://www.linkedin.com/in/lucsantosdev)
[![GitHub](https://img.shields.io/badge/GitHub-lucsantosdev-181717?logo=github)](https://github.com/lucsantosdev)
[![Email](https://img.shields.io/badge/Gmail-lucsantosdev@gmail.com-181717?logo=gmail)](mailto:lucsantosdev@gmail.com)
[![YouTube](https://img.shields.io/badge/YouTube-lucsantosdev-FF0000?logo=youtube&logoColor=white)](https://youtube.com/@lucsantosdev)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-Support-ff5e5b?logo=ko-fi)](https://ko-fi.com/lucsantosdev)

---

🧠 Je 9:23-24