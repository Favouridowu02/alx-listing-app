// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api',
  TIMEOUT: 10000, // 10 seconds
  RETRY_ATTEMPTS: 3,
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  // Listings
  LISTINGS: '/listings',
  LISTING_BY_ID: (id: string) => `/listings/${id}`,
  SEARCH_LISTINGS: '/listings/search',
  FEATURED_LISTINGS: '/listings/featured',
  
  // Users
  USERS: '/users',
  USER_PROFILE: (id: string) => `/users/${id}`,
  USER_LISTINGS: (id: string) => `/users/${id}/listings`,
  
  // Bookings
  BOOKINGS: '/bookings',
  BOOKING_BY_ID: (id: string) => `/bookings/${id}`,
  USER_BOOKINGS: (userId: string) => `/users/${userId}/bookings`,
  
  // Reviews
  REVIEWS: '/reviews',
  LISTING_REVIEWS: (listingId: string) => `/listings/${listingId}/reviews`,
  
  // Authentication
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  REFRESH_TOKEN: '/auth/refresh',
} as const;

// UI Text Constants
export const UI_TEXT = {
  // Common
  LOADING: 'Loading...',
  ERROR: 'Something went wrong',
  SUCCESS: 'Success!',
  CONFIRM: 'Confirm',
  CANCEL: 'Cancel',
  SAVE: 'Save',
  DELETE: 'Delete',
  EDIT: 'Edit',
  VIEW: 'View',
  
  // Navigation
  HOME: 'Home',
  LISTINGS: 'Listings',
  BOOKINGS: 'My Bookings',
  PROFILE: 'Profile',
  SIGN_IN: 'Sign In',
  SIGN_OUT: 'Sign Out',
  REGISTER: 'Register',
  
  // Listings
  LISTING_TITLE: 'Property Listings',
  NO_LISTINGS: 'No listings found',
  SEARCH_PLACEHOLDER: 'Search properties...',
  PRICE_PER_NIGHT: 'per night',
  AVAILABLE_FROM: 'Available from',
  BOOK_NOW: 'Book Now',
  
  // Booking
  BOOKING_CONFIRMED: 'Booking confirmed successfully!',
  BOOKING_CANCELLED: 'Booking cancelled',
  CHECK_IN: 'Check-in',
  CHECK_OUT: 'Check-out',
  GUESTS: 'Guests',
  TOTAL_PRICE: 'Total Price',
  
  // Validation
  REQUIRED_FIELD: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email',
  PASSWORD_MIN_LENGTH: 'Password must be at least 8 characters',
  DATE_REQUIRED: 'Please select a date',
} as const;

// App Configuration
export const APP_CONFIG = {
  APP_NAME: 'ALX Listing App',
  APP_DESCRIPTION: 'Find and book amazing properties',
  DEFAULT_CURRENCY: 'USD',
  DEFAULT_LANGUAGE: 'en',
  ITEMS_PER_PAGE: 12,
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  SUPPORTED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
} as const;

// Route Paths
export const ROUTES = {
  HOME: '/',
  LISTINGS: '/listings',
  LISTING_DETAIL: (id: string) => `/listings/${id}`,
  BOOKINGS: '/bookings',
  BOOKING_DETAIL: (id: string) => `/bookings/${id}`,
  PROFILE: '/profile',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  SEARCH: '/search',
  NOT_FOUND: '/404',
} as const;

// Booking Status
export const BOOKING_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  CANCELLED: 'cancelled',
  COMPLETED: 'completed',
} as const;

// Listing Types
export const LISTING_TYPES = {
  APARTMENT: 'apartment',
  HOUSE: 'house',
  VILLA: 'villa',
  HOTEL: 'hotel',
  CABIN: 'cabin',
  CONDO: 'condo',
} as const;

// User Roles
export const USER_ROLES = {
  GUEST: 'guest',
  HOST: 'host',
  ADMIN: 'admin',
} as const;

// Theme Colors
export const COLORS = {
  PRIMARY: '#3B82F6',
  SECONDARY: '#10B981',
  SUCCESS: '#059669',
  WARNING: '#F59E0B',
  ERROR: '#EF4444',
  INFO: '#3B82F6',
  BACKGROUND: '#F8FAFC',
  TEXT_PRIMARY: '#1F2937',
  TEXT_SECONDARY: '#6B7280',
} as const;

// Breakpoints for responsive design
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'alx_listing_auth_token',
  USER_DATA: 'alx_listing_user_data',
  THEME: 'alx_listing_theme',
  LANGUAGE: 'alx_listing_language',
  SEARCH_HISTORY: 'alx_listing_search_history',
  RECENT_LISTINGS: 'alx_listing_recent_listings',
} as const;

// Date Formats
export const DATE_FORMATS = {
  DISPLAY: 'MMM dd, yyyy',
  API: 'yyyy-MM-dd',
  TIMESTAMP: 'yyyy-MM-dd HH:mm:ss',
  TIME_ONLY: 'HH:mm',
} as const;

// Validation Rules
export const VALIDATION = {
  MIN_PASSWORD_LENGTH: 8,
  MAX_PASSWORD_LENGTH: 128,
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 50,
  MIN_DESCRIPTION_LENGTH: 10,
  MAX_DESCRIPTION_LENGTH: 1000,
  MIN_PRICE: 1,
  MAX_PRICE: 10000,
  MIN_GUESTS: 1,
  MAX_GUESTS: 20,
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  SERVER_ERROR: 'Server error. Please try again later.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  BOOKING_CONFLICT: 'The selected dates are not available.',
  PAYMENT_FAILED: 'Payment failed. Please try again.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  LISTING_CREATED: 'Listing created successfully!',
  LISTING_UPDATED: 'Listing updated successfully!',
  LISTING_DELETED: 'Listing deleted successfully!',
  BOOKING_CREATED: 'Booking created successfully!',
  BOOKING_CANCELLED: 'Booking cancelled successfully!',
  PROFILE_UPDATED: 'Profile updated successfully!',
  PASSWORD_CHANGED: 'Password changed successfully!',
} as const;

// Feature Flags
export const FEATURES = {
  ENABLE_REVIEWS: true,
  ENABLE_MESSAGING: false,
  ENABLE_NOTIFICATIONS: true,
  ENABLE_DARK_MODE: true,
  ENABLE_MULTI_LANGUAGE: false,
} as const;