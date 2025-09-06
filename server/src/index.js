import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config({
    path: 'src/config/.env'
});



const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
        res.send('API is running');
})

connectDB().then(() => {
    app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
}).catch((error) => {
    console.log(error);
});

