import app from "./app.js"
import {v2 as cloudinary } from "cloudinary"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
    secure: true
})

app.listen(process.env.PORT, ()=> {
    console.log(`server is running at port ${process.env.PORT}`);
    
})