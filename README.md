

## Getting Started

Before you run the development server, you must host the dummy .json files first, you can find these files in public/ressources folder :

install json-server, then watch the two .json files created, so that you/the program can fetch data from the .json files

"note that you must run the last two commands in separate terminals each (it is a continous process)"

```bash
npm install json-server -g

// terminal 1
json-server --watch --port 4000 ./public/ressources/categories.json

// terminal 2
json-server --watch --port 4001 ./public/ressources/links.json
```

Now you can run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Enjoy !

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
