import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import userRouter from "./routes/user.route.js";
import imageRouter from './routes/image.route.js';

dotenv.config({
    path: 'src/config/.env'
});

const app = express();

app.use(express.json());

app.use(cors());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
        res.send('API is working');
})

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

connectDB();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

export default app