// build your `Task` model here
let db = require('../../data/dbConfig');

module.exports = {
    create,
    getById,
    getAll,
}

function create(task) {
    return db('tasks')
        .insert(task)
        .then(id => {
            return getById(id)
        })
}

function getById(id) {
    return db('tasks')
        .where('task_id', id)
        .first()
        .then(gotTask => {
            return {
                ...gotTask,
                task_completed: gotTask.task_completed == 1 ? true : false,
            }
        })
}

function getAll() {
    return db('tasks as T')
        .join('projects as P', "P.project_id", "T.project_id")
        .then(tasks => {
            return tasks.map(task => (
                {
                    task_id: task.task_id,
                    task_description: task.task_description,
                    task_notes: task.task_notes,
                    task_completed: task.task_completed == 1 ? true : false,
                    project_name: task.project_name,
                    project_description: task.project_description,
                }
            ))
        })
}