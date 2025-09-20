// Environment configuration
const IS_PROD = process.env.NODE_ENV === 'production';

// For production, hardcode the backend URL to avoid Render environment variable issues
const server = IS_PROD ? 
    "https://callwithus-backend.onrender.com" : 
    "http://localhost:8000";

console.log('Environment:', IS_PROD ? 'Production' : 'Development');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('Final Server URL:', server);

export default server;