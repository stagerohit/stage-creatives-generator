# Content Asset Generator

Monorepo for the Content Asset Generator platform.

## Structure

- `frontend/` — React + Vite + Tailwind (TypeScript)
- `backend/` — Node.js + Express + MongoDB (TypeScript)
- `shared/` — Shared TypeScript types/interfaces

## Quick Start

1. Copy `.env.example` to `.env` in both `backend/` and `frontend/`.
2. Run `docker-compose up --build` to start MongoDB, backend, and frontend.
3. Access the frontend at [http://localhost:5173](http://localhost:5173) and backend at [http://localhost:3001](http://localhost:3001).

## Tech Stack

- React, Vite, Tailwind CSS, TypeScript
- Node.js, Express, MongoDB, Mongoose, TypeScript
- AWS S3, Runway API
- Docker, GitHub Actions (CI/CD)

## Features

- **Content Management**: Upload and manage video content with metadata, scripts, and trailers
- **AI Asset Generation**: Generate posters, marketing copies, logos, and creative content using AI
- **Multi-Platform Support**: Generate assets in different sizes for various platforms
- **Ad Platform Integration**: Push generated assets directly to Google Ads and Meta Ads
- **Asset Organization**: Organize assets by type with filtering by dimensions and channels

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Node.js, Express, TypeScript, Prisma ORM
- **Database**: PostgreSQL
- **File Storage**: AWS S3 (configurable)
- **AI Integration**: OpenAI API
- **Authentication**: JWT

## Project Structure

```
├── frontend/          # React frontend application
├── backend/           # Node.js backend API
├── docs/             # Documentation
└── shared/           # Shared types and utilities
```

## API Endpoints

The backend provides RESTful APIs for:
- Content management (CRUD operations)
- Asset generation (posters, copies, logos, creative content)
- File uploads (videos, images)
- Platform integrations (Google Ads, Meta Ads)

## Development

- Frontend runs on: http://localhost:5173
- Backend API runs on: http://localhost:3001
- Database runs on: localhost:5432

## Environment Variables

### Backend (.env)
```
DATABASE_URL=postgresql://user:password@localhost:5432/content_assets
JWT_SECRET=your-jwt-secret
OPENAI_API_KEY=your-openai-api-key
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_REGION=us-east-1
AWS_S3_BUCKET=your-s3-bucket
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=Content Asset Generator
``` 