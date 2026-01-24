const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { OAuth2Client } = require("google-auth-library");

const app = express();
app.use(express.json());
app.use(cors());


const SECRET = "mysecretkey";
const GOOGLE_CLIENT_ID = "25994112428-up4hqpfn3399qbrfqqc85t41471b6rpp.apps.googleusercontent.com";
const googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);

mongoose.connect("mongodb://localhost:27017/authDB")
.then(() => console.log("MongoDB Connected"));
const UserSchema = new mongoose.Schema({
name: String,
email: String,
password: String,
googleId: String // ✅ ADD: store Google unique user id
});
const User = mongoose.model("User", UserSchema);

app.post("/register", async (req, res) => {
        const { name, email, password } = req.body;
        const existing = await User.findOne({ email });
        if (existing) return res.status(400).json({ message: "User already exists" });
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ name, email, password: hashedPassword });
        res.json({ message: "User Registered Successfully" });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Wrong password" });
    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "1h" });
    res.json({ token });
});

app.post("/auth/google", async (req, res) => {
  try {
    const { id_token } = req.body;
    if (!id_token) {
      return res.status(400).json({ message: "No Google token" });
    }

    const ticket = await googleClient.verifyIdToken({
      idToken: id_token,
      audience: GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, sub } = payload;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        password: "",
        googleId: sub,
      });
    }

    const token = jwt.sign({ id: user._id }, SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});


app.listen(4000,()=>{
    console.log("Server running port 4000");
});
