import { PropertyProps } from "@/interfaces";

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


export const PROPERTYLISTINGSAMPLE: PropertyProps [] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "https://example.com/image1.jpg",
    discount: ""
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "https://example.com/image2.jpg",
    discount: "30"
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA"
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "https://example.com/image3.jpg",
    discount: ""
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "https://example.com/image4.jpg",
    discount: "15"
  },
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand"
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6"
    },
    image: "https://example.com/image5.jpg",
    discount: "20"
  },
  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10"
    },
    image: "https://example.com/image6.jpg",
    discount: ""
  },
  {
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada"
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://example.com/image7.jpg",
    discount: "10"
  },
  {
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand"
    },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6"
    },
    image: "https://example.com/image8.jpg",
    discount: "25"
  },
  {
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany"
    },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "https://example.com/image9.jpg",
    discount: ""
  },
  {
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada"
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "https://example.com/image10.jpg",
    discount: "40"
  },
  {
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy"
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "https://example.com/image11.jpg",
    discount: "50"
  },
  {
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia"
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "https://example.com/image12.jpg",
    discount: ""
  },
  {
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy"
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "https://example.com/image13.jpg",
    discount: "35"
  },
  {
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan"
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "https://example.com/image14.jpg",
    discount: ""
  },
  {
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania"
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "https://example.com/image15.jpg",
    discount: "20"
  },
  {
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK"
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4"
    },
    image: "https://example.com/image16.jpg",
    discount: "25"
  },
  {
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France"
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8"
    },
    image: "https://example.com/image17.jpg",
    discount: "30"
  },
  {
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland"
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://example.com/image18.jpg",
    discount: ""
  },
  {
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles"
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10"
    },
    image: "https://example.com/image19.jpg",
    discount: "60"
  },
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa"
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://example.com/image20.jpg",
    discount: ""
  }
];