
# Task Manager API

A learning project built with **Node.js**, **Express.js**, and **PostgreSQL (Neon)**.  
This API demonstrates authentication, middleware, and CRUD operations with a structured backend layout.

---

## Tech Stack

- Node.js – Runtime environment
- Express.js – Web framework
- PostgreSQL (Neon) – Cloud-hosted relational database
- pg / ORM (Sequelize/Prisma) – Database integration
- JWT – Authentication
- bcrypt – Password hashing
- dotenv – Environment variables
- nodemon – Development utility

---

## Features

- User registration and login with JWT authentication
- Passwords stored securely with hashing
- CRUD operations for tasks
- Middleware for authentication and error handling
- Modular and structured project layout

---

## Project Structure

```

task-manager-api/
│
├── config/              # Database configuration
├── controllers/         # Request handlers
│   ├── authController.js
│   ├── taskController.js
├── middleware/          # JWT auth, error handling
├── models/              # Database models
├── routes/              # Route definitions
│   ├── authRoutes.js
│   ├── taskRoutes.js
├── services/            # Business logic
├── index.js             # App entry point
├── .env                 # Environment variables
└── package.json

````

---

## API Endpoints

### Register
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"secret"}'
````

### Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"secret"}'
```

### Create Task

```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <TOKEN>" \
  -d '{"title":"My first task","body":"Learn Express & Postgres"}'
```

### Get Tasks

```bash
curl http://localhost:3000/api/tasks \
  -H "Authorization: Bearer <TOKEN>"
```

### Update Task

```bash
curl -X PUT http://localhost:3000/api/tasks/<TASK_ID> \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <TOKEN>" \
  -d '{"title":"Updated task","completed":true}'
```

### Delete Task

```bash
curl -X DELETE http://localhost:3000/api/tasks/<TASK_ID> \
  -H "Authorization: Bearer <TOKEN>"
```

---

## Strengths

* Clear and modular codebase
* Secure authentication with JWT
* Persistent storage using Neon Postgres
* Beginner-friendly but extendable

---

## Weaknesses

* Basic error handling
* No input validation
* No unit tests
* Single environment config
* Manual testing only (curl/Postman)

---

## Learning Objectives

* Set up an Express server
* Connect to a Neon Postgres database
* Implement authentication and middleware
* Build CRUD APIs with structured code
* Test APIs with curl/Postman

---

## Common Issues

* **400 Bad Request** → Ensure JSON body and correct headers
* **403 Unauthorized** → Missing or invalid JWT token
* **Port already in use** → Stop other services or change port
* **Database connection error** → Verify `.env` `DATABASE_URL`

---

## Next Steps

* Add input validation (Joi/Zod)
* Write tests (Jest/Mocha)
* Add Docker support
* Deploy to cloud hosting

---