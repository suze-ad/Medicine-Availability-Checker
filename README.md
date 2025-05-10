# Medicine Availability Checker

A real-time platform for checking medicine availability across multiple pharmacies.

## Features
- Real-time medicine availability checking
- Pharmacy location-based search
- Pharmacy inventory management
- Pharmacy authentication

## Tech Stack
- Frontend: Next.js with javascript
- Backend: Node.js with Express
- Database: MongoDB
- Authentication: JWT

## Project Structure
```
integrated/
├── client/                 # Frontend Next.js application
├── server/                 # Backend Node.js application
├── docs/                   # Documentation
└── README.md              # Project documentation
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables:
   - Create `.env` file in server directory
   - Create `.env.local` file in client directory

4. Start the development servers:
   ```bash
   # Start backend server
   cd server
   npm run dev

   # Start frontend server
   cd ../client
   npm run dev
   ```

## API Documentation
API documentation is available at `/api-docs` when running the server.

## Contributing
Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests. 