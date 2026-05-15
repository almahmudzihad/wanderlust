# 🌍 Wanderlust Travel App

> “Discover amazing places, book unforgettable journeys.”

A modern full-stack travel booking platform built with Next.js, MongoDB, and Better Auth.
# 🌍 Wanderlust - Travel Destination Booking App

A modern full-stack travel booking platform built with **Next.js, MongoDB, Better Auth, and TailwindCSS**.  
Users can explore destinations, book trips, and manage their bookings with secure authentication and smooth UI experience.

---

## 🚀 Live Demo

- 🌐 Frontend: https://wanderlust-one-tau.vercel.app/
- ⚙️ Backend API: https://wanderlust-server-zeta.vercel.app/
- 📦 GitHub: https://github.com/almahmudzihad/wanderlust

---

## ✨ Features

- 🔐 Google OAuth Authentication
- 🔑 Token-based secure API authentication (JWT / Better Auth)
- 🌍 Browse travel destinations
- 📄 Destination details page
- 🧳 Book travel packages
- ❌ Cancel bookings
- ➕ Add new destinations
- 👤 User profile page
- 🌐 Proxy setup for frontend-backend communication (CORS handling)
- 🔔 Toast notifications for user feedback
- 📱 Fully responsive UI (mobile + desktop)
- ⚡ Fast performance with Next.js App Router

---

## 🛠️ Tech Stack

### Frontend
- Next.js 16
- React 19
- TailwindCSS 4
- HeroUI
- React Icons
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Better Auth (Session + Token management)

### Authentication
- Google OAuth login system
- Secure token-based authorization
- Protected API routes using Bearer token

### Deployment
- Frontend: Vercel
- Backend: Vercel
- Database: MongoDB Atlas

---

## 🔐 Authentication Flow

1. User logs in via Google OAuth
2. Server generates authentication token
3. Token stored on client
4. Every protected request includes token:

```js
headers: {
  authorization: `Bearer <token>`
}

## 