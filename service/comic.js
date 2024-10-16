const Comic=require('../models/comic')

const createComic=async(comicData)=>{
    try {
        const newComic=await Comic.create(comicData)
        return newComic
    } catch (error) {
        throw error
    }
}

const updateComic = async (id, updateData) => {
  try {
    const updatedComic = await Comic.findByIdAndUpdate(id, updateData, {
      new: true, 
      runValidators: true,
    });

    if (!updatedComic) {
      const error = new Error('Comic book not found');
      error.statusCode = 404;
      throw error;
    }

    return updatedComic;
  } catch (error) {
    throw error; 
  }
};


const deleteComic = async (id) => {
  try {
    const deletedComic = await Comic.findByIdAndDelete(id);

    if (!deletedComic) {
      const error = new Error('Comic book not found');
      error.statusCode = 404;
      throw error;
    }

    return deletedComic;
  } catch (error) {
    throw error; 
  }
};


const getComic =async(id) => {
  try {
    const comic = await Comic.findById(id);

    if (!comic) {
      const error = new Error('Comic book not found');
      error.statusCode = 404;
      throw error;
    }

    return comic;
  } catch (error) {
    throw error;
  }
}


const getComicAll = async ({ page, limit, sortBy, order, filters }) => {
  try {
    const skip = (page - 1) * limit;

    let filterOptions = {};

    if (filters.author) {
      filterOptions.author_name = { $regex: filters.author, $options: 'i' }; 
    }

    if (filters.year) {
      filterOptions.year_of_publication = filters.year;
    }

    if (filters.price) {
      const priceRange = filters.price.split('-');
      filterOptions.price = { $gte: priceRange[0], $lte: priceRange[1] };
    }

    if (filters.condition) {
      filterOptions.condition = filters.condition;
    }

    const sortOptions = {};
    sortOptions[sortBy] = order === 'desc' ? -1 : 1;

    const comics = await Comic.find(filterOptions)
      .sort(sortOptions)
      .skip(skip)
      .limit(parseInt(limit));
1
    const total = await Comic.countDocuments(filterOptions);

    return {
      data: comics,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch (error) {
    throw error;
  }
};



module.exports={
    createComic,
    updateComic,
    deleteComic,
    getComic,
    getComicAll
};