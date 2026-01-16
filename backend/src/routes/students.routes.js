const router = require("express").Router();
const ctrl = require("../controllers/students.controller");
const asyncHandler = require("../middlewares/asyncHandler");
const { idParamValidator, validateStudent } = require("../validators/student.validators");

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Student management endpoints
 */

/**
 * @swagger
 * /api/students:
 *   get:
 *     summary: Get all students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: List of students
 */
router.get("/", asyncHandler(ctrl.getAll));

/**
 * @swagger
 * /api/students/{id}:
 *   get:
 *     summary: Get student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Student found
 *       404:
 *         description: Student not found
 */
router.get("/:id", idParamValidator, asyncHandler(ctrl.getById));

/**
 * @swagger
 * /api/students:
 *   post:
 *     summary: Create a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               department:
 *                 type: string
 *     responses:
 *       201:
 *         description: Student created successfully
 */
router.post("/", validateStudent, asyncHandler(ctrl.create));

/**
 * @swagger
 * /api/students/{id}:
 *   put:
 *     summary: Update an existing student
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               department:
 *                 type: string
 *     responses:
 *       200:
 *         description: Student updated
 *       404:
 *         description: Student not found
 */
router.put("/:id", idParamValidator, validateStudent, asyncHandler(ctrl.update));

/**
 * @swagger
 * /api/students/{id}:
 *   delete:
 *     summary: Delete a student
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Student deleted
 *       404:
 *         description: Student not found
 */
router.delete("/:id", idParamValidator, asyncHandler(ctrl.remove));

module.exports = router;
