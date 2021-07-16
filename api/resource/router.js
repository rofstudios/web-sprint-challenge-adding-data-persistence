// build your `/api/resources` router here
let express = require('express')

let router = express.Router();
let Resource = require('./model')

router.get('/:id', (req, res) => {
    Resource.getResourceByID(req.params.id)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            res.status(500).json({ err, message: "could not get resource by id" })
        })
})
router.get('/', (req, res) => {
    Resource.getAllResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            res.status(500).json({ err, message: "could not get resources" })
        })
})

router.post('/', (req, res) => {
    console.log(req.body, 'inside req body')
    Resource.create(req.body)
        .then(createdResource => {
            console.log(createdResource, "returned id")
            res.status(201).json(createdResource)
        })
        .catch(err => {
            res.status(500).json({ err, message: "could not create project" })
        })
})



module.exports = router;
