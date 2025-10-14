// Input validation utilities

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password && password.length >= 6;
};

export const validateRequired = (value) => {
  return value && value.toString().trim().length > 0;
};

export const validatePhoneNumber = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ""));
};

export const validatePincode = (pincode) => {
  const pincodeRegex = /^[0-9]{6}$/;
  return pincodeRegex.test(pincode);
};

export const validateProductForm = (formData) => {
  const errors = {};

  if (!validateRequired(formData.title)) {
    errors.title = "Product title is required";
  }

  if (!validateRequired(formData.description)) {
    errors.description = "Product description is required";
  }

  if (!validateRequired(formData.category)) {
    errors.category = "Category is required";
  }

  if (!validateRequired(formData.brand)) {
    errors.brand = "Brand is required";
  }

  if (!formData.price || formData.price <= 0) {
    errors.price = "Valid price is required";
  }

  if (!formData.totalStock || formData.totalStock < 0) {
    errors.totalStock = "Valid stock quantity is required";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateAddressForm = (formData) => {
  const errors = {};

  if (!validateRequired(formData.address)) {
    errors.address = "Address is required";
  }

  if (!validateRequired(formData.city)) {
    errors.city = "City is required";
  }

  if (!validatePincode(formData.pincode)) {
    errors.pincode = "Valid 6-digit pincode is required";
  }

  if (!validatePhoneNumber(formData.phone)) {
    errors.phone = "Valid phone number is required";
  }

  if (!validateRequired(formData.notes)) {
    errors.notes = "Additional notes are required";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateLoginForm = (formData) => {
  const errors = {};

  if (!validateEmail(formData.email)) {
    errors.email = "Valid email is required";
  }

  if (!validatePassword(formData.password)) {
    errors.password = "Password must be at least 6 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateRegisterForm = (formData) => {
  const errors = {};

  if (!validateRequired(formData.userName)) {
    errors.userName = "Username is required";
  } else if (formData.userName.length < 3) {
    errors.userName = "Username must be at least 3 characters";
  }

  if (!validateEmail(formData.email)) {
    errors.email = "Valid email is required";
  }

  if (!validatePassword(formData.password)) {
    errors.password = "Password must be at least 6 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
