# NextJS Intro:

- NextJS is a React framework that allows you to build server-side rendered (SSR) applications.

### File based routing

- You can create a new page by creating a new file in the pages directory
- The file name will be the route of the page
- page.tsx is the entry point of the page (home page)
- Nested routes can be created by creating a folder with the same name as the route and creating an index.js file inside it
  - ex.
    - pages/
      - about.js
      - contact.js
      - blog/
        - index.js
        - post.js # Route: /blog and /blog/post
- Dynamic routes can be created by creating a file with square brackets in the name
  - ex.
    - pages/
      - blog/
        - [slug].js # Route: /blog/:slug