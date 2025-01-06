## Project Setup

This project is divided into two main parts: the backend (API) and the frontend (Client). Follow the steps below to set up and run the project on your local machine.

## Prerequisites
```bash
Make sure you have the following installed on your machine:
- Node.js
- npm (Node Package Manager)
```
---

## Installation Steps

### Backend Setup (API)
```bash
cd api
npm install
```

### Frontend Setup (Client)
```bash
cd client
npm install
```

---

## Configuration

### Environment Variables

#### Backend (.env in the root)
```bash
MONGO = 'mongodb+srv://ahmedalfey:sani9999@hackathon.rflqj.mongodb.net/UserDB?retryWrites=true&w=majority'
JWT_SECRET = 'ivadhfvuiadhfviahuivyfvIEYR8AYB'
```

#### Frontend (.env in the client)
```bash
VITE_FIREBASE_API_KEY = "AIzaSyBgZ6unZvCYpnqGeSCtxdg8KvHPvmY38eU"
```

---

## Running the Project

After completing the setup, open two separate terminal windows or tabs to run the backend and frontend simultaneously.

### Start the Backend
```bash
cd api
npm run dev
```

### Start the Frontend
```bash
cd client
npm run dev
```

---



## Notes
```bash
- Make sure to replace sensitive information such as API keys and database credentials in the `.env` files before deploying to production.
- For additional help, refer to the documentation or contact the project maintainer.
```

