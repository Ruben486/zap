const router = require("express").Router();
const { userRegister,userLogin,verifyToken } = require("../Controlers/authControlers")

router.post("/register", userRegister);    
router.post('/login',userLogin);
router.get("/verify", verifyToken);

module.exports = router;