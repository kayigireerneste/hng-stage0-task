HNG Stage 0 Task - Public API

A simple public API built with Node.js and Express for the HNG Stage 0 Task. The API returns basic information in JSON format, including your email, the current datetime in ISO 8601 format, and the GitHub URL of the project.


Production: https://hng-stage0-task-smoky.vercel.app/API

Endpoint
GET /api

Response Format

{
  "email": "your-email@example.com",
  "current_datetime": "2023-10-05T12:34:56.789Z",
  "github_url": "https://github.com/yourusername/your-repo"
}

Setup Instructions

1. Clone the Repository

git clone https://github.com/yourusername/your-repo.git
cd your-repo

2. Install Dependencies

npm install

3. Set Up Environment Variables
Create a .env file:

PORT=3000

4. Run the Application

npm run dev
The server will start at http://localhost:3000.

Deployment
Deploy to Vercel

Install Vercel CLI:

npm install -g vercel
Log in to Vercel:

vercel login
Deploy:

vercel --prod
Set environment variables in the Vercel dashboard:

EMAIL: Your registered email.

GITHUB_URL: The URL of your GitHub repository.

Project Structure
Copy
your-repo/
├── app.js               # Main API code
├── .env                 # Environment variables
├── .gitignore           # Ignore .env file
├── package.json         # Project dependencies
├── README.md            # Project documentation
├── vercel.json          # Vercel configuration
└── node_modules/        # Installed dependencies
Dependencies
express: Web framework.

cors: Middleware for enabling CORS.

dotenv: Loads environment variables.

Author
KAYIGIRE Erneste

Email: kayigireerneste@gmail.com

GitHub: kayigireerneste