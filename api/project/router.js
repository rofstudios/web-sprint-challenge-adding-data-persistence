// build your `/api/projects` router here
let express = require('express')

let router = express.Router();
let Project = require('./model');

router.get('/', (req, res) => {
    Project.getAll()
        .then(projects => {
            // console.log(projects, 'projects router GET')
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({ err, message: "could not service project creation" })
        })
})

router.post('/', (req, res) => {
    Project.create(req.body)
        .then(newProject => {
            console.log(newProject, "newly created project POST")
            res.status(201).json(newProject);
        }).catch(err => {
            res.status(500).json({ err, message: "could not service project creation" })
        })
})


module.exports = router;
