const express = require("express");

const userController = require("./controllers/user.controller");
const branchController = require("./controllers/branch.controller");
const masterController = require("./controllers/master.controller");
const savingsController = require("./controllers/savings.controller");
const fixedController = require("./controllers/fixed.controller");

const connect = require("./configs/db");

const app = express();

app.use(express.json());

app.use("/user",userController);
app.use("/branch",branchController);
app.use("/master",masterController);
app.use("/saving",savingController);
app.use("/fixed",fixedController);


appp.lister(4001,async function(){
    try {
        await connect();
        console.log("listening on port 4001");
    } catch (error) {
        console.log("error is ",error.message);
    }
});








