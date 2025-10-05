# 🚀 TypeScript Express Boilerplate

A production-ready backend starter built with **TypeScript + Express**. Includes authentication, Prisma ORM, validation, logging, Swagger docs, and opinionated code quality tooling.

---

## ✨ Features

- ✅ **TypeScript** - Type-safe development with modern JavaScript
- ✅ **Express.js** - Fast, minimalist web framework
- ✅ **Prisma ORM** - Next-generation ORM for PostgreSQL
- ✅ **JWT Authentication** - Secure token-based auth (Access + Refresh ready)
- ✅ **Joi Validation** - Request validation middleware
- ✅ **Winston Logger** - Structured logging with file rotation
- ✅ **Morgan** - HTTP request logger
- ✅ **Helmet** - Security headers middleware
- ✅ **CORS** - Cross-origin resource sharing
- ✅ **ESLint + Prettier** - Code quality and formatting
- ✅ **Modular Architecture** - Clean, scalable folder structure

---

## 📦 Project Structure

```
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── controllers/       # Request handlers
│   ├── routes/            # API routes
│   ├── services/          # Business logic
│   ├── middlewares/       # Custom middleware
│   ├── utils/             # Helper functions
│   ├── models/            # Type definitions
│   ├── app.ts             # Express app setup
│   └── server.ts          # Server entry point
├── .env.example
├── .eslintrc.js
├── .prettierrc
├── tsconfig.json
└── package.json
```

---

## 🔧 Prerequisites

Before you begin, ensure you have:

- **Node.js** v18+ ([Download](https://nodejs.org/))
- **npm** or **yarn**
- **PostgreSQL** installed and running locally or remotely

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/hilalahmad0101/typescript-express-boilerplate.git
cd typescript-express-boilerplate
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file from the example:

```bash
cp .env.example .env
```

Update the following variables:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
DATABASE_URL="postgresql://username:password@localhost:5432/myappdb?schema=public"

# JWT
JWT_SECRET=your_super_secret_key_change_this
JWT_EXPIRES_IN=1h
JWT_REFRESH_SECRET=your_refresh_secret_key
JWT_REFRESH_EXPIRES_IN=7d

# Logging
LOG_LEVEL=info
```

### 4. Set Up PostgreSQL

Ensure PostgreSQL is running on your machine. Create a database:

```bash
psql -U postgres
CREATE DATABASE myappdb;
\q
```

### 5. Initialize Prisma

Generate Prisma Client and run migrations:

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev --name init

# (Optional) Open Prisma Studio to view data
npx prisma studio
```

### 6. Start the Development Server

```bash
npm run dev
```

The server will start at `http://localhost:5000` with hot-reload enabled.

---

## 📘 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with auto-reload |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Run production build |

---

## 🔌 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### Authentication Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/auth/register` | Register new user | No |
| `POST` | `/auth/login` | Login user | No |
| `POST` | `/auth/refresh` | Refresh access token | No |
| `GET` | `/auth/me` | Get current user | Yes |

### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | API health check |

---

## 📖 API Documentation

Interactive Swagger documentation is available at:

```
http://localhost:5000/api-docs
```

Explore and test all API endpoints directly from your browser.

---

## 🔐 Authentication

This boilerplate uses JWT (JSON Web Tokens) for authentication.

### Protected Routes

Use the `authenticate` middleware to protect routes:

```typescript
import { authenticate } from './middlewares/auth.middleware';

router.get('/protected', authenticate, protectedController);
```

### Token Flow

1. **Register/Login** - Receive access token and refresh token
2. **Access Token** - Use in `Authorization: Bearer <token>` header
3. **Refresh Token** - Exchange for new access token when expired

---

## 🧪 Example Request

### Register User

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "SecurePass123!",
    "name": "John Doe"
  }'
```

### Login

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "SecurePass123!"
  }'
```

---

## 🛡️ Security Features

- **Helmet** - Sets security HTTP headers
- **CORS** - Configured for cross-origin requests
- **Rate Limiting** - (Ready to be implemented)
- **Input Validation** - Joi schemas for all inputs
- **Password Hashing** - Bcrypt for secure password storage
- **JWT Tokens** - Secure authentication mechanism

---

## 🎨 Code Quality

### ESLint

Linting is configured with TypeScript-specific rules:

```bash
npm run lint
```
## 📊 Database Management

### Prisma Commands

```bash
# Generate Prisma client after schema changes
npx prisma generate

# Create a new migration
npx prisma migrate dev --name migration_name

# Apply migrations in production
npx prisma migrate deploy

# Open Prisma Studio (Database GUI)
npx prisma studio

# Reset database (WARNING: Deletes all data)
npx prisma migrate reset
```

### Schema Location

Edit your database schema in:
```
prisma/schema.prisma
```

---

## 🚀 Production Deployment

### 1. Build the Application

```bash
npm run build
```

### 2. Set Environment Variables

Ensure production environment variables are set:
- `NODE_ENV=production`
- `DATABASE_URL` (production database)
- Strong `JWT_SECRET` values

### 3. Run Migrations

```bash
npx prisma migrate deploy
```

### 4. Start the Server

```bash
npm start
```

### Recommended Production Setup

- Use a process manager like **PM2**
- Set up **Nginx** as reverse proxy
- Enable **HTTPS** with SSL certificates
- Configure proper logging and monitoring
- Use environment-specific `.env` files

---

## 🗂️ Next Steps

Here are some recommended enhancements:

- [ ] **Refresh Token Storage** - Implement Redis or database-based refresh tokens
- [ ] **Role-Based Access Control (RBAC)** - Add user roles and permissions
- [ ] **Email Service** - Add email verification and password reset
- [ ] **Rate Limiting** - Protect against brute force attacks
- [ ] **Database Seeding** - Create seed scripts for development data
- [ ] **Testing** - Add Jest/Supertest for unit and integration tests
- [ ] **CI/CD Pipeline** - Automate testing and deployment
- [ ] **File Uploads** - Integrate Multer or cloud storage
- [ ] **WebSockets** - Add real-time capabilities with Socket.io
- [ ] **API Versioning** - Implement versioned API endpoints

---

## 📝 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📧 Support

For issues and questions, please open an issue on GitHub.

---

**Happy Coding! 🎉**