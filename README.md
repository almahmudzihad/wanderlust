# 🌍 Wanderlust - Travel Destination Booking App

> “Discover amazing places, book unforgettable journeys.”

A modern full-stack travel booking platform built with **Next.js, MongoDB, and Better Auth**.  
Users can explore destinations, book trips, and manage their bookings with secure authentication and smooth UX.

---

## 🚀 Live Demo

- 🌐 Frontend: https://wanderlust-one-tau.vercel.app/
- ⚙️ Backend API: https://wanderlust-server-zeta.vercel.app/
- 📦 GitHub: https://github.com/almahmudzihad/wanderlust

---

## ✨ Features

- 🔐 Google OAuth Authentication
- 🔑 Token-based secure API system (JWT / Better Auth)
- 🌍 Browse travel destinations
- 📄 Destination details page
- 🧳 Booking system
- ❌ Cancel bookings
- ➕ Add new destinations
- 👤 User profile management
- 🌐 Proxy setup for frontend-backend communication
- 🔔 Toast notifications for better UX
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js App Router

---

## 🛠️ Tech Stack

**Frontend:**
- Next.js 16
- React 19
- TailwindCSS 4
- HeroUI
- React Icons
- React Hot Toast

**Backend:**
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Better Auth

**Deployment:**
- Vercel (Frontend + Backend)
- MongoDB Atlas

---

## 🔐 Authentication Flow

1. User logs in using Google OAuth
2. Server generates secure token
3. Token stored on client
4. Token sent with every protected request:

```js
headers: {
  authorization: `Bearer <token>`
}
```