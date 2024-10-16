const mongoose=require('mongoose');

const ComicSchema=new mongoose.Schema({
    book_name:{
        type:String,
        required: true,
    },
    author_name:{
        type:String,
        required: true

    },
    year_of_publication:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true,
    },
    discount:{
        type:Number,
        default:0,
    },
    number_of_pages: {
        type: Number,
        required: true
    },
    condition: {
        type: String,
        enum: ['new', 'used'],
        required:true
    },
    description: {
        type: String,
        trim: true,
    },
    stock:{
        type:Number,
        required:true
    }
},{
    timestamps:true,
})

module.exports=mongoose.model('Comic',ComicSchema)