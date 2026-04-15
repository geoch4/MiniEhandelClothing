import { createContext, useState, useCallback } from "react";

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [errors, setErrors] = useState([]);

  const addError = useCallback((code, message, details = {}) => {
    const error = {
      id: Date.now(),
      code,
      message,
      details,
      timestamp: new Date()
    };
    
    setErrors(prev => [...prev, error]);
    
    setTimeout(() => {
      removeError(error.id);
    }, 5000);

    return error;
  }, []);

  const removeError = useCallback((id) => {
    setErrors(prev => prev.filter(e => e.id !== id));
  }, []);

  const clearErrors = useCallback(() => {
    setErrors([]);
  }, []);

  return (
    <ErrorContext.Provider value={{ errors, addError, removeError, clearErrors }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const ERROR_MESSAGES = {
  PRODUCT_NOT_FOUND: {
    message: "Product not found",
    details: "We could not find the product you were looking for."
  },
  OUT_OF_STOCK: {
    message: "Product out of stock",
    details: "This product is currently unavailable."
  },
  INVALID_QUANTITY: {
    message: "Invalid quantity",
    details: "You must select at least 1 product."
  },
  CHECKOUT_ERROR: {
    message: "Payment failed",
    details: "An error occurred during checkout. Please try again."
  },
  CART_EMPTY: {
    message: "Your cart is empty",
    details: "You need to add products before checking out."
  },
  FORM_VALIDATION: {
    message: "Form error",
    details: "Please fill in all required fields."
  },
  NETWORK_ERROR: {
    message: "Connection error",
    details: "It looks like your internet connection is unavailable."
  },
  SERVER_ERROR: {
    message: "Server error",
    details: "Something went wrong on the server. Please try again later."
  }
};
