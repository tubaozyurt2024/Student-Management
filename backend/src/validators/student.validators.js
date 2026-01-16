const { body, param, validationResult } = require("express-validator");

// POST/PUT body validator
const validateStudent = [
  body("name")
    .trim()
    .notEmpty().withMessage("Name is required")
    .isLength({ max: 100 }).withMessage("Name max 100 chars"),

  body("email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Email must be valid")
    .isLength({ max: 100 }).withMessage("Email max 100 chars"),

  body("phone")
    .optional({ nullable: true })
    .isLength({ max: 20 }).withMessage("Phone max 20 chars"),

  body("department")
    .optional({ nullable: true })
    .isLength({ max: 50 }).withMessage("Department max 50 chars"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
  },
];

// :id param validator
const idParamValidator = [
  param("id").isInt({ min: 1 }).withMessage("Id must be a positive integer"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateStudent, idParamValidator };
