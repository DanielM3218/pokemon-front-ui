# Pokémon Frontend

Frontend application for the Pokémon app built with **React**, **TypeScript**, and **Vite**.

## Setup Instructions

### 1. Clone the Repository

Clone the project repository to your local machine:

```bash
git clone https://github.com/DanielM3218/pokemon-front-ui.git
cd pokemon-front-ui
```

### 2. Prerequisites

Ensure the following tools are installed before running the project:

#### **Node.js & nvm**

The project uses a specific Node.js version, which is specified in the `.nvmrc` file. To use the correct version, follow these steps:

- If you don’t have `nvm` (Node Version Manager) installed, you can install it by following the instructions [here](https://github.com/nvm-sh/nvm#installing-and-updating).

- Once `nvm` is installed, run the following command to switch to the correct Node.js version:

  ```bash
  nvm use
  ```

  This command will automatically use the version specified in the `.nvmrc` file. 

  you should use the version `22.14.0`, to chack that run:

  ```bash
  node -v
  ```

#### **Yarn**

If you haven't already, install **Yarn** globally:

```bash
npm install --global yarn
```

Verify installation:

```bash
yarn --version
```

### 3. Install Dependencies

Install all the required dependencies:

```bash
cd ~/Documents/Projects/pokemon-front-ui
yarn install
```

### 4. Run the Development Server

Start the development server using:

```bash
yarn dev
```

This will launch the app. Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.
