import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({
    path: 'src/config/.env'
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});