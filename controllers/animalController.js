const router = require("express").Router();
const shelterAPI = require("../utils/shelterAPI/API.js")
const db = require("../models");


//BASE URL FOR AL ROUTES ON THIS PAGE: /api/animals

router.get("/", (req, res) => {
    db.Animal.findAll({})
    .then(animalData => {
        res.json(animalData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

router.get("/", (req, res) => {
    db.Animal.findAll
    const animal = {
        type: req.body.type,
        likesCats: req.body.likesCats,
        likesDogs: req.body.likesDogs,
        likesKids: req.body.likesKids
    }
})
.then(animal => {

    router.get(`?type=${animal.type}&likesCats=${animal.likesCats}&likesDogs=${animal.likesDogs}&likesKids=${animal.likesKids}`, (req, res) => {
        db.Animal.findAll({
            where: {
                type: req.params.type,
                likesCats: req.params.likesCats,
                likesDogs: req.params.likesDogs,
                likesKids: req.params.likesKids
            }
        })
    })
    .then(animalData => {
        res.json(animalData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

router.post("/animal", (req, res) => {
    db.Animal.create({
        name: req.body.name,
        type: req.body.type,
        imageSrc: req.body.imageSrc,
        breed: req.body.breed,
        secondaryBreed: req.body.secondaryBreed,
        age: req.body.age,
        sex: req.body.sex,
        size: req.body.size,
        bio: req.body.bio,
        likesCats: req.body.likesCats,
        likesDogs: req.body.likesDogs,
        likesKids: req.body.likesKids,
        shelterId: req.body.shelterId
    })
    .then(animalData => {
        res.json(animalData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

router.delete('/:id', (req, res) => {
    db.Animal.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(deleted => {
            res.json(deleted)
        })
        .catch(err => {
            console.log(err);
            res.status(500).end()
        })
})

module.exports = router;