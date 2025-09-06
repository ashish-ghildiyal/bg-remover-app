import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import userRouter from "./routes/user.route.js";

dotenv.config({
    path: 'src/config/.env'
});



const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
        res.send('API is working');
})

app.use('/api/user', userRouter)

connectDB();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

