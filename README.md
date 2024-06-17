# Starter

The official starter template for ⛺ Tent.

## Features

- [TypeScript](https://www.typescriptlang.org/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Parcel](https://parceljs.org/)
- [Jest](https://jestjs.io/)

## Usage

### Clone the starter project
Clone the repository to your local machine using the following command:
```bash
git clone https://github.com/tentjs/starter my-app
```
This command creates a new directory called `my-app` containing the starter project. The directory structure will look like this:
```bash
.
└───my-app
    ├───.github
    │   └───workflows
    └───src
        ├───components
        │   └───counter
        ├───utils
        └───__tests__
```
- **`.github/workflows`**: Contains GitHub Actions workflows for CI/CD.
- **`src/components/counter`**: Holds the counter component code.
- **`src/utils`**: Contains utility functions used throughout the project.
- **`src/__tests__`**: Houses the test files.

### Install dependencies
Change your current working directory to the newly created `my-app` directory. This ensures that all subsequent commands are executed within the context of your project.
```bash
cd my-app
```

Install the necessary dependencies required by the project using npm:
```bash
npm install
```
This command reads the `package.json` file and installs all listed dependencies into the `node_modules` directory. Dependencies include libraries and tools necessary for development and production.

### Start the development server
Launch the development server with the following command:
```bash
npm run watch
```
This command starts a local server and watches for changes in your project files. When a file is modified, the server automatically reloads, allowing you to see your changes in real-time.