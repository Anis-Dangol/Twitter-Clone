[Live Demo](https://twitter-clone-1-xgt4.onrender.com/login)

**Demo User:**

- Username: `Steve`
- Password: `12345678`

# Twitter Clone

A full-stack Twitter clone built with React (frontend), Node.js/Express (backend), and MongoDB. This project allows users to sign up, log in, create posts (with images and emojis), follow/unfollow users, edit their profile (including profile and cover images), and view notifications.

## Features

- User authentication (JWT-based)
- Create, edit, and delete posts (with image upload and emoji support)
- Follow and unfollow users
- Edit profile (update avatar, cover image, bio, link, etc.)
- View user profiles and posts
- Notifications for follows
- Responsive UI with modern design

## Tech Stack

- **Frontend:** React, React Router, React Query, Tailwind CSS, Emoji Picker, Cloudinary (for image uploads)
- **Backend:** Node.js, Express, MongoDB, Mongoose, Cloudinary
- **Authentication:** JWT

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB Atlas account (or local MongoDB)
- Cloudinary account (for image uploads)

### Environment Variables

Create a `.env` file in the root and add:

```
MONGO_URI=your_mongodb_uri
PORT=5000
JWT_SECRET=your_jwt_secret
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Installation

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd Twitter\ Clone
   ```
2. **Install backend dependencies:**
   ```sh
   cd backend
   npm install
   ```
3. **Install frontend dependencies:**
   ```sh
   cd ../frontend
   npm install
   ```

### Running the App

1. **Start the backend:**
   ```sh
   cd backend
   npm run dev
   ```
2. **Start the frontend:**
   ```sh
   cd ../frontend
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Folder Structure

- `backend/` - Express API, controllers, models, routes
- `frontend/` - React app, components, pages, hooks, utils
- `frontend/public/` - Static assets (avatars, backgrounds, etc.)

## Customization

- Add more avatars/backgrounds in `frontend/public/avatars` and `frontend/public/background`.
- Update styles in `frontend/src/index.css`.

## License

This project is for educational purposes only. Not affiliated with Twitter.
