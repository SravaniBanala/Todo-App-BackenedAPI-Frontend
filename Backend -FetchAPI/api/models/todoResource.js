
// Importing Mongoose 

import mongoose from "mongoose";

// Creating Schema

const todoResourceSchema = new mongoose.Schema({
    id: {
        type: String,
        required: 'Id is required'
    },
    title: {
        type: String,
        required: 'Title is a required property.'
    },
    description: {
        type: String,
        required: 'Description is a required property.'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    lastModifiedDate: {
        type : Date,
        default: Date.now
    },
    dueDate: {
        type : Date,
        
    },
    dueTime: {
        type: String,
        required: 'Due Time is a required property.'
    },
    status: {
        type: String,
        required: 'Status is a required Property.'
    }
},{versionKey: false});

const model = mongoose.model('todoResource', todoResourceSchema);

// Exporting Model

export default model;