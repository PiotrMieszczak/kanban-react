## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve kanban-react-client
```

To create a production bundle:

```sh
npx nx build kanban-react-client
```

To see all available targets to run for a project, run:

```sh
npx nx show project kanban-react-client
```

# folder structure

<strong>📁 Folder Structure (DDD, NX, Zustand)</strong>

```
.
├── data.json                      ← your mock data for json-server
├── apps/
│   └── kanban-board-client/
│       └── src/
│           └── app/
│               ├── pages/         ← route components (Dashboard, BoardView…)
│               ├── layout/        ← global layout (Sidebar, Header, Providers)
│               ├── hooks/         ← UI-only hooks (e.g. useMediaQuery)
│               ├── App.tsx        ← root App
│               └── main.tsx       ← ReactDOM.render + import global.scss
├── libs/
│   ├── domain/
│   │   ├── board/
│   │   │   ├── models/            ← Board, Column value objects
│   │   │   ├── services/          ← pure business logic (moveTask, etc)
│   │   │   ├── interfaces/        ← IBoardRepository port
│   │   │   └── adapters/          ← json-server adapter implementing IBoardRepository
│   │   └── task/
│   │       ├── models/            ← Task, Subtask
│   │       ├── services/          ← business logic (toggleSubtask, reorder…)
│   │       ├── interfaces/        ← ITaskRepository port
│   │       └── adapters/          ← json-server adapter implementing ITaskRepository
│   ├── application/               ← orchestrate domain + repos
│   │   ├── board/                 ← createBoardUseCase, fetchBoardsUseCase
│   │   └── task/                  ← createTaskUseCase, fetchTasksUseCase
│   ├── context/                   ← React Context + hooks
│   │   ├── board/
│   │   │   ├── BoardProvider.tsx  ← wraps children, loads initial data
│   │   │   ├── useBoard.ts        ← typed useContext(BoardContext)
│   │   │   └── index.ts
│   │   └── task/
│   │       ├── TaskProvider.tsx
│   │       ├── useTask.ts
│   │       └── index.ts
│   └── ui/
│       ├── components/            ← shadcn/Tailwind atoms & molecules
│       ├── layout/                ← shared layout pieces (Modal, Dropdown)
│       ├── styles/                ← global.scss + tokens + tailwind.config.cjs
│       └── hooks/                 ← design-system hooks (useThemeToggle)
└── package.json
```
