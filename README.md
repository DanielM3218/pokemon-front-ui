
# Pokemon Frontend

Frontend application for the Pokémon app built with **React**, **TypeScript**, and **Vite**.

## Prerequisites

Before running the project, ensure you have the following installed:

### 1. **Node.js (v22.14.0)**

Follow these steps to install and use **Node.js v22.14.0**:

#### Install `nvm` (Node Version Manager)

If you don’t have `nvm` installed, you can install it by running the following command in your terminal:

For **macOS/Linux**:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

For **Windows**, follow the installation guide in the [nvm-windows repository](https://github.com/coreybutler/nvm-windows).

Once `nvm` is installed, restart your terminal or run the following to load `nvm`:

```bash
source ~/.bashrc  # or source ~/.zshrc for zsh users
```

#### Install Node.js v22.14.0

After `nvm` is installed, run the following command to install Node version **22.14.0**:

```bash
nvm install 22.14.0
```

#### Switch to Node v22.14.0

To make sure you're using **Node v22.14.0**, run:

```bash
nvm use 22.14.0
```

#### Verify the Installed Version

Check if the correct version is being used:

```bash
node -v
```

It should return:

```
v22.14.0
```

#### Set Node v22.14.0 as Default (Optional)

If you want to ensure that **Node v22.14.0** is used by default every time you start a new terminal session, run:

```bash
nvm alias default 22.14.0
```

#### Update `.nvmrc` for Project Consistency

To ensure that everyone working on this project uses **Node v22.14.0**, add the version to an `.nvmrc` file:

```bash
echo "22.14.0" > .nvmrc
```

This way, anyone working on the project can simply run:

```bash
nvm use
```

and `nvm` will automatically switch to the correct Node version.

### 2. **Yarn**

Install Yarn globally if you haven't already:

```bash
npm install --global yarn
```

Verify installation:

```bash
yarn --version
```

## Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/DanielM3218/pokemon-frontend.git
cd pokemon-frontend
```

2. **Install Dependencies**

```bash
yarn install
```

3. **Run the Development Server**

```bash
yarn dev
```

This starts the Vite server. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

---