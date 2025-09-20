// Environment configuration
const IS_PROD = process.env.NODE_ENV === 'production';

// Server URL configuration
const server = IS_PROD ? 
    "https://callwithus-backend.onrender.com" : 
    "http://localhost:8000";

console.log('=== ENVIRONMENT CONFIG ===');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('IS_PROD:', IS_PROD);
console.log('Server URL:', server);
console.log('=========================');

export default server;