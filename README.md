![.github/workflows/ci.yml](https://github.com/ejelome/rhbp/workflows/.github/workflows/ci.yml/badge.svg)
[![codecov](https://codecov.io/gh/ejelome/rhbp/branch/main/graph/badge.svg?token=2QG3DXU720)](https://codecov.io/gh/ejelome/rhbp)
[![Netlify Status](https://api.netlify.com/api/v1/badges/dd3d0f48-d6b9-461c-a486-9c598a6ab233/deploy-status)](https://app.netlify.com/sites/ejelome-rhbp/deploys)

# rhbp

React Hooks Boilerplate

---

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->

**Table of Contents**

- [rhbp](#rhbp)
  - [Demo](#demo)
  - [Setup](#setup)
  - [Usage](#usage)
  - [Structure](#structure)
  - [License](#license)

<!-- markdown-toc end -->

---

## Demo

See <https://ejelome-rhbp.netlify.app>.

---

## Setup

| Command                                            | Description          |
| :------------------------------------------------- | :------------------- |
| `npm [install`&vert;`isntall`&vert;`add`&vert;`i]` | Install dependencies |

---

## Usage

| Command         | Description               |
| :-------------- | :------------------------ |
| `npm run serve` | Start servers and runners |
| `npm run build` | Build app bundle          |

---

## Structure

<details>
  <summary>Core files</summary>

```diff
 rhbp/
+├── db.json
+├── .eslintrc
 ├── .gitignore
+├── LICENSE
 ├── package.json
 ├── package-lock.json
 ├── public/
 │   ├── favicon.ico
 │   ├── index.html
 │   ├── logo192.png
 │   ├── logo512.png
 │   ├── manifest.json
+│   ├── _redirects
 │   └── robots.txt
 ├── README.md
 └── src/
     ├── App.css
     ├── App.js
-    ├── App.test.js
+    ├── components/
+    │   ├── <component>/
+    │   │   ├── actions.js
+    │   │   ├── actionTypes.js
+    │   │   ├── <Component>.js
+    │   │   ├── initialState.js
+    │   │   ├── reducer.js
+    │   │   └── styles.js
+    │   └── nav-bar/
+    │       └── NavBar.js
+    ├── ContextProvider.js
     ├── index.css
     ├── index.js
     ├── logo.svg
     ├── reportWebVitals.js
-    └── setupTests.js
+    ├── Router.js
+    ├── setupTests.js
+    ├── Theme.js
+    └── utils.js
```

</details>

<details>
  <summary>Test files</summary>

```diff
 rhbp/
+├── cypress/
+│   ├── fixtures/
+│   │   └── example.json
+│   ├── integration/
+│   │   └── App_spec.js
+│   ├── plugins/
+│   │   └── index.js
+│   ├── screenshots/
+│   └── support/
+│       ├── commands.js
+│       └── index.js
+├── cypress.json
 ├── db.json
 ├── .eslintrc
+├── .github/
+│   └── workflows/
+│       └── ci.yml
 ├── .gitignore
 ├── LICENSE
 ├── package.json
 ├── package-lock.json
 ├── public/
 │   ├── favicon.ico
 │   ├── index.html
 │   ├── logo192.png
 │   ├── logo512.png
 │   ├── manifest.json
 │   ├── _redirects
 │   └── robots.txt
 ├── README.md
 └── src/
     ├── App.css
     ├── App.js
+    ├── App.test.js
     ├── components/
     │   ├── <component>/
     │   │   ├── actions.js
+    │   │   ├── actions.test.js
     │   │   ├── actionTypes.js
     │   │   ├── <Component>.js
+    │   │   ├── <Component>.test.js
     │   │   ├── initialState.js
     │   │   ├── reducer.js
+    │   │   ├── reducer.test.js
     │   │   └── styles.js
     │   └── nav-bar/
-    │       └── NavBar.js
+    │       ├── NavBar.js
+    │       └── NavBar.test.js
     ├── ContextProvider.js
+    ├── ContextProvider.test.js
     ├── index.css
     ├── index.js
     ├── logo.svg
     ├── reportWebVitals.js
     ├── Router.js
+    ├── Router.test.js
     ├── setupTests.js
+    ├── __tests__/
+    │   └── integration/
+    │       ├── App.spec.js
+    │       ├── ContextProvider.spec.js
+    │       ├── Router.spec.js
+    │       └── Theme.spec.js
     ├── Theme.js
-    └── utils.js
+    ├── Theme.test.js
+    ├── utils.js
+    └── utils.test.js
```

</details>

---

## License

`rhbp` is licensed under [MIT](./LICENSE).
