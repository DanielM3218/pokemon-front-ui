

```markdown
# Pokémon Frontend Application

This is a React TypeScript application that displays information about Pokémon. The app communicates with a backend API to retrieve and show the Pokémon data.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A statically typed superset of JavaScript that provides optional type checking.
- **Vite**: A modern, fast build tool and development server.
- **Yarn**: A package manager that is fast, reliable, and secure.
- **Node.js**: A JavaScript runtime used for server-side scripting.

## Prerequisites

Before running the app, make sure you have the following tools installed on your machine:

- **Node.js**: You can install Node.js using [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm). Use the `.nvmrc` file to ensure you're using the correct Node.js version.
- **Yarn**: A package manager to install dependencies. You can install it by following the [Yarn installation guide](https://classic.yarnpkg.com/en/docs/install/).

## Getting Started

### 1. Clone the repository

First, clone the repository from GitHub:

```bash
git clone https://github.com/DanielM3218/pokemon-front-ui.git
cd pokemon-front-ui
```

### 2. Install dependencies

Make sure you're using the correct version of Node.js as defined in the `.nvmrc` file. If you're using `nvm`, run:

```bash
nvm install
nvm use
```

Then, install the project dependencies using Yarn:

```bash
yarn install
```

### 3. Run the application

Start the development server:

```bash
yarn dev
```

The app will be accessible in your browser at `http://localhost:3000`. You should see a simple "Hello, World!" message displayed.

## Project Structure

The basic structure of the project is as follows:

- `src/`:
  - `App.tsx`: The main component that renders the app's UI.
  - `main.tsx`: The entry point for the React app.
  - `index.css`: The global styles for the app.

## Development Workflow

- To create a new feature or bug fix, create a new branch from `dev`.
- Commit your changes and push the branch to GitHub.
- Create a pull request (PR) from your feature branch to `dev` for review.
- Once the PR is approved, it will be merged into `dev`.

## License

This project is open-source and available under the [MIT License](LICENSE).

