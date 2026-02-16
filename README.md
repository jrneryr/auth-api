# Auth API

Authentication API built with the goal of learning and applying modern authentication practices in back-end applications.

## Goal

Study and implement authentication in a secure and scalable way, using best practices from the Node.js ecosystem.

## Stack

- **[NestJS](https://nestjs.com/)** — Modular and scalable back-end framework
- **[Prisma 7](https://www.prisma.io/)** — Type-safe ORM with driver adapter (`@prisma/adapter-pg`)
- **[PostgreSQL](https://www.postgresql.org/)** — Relational database
- **[Docker](https://www.docker.com/)** — Database container
- **TypeScript** — Static typing

## Endpoints

| Method | Route          | Description         |
| ------ | -------------- | ------------------- |
| POST   | `/auth/signup` | Register a new user |
| POST   | `/auth/signin` | User login          |

## Prerequisites

- Node.js v20+
- Docker and Docker Compose

## Getting started

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root with the required variables:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/db_name
DB_USER=user
DB_PASSWORD=password
DB_NAME=db_name
```

3. Start the database with Docker:

```bash
docker compose up -d
```

4. Run migrations and generate the Prisma Client:

```bash
npx prisma migrate dev
npx prisma generate
```

5. Start the application in development mode:

```bash
npm run start:dev
```

The API will be available at `http://localhost:3000`.

## Useful scripts

| Command              | Description            |
| -------------------- | ---------------------- |
| `npm run start:dev`  | Start in watch mode    |
| `npm run build`      | Build the project      |
| `npm run start:prod` | Start production build |
| `npm run lint`       | Run the linter         |
| `npm run test`       | Run tests              |

## Project structure

```
src/
├── main.ts                  # Application bootstrap
├── app.module.ts            # Root module
├── auth/
│   ├── auth.controller.ts   # Authentication routes
│   ├── auth.service.ts      # Authentication logic
│   ├── auth.module.ts       # Auth module
│   └── dtos/
│       └── auth.ts          # SignUpDTO and SignInDTO interfaces
└── prisma/
    └── prisma.service.ts    # Prisma Client service
```

## Next steps

- [ ] Password hashing with bcrypt/argon2
- [ ] JWT generation and validation
- [ ] Refresh tokens
- [ ] NestJS authentication guards
- [ ] Input validation with class-validator
- [ ] Unit and e2e tests

## License

Project for learning purposes.
