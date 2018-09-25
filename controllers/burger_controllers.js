const express = require("express");
const burger  = require("../models/burger.js");
const router  = express.Router();

// Creating routes & needed logic 
router.get("/", (req, res) => {

    burger.select( element => {
       // console.log(hbsBurger);
        res.render("index", hbsBurger = {
            burgers: element
        }); 
    });


    router.post('/burgers/create', (req, res) => {
        console.log(req, res);
        let burgerName = req.body.addBurger
        console.log(burger)
        burger.insertOne(['burger_name'], [burgerName], () => {
            res.redirect("/");
        });
    });
 
    router.post('/burgers/:id', (req, res) => {
        let flag = req.params.id

        burger.updateOne({
            is_devoured: true
        }, flag, () => {
            res.redirect("/")
        });
    });

    router.post('/delete/:id', (req, res) => {
        let flag = req.params.id;
        burger.updateOne({
            is_deleted: true
        }, flag, () => {
            res.redirect('/');
        })
    });
});

module.exports = router;

