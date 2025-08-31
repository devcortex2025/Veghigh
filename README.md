# Welcome to your Lovable project

## Project info

**URL**: lovable.dev/projects/5f2e4ed8-c69e-4585-a97a-b5f0f5a21b9a

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/5f2e4ed8-c69e-4585-a97a-b5f0f5a21b9a) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/5f2e4ed8-c69e-4585-a97a-b5f0f5a21b9a) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
# VegHigh - Fresh Vegetable Marketplace

A modern React-based website for fresh vegetable marketplace with automatic deployment capabilities.

## 🚀 Live Website

**🌐 Visit:** [https://veghigh.in](https://veghigh.in)

The website automatically deploys when you push changes to the main branch.

## 🛠️ Development

### Prerequisites
- Node.js 18 or higher
- npm

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at `http://localhost:8081/`

## 🌐 Deployment Options

This project is configured for automatic deployment with multiple platforms:

### Option 1: GitHub Pages (Recommended)
1. Push your code to GitHub
2. Go to your repository Settings → Pages
3. Select "GitHub Actions" as the source
4. The workflow will automatically deploy on every push to main

### Option 2: Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on every push
3. Configuration is already set in `vercel.json`

### Option 3: Netlify
1. Connect your GitHub repository to Netlify
2. Netlify will automatically deploy on every push
3. Configuration is already set in `netlify.toml`

## 🌐 Custom Domain Setup

This project is configured for the custom domain **veghigh.in**:

- **CNAME file** is included for GitHub Pages
- **Vercel configuration** includes domain settings
- **Base path** is set to root for custom domain compatibility

### Domain Configuration:
- Primary domain: `veghigh.in`
- WWW domain: `www.veghigh.in`
- HTTPS is automatically enabled on all platforms

## 📁 Project Structure

```
veghigh/
├── public/
│   ├── vegetable-image/     # All vegetable images
│   └── VegetablePrices.csv  # Price data
├── src/
│   ├── components/          # React components
│   ├── pages/              # Page components
│   ├── assets/             # Static assets
│   └── lib/                # Utilities
├── .github/workflows/       # GitHub Actions
└── deployment configs       # vercel.json, netlify.toml
```

## 🔧 Build Commands

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📸 Features

- Modern React with TypeScript
- Tailwind CSS styling
- ShadCN UI components
- Responsive design
- Vegetable gallery with images
- CSV-based price data
- Automatic deployment ready

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is open source and available under the MIT License.
`