# 🛒 eCommerce Website

This project is a simple eCommerce website with a Node.js + Express backend storing data in a JSON file and a static frontend.

## 🚀 Setup Instructions

### Backend Setup
```bash
cd backend
npm install
npm start
```
Access at `http://localhost:3000`

### Frontend Setup
- Open `frontend/index.html` directly in your browser.
- Or deploy `/frontend` folder to GitHub Pages.

## 🔄 CRUD API Endpoints
- `GET /products` - list all products
- `GET /products/:id` - get product by id
- `POST /products` - add product
- `PUT /products/:id` - update product
- `DELETE /products/:id` - delete product

## 📦 Project Structure
- `backend/` - Node.js + Express API
- `frontend/` - HTML + JS + CSS static site
- `data.json` - JSON data store

## 💡 Next Steps
- Add product detail page (product.html)
- Add cart system (localStorage or backend)
- Style with CSS/Tailwind
- Deploy backend (Render, Fly.io)
