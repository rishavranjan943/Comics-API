const express=require('express')
const {createComicBook,updateComicBook,deleteComicBook,getComicBook,getAllComic}=require('../controllers/comic')
const {createComic,validateComic}=require('../middleware/comic')


const router=express.Router()

router.post('/',createComic,createComicBook)

router.put('/:id',validateComic,updateComicBook)

router.delete('/:id', deleteComicBook)


router.get('/:id',getComicBook)

router.get('/',getAllComic)

module.exports=router