# Mahadev Computers - MERN Stack Laptop Store

A comprehensive e-commerce application for selling laptops and computer accessories built with the MERN stack (MongoDB, Express.js, React, Node.js).

## 🚀 Features

### Customer Features

- ✅ User registration and authentication
- ✅ Product browsing with filtering and sorting
- ✅ Shopping cart management
- ✅ Multiple shipping addresses
- ✅ PayPal payment processing
- ✅ Order tracking and history
- ✅ Product reviews and ratings
- ✅ Search functionality
- ✅ Responsive design

### Admin Features

- ✅ Product management (CRUD)
- ✅ Image upload with Cloudinary
- ✅ Order management and status updates
- ✅ Homepage feature image management
- ✅ User role management
- ✅ Inventory tracking

## 🛠️ Tech Stack

### Backend

- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** authentication with httpOnly cookies
- **Cloudinary** for image storage
- **PayPal** integration for payments
- **bcryptjs** for password hashing

### Frontend

- **React 18** with Vite
- **Redux Toolkit** for state management
- **Radix UI** components with Tailwind CSS
- **React Router DOM** for routing
- **Axios** for HTTP requests

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Cloudinary account
- PayPal developer account

### 1. Clone the repository

```bash
git clone <repository-url>
cd mahadev-computers
```

### 2. Server Setup

```bash
cd server
npm install
```

Create a `.env` file in the server directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/mahadev-computers

# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Secret Key (generate a strong secret)
JWT_SECRET_KEY=your_super_secret_jwt_key_here

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# PayPal Configuration
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
PAYPAL_MODE=sandbox

# Frontend URL
FRONTEND_URL=http://localhost:5173
```

### 3. Client Setup

```bash
cd client
npm install
```

Create a `.env` file in the client directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:5000/api

# Environment
VITE_NODE_ENV=development
```

## 🚀 Running the Application

### Development Mode

1. **Start the server:**

```bash
cd server
npm run dev
```

Server will run on `http://localhost:5000`

2. **Start the client:**

```bash
cd client
npm run dev
```

Client will run on `http://localhost:5173`

### Production Mode

1. **Build the client:**

```bash
cd client
npm run build
```

2. **Start the server:**

```bash
cd server
npm start
```

## 🔐 Environment Variables

### Server (.env)

| Variable                | Description                | Required                            |
| ----------------------- | -------------------------- | ----------------------------------- |
| `MONGODB_URI`           | MongoDB connection string  | ✅                                  |
| `PORT`                  | Server port                | ❌ (default: 5000)                  |
| `JWT_SECRET_KEY`        | JWT signing secret         | ✅                                  |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name      | ✅                                  |
| `CLOUDINARY_API_KEY`    | Cloudinary API key         | ✅                                  |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret      | ✅                                  |
| `PAYPAL_CLIENT_ID`      | PayPal client ID           | ✅                                  |
| `PAYPAL_CLIENT_SECRET`  | PayPal client secret       | ✅                                  |
| `PAYPAL_MODE`           | PayPal mode (sandbox/live) | ❌ (default: sandbox)               |
| `FRONTEND_URL`          | Frontend URL for CORS      | ❌ (default: http://localhost:5173) |

### Client (.env)

| Variable            | Description          | Required                                |
| ------------------- | -------------------- | --------------------------------------- |
| `VITE_API_BASE_URL` | Backend API base URL | ❌ (default: http://localhost:5000/api) |
| `VITE_NODE_ENV`     | Environment mode     | ❌ (default: development)               |

## 📁 Project Structure

```
mahadev-computers/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── store/          # Redux store and slices
│   │   ├── config/         # Configuration files
│   │   ├── utils/          # Utility functions
│   │   └── assets/         # Static assets
│   └── package.json
├── server/                 # Node.js backend
│   ├── controllers/        # Route controllers
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── helpers/            # Utility helpers
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/check-auth` - Check authentication status

### Products

- `GET /api/shop/products/get` - Get filtered products
- `GET /api/shop/products/get/:id` - Get product details
- `POST /api/admin/products/add` - Add new product (Admin)
- `PUT /api/admin/products/edit/:id` - Edit product (Admin)
- `DELETE /api/admin/products/delete/:id` - Delete product (Admin)

### Cart

- `POST /api/shop/cart/add` - Add item to cart
- `GET /api/shop/cart/get/:userId` - Get user's cart
- `PUT /api/shop/cart/update-cart` - Update cart item
- `DELETE /api/shop/cart/:userId/:productId` - Remove item from cart

### Orders

- `POST /api/shop/order/create` - Create new order
- `POST /api/shop/order/capture` - Capture PayPal payment
- `GET /api/shop/order/list/:userId` - Get user's orders
- `GET /api/admin/orders/get` - Get all orders (Admin)

## 🎨 User Roles

### Regular User

- Browse and search products
- Add items to cart
- Place orders
- Manage addresses
- Write reviews
- Track orders

### Admin User

- Manage products (CRUD)
- Manage orders and status
- Upload feature images
- View all user orders

## 🛡️ Security Features

- JWT authentication with httpOnly cookies
- Password hashing with bcryptjs
- CORS configuration
- Input validation
- Environment variable protection
- Error boundaries for graceful error handling

## 📱 Responsive Design

The application is fully responsive and works on:

- Desktop computers
- Tablets
- Mobile phones

## 🐛 Troubleshooting

### Common Issues

1. **Environment Variables Not Loading**

   - Ensure `.env` files are in the correct directories
   - Restart the development server after adding new variables

2. **MongoDB Connection Issues**

   - Check if MongoDB is running
   - Verify the connection string in `MONGODB_URI`

3. **Cloudinary Upload Issues**

   - Verify Cloudinary credentials
   - Check if the image file is valid

4. **PayPal Payment Issues**
   - Ensure PayPal sandbox credentials are correct
   - Check if PayPal mode is set to "sandbox" for testing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Sangam Mukherjee**

---

## 🔄 Recent Updates

### Security Improvements

- ✅ Moved all secrets to environment variables
- ✅ Added input validation
- ✅ Improved error handling
- ✅ Added error boundaries

### Code Quality

- ✅ Fixed spelling errors
- ✅ Removed debug console statements
- ✅ Added proper React keys
- ✅ Improved loading states

### Performance

- ✅ Centralized API configuration
- ✅ Added error boundaries
- ✅ Optimized component rendering
- ✅ Better error handling
