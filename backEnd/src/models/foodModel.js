import mongoose from "mongoose";
 const foodSchema= new mongoose.Schema({
    name: {type: String, required:true},
    email: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    description: {type:String, required:true}
 })
 const foodModel= mongoose.models.user || mongoose.model('user', userSchema)
 export default foodModel;