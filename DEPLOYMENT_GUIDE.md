# 🚀 CallWithUs Deployment Guide

## ✅ Ready to Deploy!

Your app is now ready for deployment with proper environment configuration.

## 📁 Files Created:
- `backend/config.env` - Backend environment variables
- `frontend/config.env` - Frontend environment variables
- Updated `backend/src/app.js` - Now uses environment variables
- Updated `frontend/src/environment.js` - Dynamic server URL

## 🎯 Quick Deployment Steps:

### 1. Frontend (Vercel - Recommended)
```bash
# 1. Push to GitHub
git add .
git commit -m "Ready for deployment"
git push

# 2. Go to vercel.com
# 3. Import your GitHub repo
# 4. Build Command: npm run build
# 5. Deploy!
```

### 2. Backend (Railway - Recommended)
```bash
# 1. Go to railway.app
# 2. Connect GitHub repo
# 3. Set Environment Variables:
#    - MONGODB_URI: mongodb+srv://shanurajpoot1234_db_user:VNULZvWKIcKemUql@callwithus.hkkiobo.mongodb.net/?retryWrites=true&w=majority&appName=CallWithUs
#    - PORT: 8000
#    - NODE_ENV: production
#    - CORS_ORIGIN: https://your-frontend-domain.vercel.app
# 4. Deploy!
```

## 🔧 Environment Variables to Set:

### Backend (Railway/Heroku/Render):
```
NODE_ENV=production
PORT=8000
MONGODB_URI=mongodb+srv://shanurajpoot1234_db_user:VNULZvWKIcKemUql@callwithus.hkkiobo.mongodb.net/?retryWrites=true&w=majority&appName=CallWithUs
CORS_ORIGIN=https://your-frontend-domain.vercel.app
```

### Frontend (Vercel):
```
REACT_APP_SERVER_URL=https://your-backend-domain.railway.app
NODE_ENV=production
```

## 🌐 After Deployment:
1. Update frontend's `REACT_APP_SERVER_URL` with your backend URL
2. Update backend's `CORS_ORIGIN` with your frontend URL
3. Test the video call functionality

## 🎉 You're Done!
Your video calling app is now live on the internet!
