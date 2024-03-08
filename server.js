import { app } from "./src/app.js";
import { connectDB } from "./data/database.js";

connectDB();

const port = process.env.PORT || 3000;


app.listen(port,()=>{
    console.log(`Listening on port : ${port}`);
})