# NextJS Intro:

- NextJS is a React framework that allows you to build server-side rendered (SSR) applications.

### File based routing

- You can create a new page by creating a new file in the pages directory
- The file name will be the route of the page
- page.tsx is the entry point of the page (home page)

- Directories must have page.tsx file to be considered a route
- Nested routes can be created by creating a folder with the same name as the route and creating an index.js file inside it
  - ex.
    - pages/
      - about.js
      - contact.js
      - blog/
        - page.tsx # Route: /blog
- Dynamic routes can be created by creating a file with square brackets in the name
  - ex.
    - pages/
      - blog/
        - [slug].tsx # Route: /blog/:slug

## @ Symbol

- The @ symbol is used to import modules from the root of the project, instead of using relative paths (../../..)
  - ex.
    - import { Layout } from '@/components/Layout'
