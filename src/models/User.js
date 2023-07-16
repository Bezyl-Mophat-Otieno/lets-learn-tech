import mongoose from 'mongoose'
import {Schema} from 'mongoose'


const usesChema = new Schema({
   username:{
    type:String,
    required:true,
    unique:true
 }, email:{
    type:String,
    required:true,
    unique:true
 },
 password:{
    type:String,
    required:true,
 }


},{timestamps:true})

export default mongoose.models.User || mongoose.model('User', usesChema)