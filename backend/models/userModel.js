import mongoose, { mongo } from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required : true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
},{
    timestamps: true // when a user is created it automatically sets up createdAt and updatedAt fields for documents that uses this schema
})

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})
// this middleware function ensures that passwords are securely hashed before being saved to the database. It checks if the password field has been modified, generates a salt, and then hashes the password using bcrypt before saving it to the database.


userSchema.methods.matchPassword = async function (enteredPasswords){
  return await bcrypt.compare(enteredPasswords, this.password);
}

const User = mongoose.model("User", userSchema)
export default User

