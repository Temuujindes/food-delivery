import mongoose from "mongoose"
export const connetDB = async ()=> {
    await mongoose.connect ('mongodb+srv://ttemuujin124_db_user:Temka1224!@database.e3ujygd.mongodb.net/')
    .then(()=>console.log("connected"))
}