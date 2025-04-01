# Unit API – Avatar Realms Collide (Unofficial)

This is a simple REST API built with **Express** and **TypeScript** that provides access to unit data for the game *Avatar Realms Collide* (unofficial).

---

## 📦 Tech Stack

- TypeScript
- Express.js
- Native ES Modules (ESM)
- [`tsx`](https://github.com/esbuild-kit/tsx) for hot-reloading development

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourname/avatar-realms-collide-unofficial-api.git
cd avatar-realms-collide-unofficial-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Server runs at: http://localhost:3000

## 🛣️ API Endpoints
### GET /api/units

Returns all units.

### GET /api/units/tier/:tier

Returns units filtered by tier (e.g. T1, T2, etc.)

**Example:**

GET /api/units/tier/T3

### GET /api/units/element/:element

Returns units filtered by element (Water, Fire, Earth, Air)

**Example:**

GET /api/units/element/Fire

### GET /api/units/name/:name

Returns a single unit by name.

**Example:**

GET /api/units/name/Sergeant

## 📁 File Structure

```
src/
├── data/           # Contains all unit data
│   └── units.ts
├── routes/         # Route handlers
│   └── units.ts
└── index.ts        # API entry point
```

## 🧠 Notes

This project is unofficial and for educational/reference purposes only.
All data was manually extracted from in-game visuals.