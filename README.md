<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Backend - Country Info App</title>
</head>
<body>
    <h1>Backend - Country Info App</h1>
    <p>
        This backend service is built using <strong>Node.js</strong> and <strong>Express.js</strong>. It provides a REST API to fetch information about countries, such as bordering countries, population data, and the country flag. The backend serves as a data provider for the frontend, fetching data from external APIs.
    </p>
    <h2>Features</h2>
    <ul>
        <li>Fetch available countries from the Nager API.</li>
        <li>Provide detailed information for a selected country, including bordering countries, population data, and flag.</li>
        <li>Use modern coding standards with TypeScript, ESLint, and Prettier for consistency and type safety.</li>
    </ul>
    <h2>Tech Stack</h2>
    <ul>
        <li><strong>Backend:</strong> Node.js, Express.js, Axios</li>
        <li><strong>TypeScript:</strong> Provides type safety and enhanced developer experience</li>
        <li><strong>Linting and Formatting:</strong> ESLint, Prettier</li>
    </ul>
    <h2>Prerequisites</h2>
    <p>Ensure you have the following installed:</p>
    <ul>
        <li><strong>Node.js:</strong> <a href="https://nodejs.org/" target="_blank">Download Node.js</a></li>
        <li><strong>npm:</strong> Node package manager (comes with Node.js)</li>
        <li><strong>TypeScript:</strong> Install globally if you haven't: <code>npm install -g typescript</code></li>
    </ul>
    <h2>Installation</h2>
    <p>Follow these steps to set up the backend:</p>
    <h3>1. Clone the Repository</h3>
    <pre><code>git clone https://github.com/your-username/country-info-app.git
cd country-info-app/backend
    </code></pre>
    <h3>2. Install Dependencies</h3>
    <p>Navigate to the backend directory and install the required dependencies:</p>
    <pre><code>npm install</code></pre>
    <h3>3. Create the <code>.env</code> File</h3>
    <p>Create a <code>.env</code> file in the <code>backend</code> directory and add the following environment variables:</p>
    <pre><code>NAGER_API_URL=https://date.nager.at/api/v3
COUNTRIES_API_URL=https://countriesnow.space/api/v0.1
PORT=4000
    </code></pre>
    <h2>Running the Backend</h2>
    <h3>1. Run the Backend Server</h3>
    <p>To start the backend server, run the following command:</p>
    <pre><code>npm start</code></pre>
    <p>This will start the server at <code>http://localhost:4000</code>.</p>
    <h2>Code Quality Tools</h2>
    <p>The backend uses ESLint and Prettier to ensure consistent code quality and formatting.</p>
    <h3>1. Run ESLint</h3>
    <p>To check for linting errors, run:</p>
    <pre><code>npm run lint</code></pre>
    <p>To automatically fix linting issues, run:</p>
    <pre><code>npm run lint:fix</code></pre>
    <h3>2. Run Prettier</h3>
    <p>To format the code with Prettier, run:</p>
    <pre><code>npm run format</code></pre>
    <h2>Git Workflow</h2>
    <h3>1. Initialize Git (if not already initialized)</h3>
    <p>If you haven't initialized Git in your project yet, run:</p>
    <pre><code>git init</code></pre>
    <h3>2. Commit Changes</h3>
    <p>Stage your changes:</p>
    <pre><code>git add .</code></pre>
    <p>Commit them with a message:</p>
    <pre><code>git commit -m "Initial commit for backend setup"</code></pre>
    <h3>3. Push to GitHub</h3>
    <p>If you have a GitHub repository, you can push your changes:</p>
    <pre><code>git remote add origin https://github.com/your-username/your-repository.git
git branch -M main
git push -u origin main
    </code></pre>
    <h2>Project Structure</h2>
    <p>Here’s the backend project structure:</p>
    <pre><code>backend/
├── src/
│   ├── index.ts               # Main server setup
│   ├── routes/
│   └── services/
├── .env                        # Environment variables
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── .eslintrc.json              # ESLint configuration
├── .prettierrc                 # Prettier configuration
├── .gitignore                  # Files ignored by Git
</code></pre>
    <h2>Additional Information</h2>
    <p>
        This backend service integrates with external APIs to provide country data. It follows modern TypeScript and JavaScript standards. Use the included code quality tools to ensure consistent style and avoid common errors. If you encounter any issues or have questions, feel free to contribute or open an issue in the GitHub repository.
    </p>
</body>
</html>
