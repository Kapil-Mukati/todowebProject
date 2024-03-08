import mongoose from "mongoose";

console.log("database");
// console.log(process.env.MONGO_URL);
export const connectDB = () =>{
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"backendapi",
    })
    .then(()=>{console.log(`Successfully Connected with database...`)})
    .catch((e)=>{console.log(e)});
}

// console.log(`url: ${process.env.MONGO_URL}`);



// ---------------------------------------------------------------