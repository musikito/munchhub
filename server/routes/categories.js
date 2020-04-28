const router = require("express").Router();
let Category = require("../models/category");
const { auth } = require("../middleware/auth");

router.route("/").get((req, res) => {
  Category.find()
    .then((categories) => res.json(categories))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post(auth, (req, res) => {
  const category = req.body.category;

  const newCategory = new Category({ category });

  newCategory
    .save()
    .then(() => res.json("Category added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
