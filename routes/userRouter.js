const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    try {
        const { name, email, password, passwordVerify } = req.body;

        if (!email || !password || !passwordVerify)
            return res
                .status(400)
                .json({ errorMessage: "Please enter all required fields" });

        if (password.length < 6)
            return res
                .status(400)
                .json({
                    errorMessage: "Please enter a password with at least 6 characters",
                });

        if (password !== passwordVerify)
            return res
                .status(400)
                .json({
                    errorMessage: "Please enter the same password twice",
                });

        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({
                errorMessage: "An account with this email already exists",
            });

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            email, password: hashedPassword, name
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser)


    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email }, async (err, user) => {
        if (err) {
            res.status(500).json(err) 
        } else if (!user) {
            res.status(404).json({msg:"No User Found"})
        }
        else {
            const result = await bcrypt.compare(password, user.password)
            if (result) {
                res.status(200).json({msg:"Logged in", username: user.email})
            } else {
            res.status(403).json({msg:"Invalid password"})}
        }
    });
});

module.exports = router;