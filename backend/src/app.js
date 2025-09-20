import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000))

// CORS configuration - Allow all origins for now
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

console.log("CORS configured to allow all origins");
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

// Test route
app.get("/api/test", (req, res) => {
    res.json({ message: "Backend is working!", timestamp: new Date().toISOString() });
});

const start = async () => {
    try {
        // Connect to MongoDB using environment variable
        const mongoUri = process.env.MONGODB_URI || "mongodb+srv://shanurajpoot1234_db_user:VNULZvWKIcKemUql@callwithus.hkkiobo.mongodb.net/?retryWrites=true&w=majority&appName=CallWithUs";
        const connectionDb = await mongoose.connect(mongoUri);

        console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`)
        
        const port = app.get("port");
        server.listen(port, () => {
            console.log(`Server listening on port ${port}`)
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}



start();