const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{
        type:String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email not Valid")
            }
        }
    },
    password:{
        type: String,
        required: true,
        minlength: 7,
    },
    notes:[
        
    ]
})

UserSchema.pre('save', async function(next){
    const user = this;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }
    next()
})

module.exports = mongoose.model('Users',UserSchema)