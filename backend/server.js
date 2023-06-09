const express = require('express');
const path = require("path");
const mongoose = require("mongoose");
const cors = require('cors');

const user_routes = require("./routes/user.route");
const role_routes = require("./routes/role.route");

const app = express();

app.use(express.json());

app.use(cors());

mongoose.set('strictQuery', true);


mongoose
    .connect(
        "mongodb+srv://prisma:prisma@prisma.kni8ffr.mongodb.net/taskmanagerdb?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Database connected !!!");
    })
    .catch((err) => {
        console.log("An error has occured. Unable to connect to database!" + err);
    }
);

app.use(express.static(path.join(__dirname, "www")));

//user API
app.use("/user", user_routes);
app.use("/role", role_routes);

app.listen(3000, () => {
    console.log("server is running on port 3000...");
});
  