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
├── apps/
│   └── kanban-board-client/
│       └── src/
│           └── app/
│               ├── pages/
│               ├── layout/
│               ├── hooks/
│               ├── App.tsx
│               └── main.tsx
├── libs/
│   └── domain/
│       ├── board/
│       ├── task/
│       └── theme/
├── ui/
│   ├── components/
│   ├── layout/
│   ├── styles/
│   └── hooks/
└── infrastructure/
    ├── api/
    ├── utils/
    └── types/
```
