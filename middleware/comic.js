const { body, validationResult } = require('express-validator');


// validating post operation
const createComic = [
  body('book_name')
    .notEmpty()
    .withMessage('Book name is required')
    .isString()
    .withMessage('Book name must be a string'),
  body('author_name')
    .notEmpty()
    .withMessage('Author name is required')
    .isString()
    .withMessage('Author name must be a string'),
  body('year_of_publication')
    .notEmpty()
    .withMessage('Year of Publication is required')
    .isInt({ min: 1900 })
    .withMessage('Year of Publication must be a valid year'),
  body('price')
    .notEmpty()
    .withMessage('Price is required')
    .isFloat({ min: 0 })
    .withMessage('Price must be a positive number'),
  body('discount')
    .optional()
    .isFloat({ min: 0, max: 100 })
    .withMessage('Discount must be between 0 and 100'),
  body('number_of_pages')
    .notEmpty()
    .withMessage('Number of Pages is required')
    .isInt({ min: 1 })
    .withMessage('There must be at least one page'),
  body('condition')
    .notEmpty()
    .withMessage('Condition is required')
    .isIn(['new', 'used'])
    .withMessage('Condition must be either new or used'),
  body('stock')
    .notEmpty()
    .withMessage('Stock is required')
    .isInt({ min: 0 })
    .withMessage('Stock cannot be negative'),
  body('description')
    .optional()
    .isString()
    .withMessage('Description must be a string'),


  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const extractedErrors = errors.array().map((err) => `${err.param}: ${err.msg}`);
      return res.status(400).json({
        success: false,
        message: extractedErrors.join(', '),
      });
    }
    next();
  },
];


// validating put opration
const validateComic = [
  body('book_name')
    .optional()
    .isString()
    .withMessage('Book name must be a string'),
  body('author_name')
    .optional()
    .isString()
    .withMessage('Author name must be a string'),
  body('year_of_publication')
    .optional()
    .isInt({ min: 1900 })
    .withMessage('Year of Publication must be a valid year'),
  body('price')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Price must be a positive number'),
  body('discount')
    .optional()
    .isFloat({ min: 0, max: 100 })
    .withMessage('Discount must be between 0 and 100'),
  body('number_of_pages')
    .optional()
    .isInt({ min: 1 })
    .withMessage('There must be at least one page'),
  body('condition')
    .optional()
    .isIn(['new', 'used'])
    .withMessage('Condition must be either new or used'),
  body('stock')
    .optional()
    .isInt({ min: 0 })
    .withMessage('Stock cannot be negative'),
  body('description')
    .optional()
    .isString()
    .withMessage('Description must be a string'),


  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const extractedErrors = errors.array().map((err) => `${err.param}: ${err.msg}`);
      return res.status(400).json({
        success: false,
        message: extractedErrors.join(', '),
      });
    }
    next();
  },
];

module.exports = {
  createComic,
  validateComic
};
