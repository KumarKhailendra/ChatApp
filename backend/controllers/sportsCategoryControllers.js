const asyncHandler = require("express-async-handler");
const sportsCategory = require("../models/sportsCategoryModel");

const registerSportsCategory = asyncHandler(async (req, res) =>{
    const { sportName, pic } = req.body;
    if (!sportName || !pic) {
        res.status(400);
        throw new Error("Please Enter all the Feilds");
    }
    const userExists = await sportsCategory.findOne({ sportName });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }
    const user = await sportsCategory.create({
        sportName,
        pic,
    });
    if (user) {
        res.status(201).json({
          _id: user._id,
          sportName: user.sportName,
          pic: user.pic,
        });
      } else {
        res.status(400);
        throw new Error("User not found");
      }
});

const allSportsCategory= asyncHandler(async (req, res) => {
    try {
      const Category = await sportsCategory.find()
      res.json(Category);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
});
const UpdateSportsCategory= asyncHandler(async (req, res) => {
    try {
        const { sportName, pic } = req.body;
        await sportsCategory.findOneAndUpdate({_id: req.params.id}, {
            sportName, pic
        });
        res.json({msg: "Update Success!"});
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
});

module.exports = { registerSportsCategory, allSportsCategory, UpdateSportsCategory };