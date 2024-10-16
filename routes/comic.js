const express=require('express')
const {createComicBook,updateComicBook,deleteComicBook,getComicBook,getAllComic}=require('../controllers/comic')
const {createComic,validateComic}=require('../middleware/comic')


const router=express.Router()


// creating comic
router.post('/',createComic,createComicBook)


// updating comic
router.put('/:id',validateComic,updateComicBook)


// deleting comic
router.delete('/:id', deleteComicBook)



// getting comic by id
router.get('/:id',getComicBook)


// getting comic 
router.get('/',getAllComic)

module.exports=router