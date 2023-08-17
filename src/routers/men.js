const express = require("express");
const router = new express.Router();

const MensRanking = require("../models/mens");

// we will handle post req
router.post("/mens", async (req, res) => {
    try {
        const addingMensRecords = new MensRanking(req.body)
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);

    } catch(err) {
        res.status(400).send(err);
    }
})

// we will handle get req
router.get("/mens", async (req, res) => {
    try {
        const getMens = await MensRanking.find({}).sort({"ranking" : 1});
        res.send(getMens);

    } catch(err) {
        res.status(400).send(err);
    }
})

// we will handle get req of individual
router.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id; 
        const getMen = await MensRanking.findById({_id});
        res.send(getMen);

    } catch(err) {
        res.status(400).send(err);
    }
})

// we will handle patch(update) req of individual
router.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id; 
        const updateMens = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new : true,
        });
        res.send(updateMens);

    } catch(err) {
        res.status(500).send(err);     // 500 - for server error
    }
})

// we will handle delete req of individual
router.delete("/mens/:id", async (req, res) => {
    try {
        const updateMens = await MensRanking.findByIdAndDelete(req.params.id);
        res.send(updateMens);

    } catch(err) {
        res.status(500).send(err);     
    }
})


module.exports = router;