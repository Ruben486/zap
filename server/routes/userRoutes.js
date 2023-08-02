const router = require("express").Router();
const User = require("../models/User");
const {verifyToken,
      verifyTokenAndAuthorization,
      verifyTokenAndAdmin}
      = require("./verifyToken");

const { updateUser,
        deleteUser,
        getUser,
        getAllUsers,
        userStats
       }= require("../Controlers/userControlers")

//UPDATE
router.put("/:id", verifyTokenAndAuthorization,updateUser);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization,deleteUser);

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, getUser );

//GET ALL USER
router.get("/",getAllUsers);

//GET USER STATS

router.get("/stats", verifyTokenAndAdmin, userStats );

module.exports = router;
