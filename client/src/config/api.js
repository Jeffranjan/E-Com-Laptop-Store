// API Configuration
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    REGISTER: `${API_BASE_URL}/auth/register`,
    LOGIN: `${API_BASE_URL}/auth/login`,
    LOGOUT: `${API_BASE_URL}/auth/logout`,
    CHECK_AUTH: `${API_BASE_URL}/auth/check-auth`,
  },

  // Admin endpoints
  ADMIN: {
    PRODUCTS: {
      UPLOAD_IMAGE: `${API_BASE_URL}/admin/products/upload-image`,
      ADD: `${API_BASE_URL}/admin/products/add`,
      GET_ALL: `${API_BASE_URL}/admin/products/get`,
      EDIT: (id) => `${API_BASE_URL}/admin/products/edit/${id}`,
      DELETE: (id) => `${API_BASE_URL}/admin/products/delete/${id}`,
    },
    ORDERS: {
      GET_ALL: `${API_BASE_URL}/admin/orders/get`,
      GET_DETAILS: (id) => `${API_BASE_URL}/admin/orders/details/${id}`,
      UPDATE: (id) => `${API_BASE_URL}/admin/orders/update/${id}`,
    },
  },

  // Shop endpoints
  SHOP: {
    PRODUCTS: {
      GET_FILTERED: `${API_BASE_URL}/shop/products/get`,
      GET_DETAILS: (id) => `${API_BASE_URL}/shop/products/get/${id}`,
    },
    CART: {
      ADD: `${API_BASE_URL}/shop/cart/add`,
      GET: (userId) => `${API_BASE_URL}/shop/cart/get/${userId}`,
      UPDATE: `${API_BASE_URL}/shop/cart/update-cart`,
      DELETE: (userId, productId) =>
        `${API_BASE_URL}/shop/cart/${userId}/${productId}`,
    },
    ADDRESS: {
      ADD: `${API_BASE_URL}/shop/address/add`,
      GET: (userId) => `${API_BASE_URL}/shop/address/get/${userId}`,
      UPDATE: (userId, addressId) =>
        `${API_BASE_URL}/shop/address/update/${userId}/${addressId}`,
      DELETE: (userId, addressId) =>
        `${API_BASE_URL}/shop/address/delete/${userId}/${addressId}`,
    },
    ORDER: {
      CREATE: `${API_BASE_URL}/shop/order/create`,
      CAPTURE: `${API_BASE_URL}/shop/order/capture`,
      GET_BY_USER: (userId) => `${API_BASE_URL}/shop/order/list/${userId}`,
      GET_DETAILS: (id) => `${API_BASE_URL}/shop/order/details/${id}`,
    },
    REVIEW: {
      ADD: `${API_BASE_URL}/shop/review/add`,
      GET: (productId) => `${API_BASE_URL}/shop/review/${productId}`,
    },
    SEARCH: (keyword) => `${API_BASE_URL}/shop/search/${keyword}`,
  },

  // Common endpoints
  COMMON: {
    FEATURE: {
      ADD: `${API_BASE_URL}/common/feature/add`,
      GET: `${API_BASE_URL}/common/feature/get`,
    },
  },
};

export default API_BASE_URL;
