const express = require("express");
const parse   = require("body-parser");
const exphbs  = require("express-handlebars");

//express
const app     = express();
const router  = require("./controllers/burger_controllers");
const PORT    = process.env.PORT || 3000;

app.use(parse.urlencoded({
    extended: true
}));
app.use(parse.json());
app.use(express.static('public')); //Use static directory

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

//setting view to handlebars
app.set("view engine", "handlebars");
//routes
app.use("/", router);
// app.use(app.router);
// routes.initialize(app);

// let burgCon =require("./controllers/burger_controllers")
// router(app)



app.listen(PORT, () => {
    console.log(`[ LISTENING ON=>${PORT} ]`);
});


