// Environment configuration
const IS_PROD = process.env.NODE_ENV === 'production';

// Use environment variables if available, otherwise fallback to defaults
const server = process.env.REACT_APP_SERVER_URL || 
    (IS_PROD ? 
        "https://callwithus-backend.onrender.com" : 
        "http://localhost:8000"
    );

console.log('Environment:', IS_PROD ? 'Production' : 'Development');
console.log('Server URL:', server);

export default server;