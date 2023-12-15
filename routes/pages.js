const express = require("express");
const loggedIn = require("../controllers/loggedin")
const router = express.Router();

router.get("/",loggedIn, (req,res)=> {
    if(req.user) {
        res.sendFile("index.html",{status: "loggedIn", user:req.user}, {root: "./public"});
    }
    else {
    res.sendFile("index.html", {status: "no", user: "nothing"}, {root: "./public"});
    }
})
router.get("/register", (req,res)=> {
    res.sendFile("register.html", {root: "./public"});
})
router.get("/login", (req,res)=> {
    res.sendFile("login.html", {root:"./public/"});
})

module.exports = router;