// build your `/api/tasks` router here
let express = require('express')

let router = express.Router();
let Tasks = require('./model');

router.get('/', (req, res) => {
    Tasks.getAll()
        .then(allTasks => {
            console.log(allTasks, 'all taskssss')
            res.status(200).json(allTasks)
        }).catch(err => {
            res.status(500).json({ err, message: "could not service tasks request" })
        })
})

router.get('/:id', (req, res) => {
    Tasks.getById(req.params.id)
        .then(task => {
            console.log(task, 'all taskssss')
            res.status(200).json(task)
        }).catch(err => {
            res.status(500).json({ err, message: "could not service tasks request" })
        })
})

router.post('/', (req, res) => {
    Tasks.create(req.body)
        .then(newTask => {
            res.status(201).json(newTask);
        }).catch(err => {
            res.status(500).json({ err, message: "could not service task creation" })
        })
})

module.exports = router;