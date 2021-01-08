const express = require('express');
const router = express.Router();
const categoryController = require("../controllers/categoryController");

//Category Routes
router.get("/", categoryController.getCategories);
router.post("/", categoryController.addCategory);
router.patch("/:id", categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);


module.exports = router;