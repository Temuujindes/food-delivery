import mongoose from "mongoose"
export const connetDB = async ()=> {
    await mongoose.connect ('mongodb+srv://ttemuujin124_db_user:n3W0EyZjLFUAWy4m@database.e3ujygd.mongodb.net/')
}