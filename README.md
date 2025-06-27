# Custom Status Dashboard

A simple React application that allows users to enter short status updates, categorize them, and view their 5 most recent updates. Styled with CSS Modules.

## Features

- Input form for status updates with category selection
- Display of the 5 most recent updates
- Updates include status text, category badge, and timestamp
- Form validation to prevent empty submissions
- Character limit (100) for status updates
- Styled with CSS Modules for component-scoped styling

## Project Setup

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm start
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## CSS Modules

This project uses CSS Modules for styling, which provides:
- Local scoping of CSS class names
- Reusable styling without naming conflicts
- Easy composition of styles

The main CSS files are:
- `src/index.css` - Global styles
- `src/StatusDashboard.module.css` - Component-specific styles

## Deployment Options

### Option 1: Deploy to GitHub Pages

1. **Install GitHub Pages package**:
   ```bash
   npm install --save gh-pages
   ```

2. **Add to package.json**:
   ```json
   "homepage": "https://yourusername.github.io/custom-status-dashboard",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build",
     ...
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

### Option 2: Deploy to Netlify

1. **Create a production build**:
   ```bash
   npm run build
   ```

2. **Deploy via Netlify UI**:
   - Sign up/login at netlify.com
   - Drag and drop the `build` folder
   
   Or connect to a Git repository:
   - Click "New site from Git"
   - Connect to your repository
   - Build command: `npm run build`
   - Publish directory: `build`

### Option 3: Deploy to Vercel

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

### Option 4: Deploy to Firebase Hosting

1. **Install Firebase tools**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**:
   ```bash
   firebase login
   firebase init
   ```
   - Select "Hosting"
   - Set public directory to "build"
   - Configure as single-page app

3. **Deploy**:
   ```bash
   npm run build
   firebase deploy
   ```

## Implementation Details

- Uses React hooks (useState) for state management
- CSS Modules for component-scoped styling
- Follows the requirements of displaying only the 5 most recent updates
- Form validation and input trimming
