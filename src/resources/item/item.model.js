import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
    name: {
        maxlength: 50,
        required: true,
        trim: true,
        type: String
    },
    status:{
        default: "active",
        enum: ["active", "complete", "pastdue"],
        required: true,
        type: String
    }, 
    notes: String,
    due: Date,
    // createdBy: {
    //     ref: "user",
    //     required: true,
    //     type: mongoose.SchemaType.ObjectId
    // },
    list:{
        type: mongoose.SchemaType.ObjectId,
        ref: "list",
        required: true
    }

}, { timestamps: true })


export const Item = mongoose.model('item', itemSchema)
