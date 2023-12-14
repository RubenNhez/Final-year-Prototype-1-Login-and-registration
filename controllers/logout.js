const jwt = require("jsonwebtoken");
const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const login = async(req,res) => {
    const {email, password} = req.body;
    if(!email || !password) return res.json({status: "error", error: "Please Enter your email and password"});
    else {
        db.query('SELECT email FROM users WHERE email = ?', [email], async (Err,result) => {
            if (Err) throw Err;
            if(!result[0] || !await bcrypt.compare(password, result[0].password))return res.json({status: "error", error: "Incorrect Email or password"})
            else {
                const token = jwt.sign(result[0])
        }
        })
    }
}
module.exports = login;