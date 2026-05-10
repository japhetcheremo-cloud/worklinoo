const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// CONNECT MONGODB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected Successfully"))
.catch((err) => console.log(err));

// TEST ROUTE
app.get("/", (req, res) => {
    res.send("WORKLINO Backend Running");
});


// ============================
// JOBS API (TEMP DATA FIRST)
// ============================
const jobs = [
    {
        title: "Frontend Developer",
        type: "Full Time",
        location: "Nairobi, Kenya",
        description: "Looking for a frontend developer skilled in HTML, CSS and JavaScript."
    },
    {
        title: "Graphic Designer",
        type: "Remote",
        location: "Kisii, Kenya",
        description: "Need a creative designer for branding and social media posters."
    },
    {
        title: "Video Editor",
        type: "Part Time",
        location: "Nairobi, Kenya",
        description: "Looking for an editor for YouTube and TikTok content creation."
    }
];

// GET JOBS API
app.get("/api/jobs", (req, res) => {
    res.json(jobs);
});


// START SERVER
app.listen(5000, () => {
    console.log("Server running on port 5000");
});