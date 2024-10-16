const {createComic,updateComic,deleteComic,getComic,getComicAll}=require('../service/comic')

const createComicBook=async (req,res,next)=>{
    try{
        const data=req.body
        const comic=await createComic(data)
        const id=comic._id
        res.status(201).json({
            success:true,
            data:data,
            id:id
        })
    } catch(error){
        next(error)
    }
}

const updateComicBook = async (req, res, next) => {
  try {
    const comicId = req.params.id; 
    const updateData = req.body; 
    const updatedComic = await updateComic(comicId, updateData);
    res.status(200).json({
      success: true,
      data: updatedComic,
    });
  } catch (error) {
    next(error);
  }
};

const deleteComicBook = async (req, res, next) => {
  try {
    const comicId = req.params.id; 
    const deletedComic = await deleteComic(comicId);
    res.status(200).json({
      success: true,
      data: deletedComic,
    });
  } catch (error) {
    next(error);
  }
};


const getComicBook=async (req, res, next) => {
  try {
    const comicId = req.params.id;
    const comic = await getComic(comicId);
    res.status(200).json({
      success: true,
      data: comic,
    });
  } catch (error) {
    next(error);
  }
};


const getAllComic = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, sortBy = 'title', order = 'asc', ...filters } = req.query;

    const comics = await getComicAll({ page, limit, sortBy, order, filters });

    res.status(200).json({
      success: true,
      data: comics.data,
      pagination: comics.pagination,
    });
  } catch (error) {
    next(error);
  }
};




module.exports={
    createComicBook,
    updateComicBook,
    deleteComicBook,
    getComicBook,
    getAllComic
}