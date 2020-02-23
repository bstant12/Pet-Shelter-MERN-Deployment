const mongoose = require('mongoose'),
    uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true, "All pets must have names."],
        minlength: [3, "Please enter a real name"],
        unique: [true, "That is already a name of a pet"]
    },
    type:{
        type: String,
        required: [true, "Please tell us what type of animal it is"],
        minlength: [3, "We don't have room from an Ox at this shelter"]
    },
    description: {
        type:String,
        required: [true, "Please tell us about this animal"],
        minlength: [3, "You have to tell us something real"]
    },
    skill_one: {
        type: String,
        required: [false]
    },
    skill_two: {
        type: String,
        required: [false]
    },
    skill_three: {
        type: String,
        required: [false]
    },
    likes : {
        type: Number,
        default: 0
    }

}, {timestamps:true});

PetSchema.plugin(uniqueValidator);

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;