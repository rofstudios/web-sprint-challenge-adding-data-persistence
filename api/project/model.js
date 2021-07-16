// build your `Project` model here
let db = require('../../data/dbConfig');

let create = async (project) => {
    let returnedID = await db('projects').insert(project)
    let returnedProject = await getById(returnedID)
    return {
        ...returnedProject,
        project_completed: returnedProject.project_completed == 1 ? true : false
    }

}

function getById(id) {
    return db('projects')
        .where('project_id', id).first();
}

function getAll() {
    return db('projects')
        .then(projects => {
            if (projects.length == 0) {
                return null // no projects found
            } else {
                return projects.map(project => (
                    {
                        project_id: project.project_id,
                        project_name: project.project_name,
                        project_description: project.project_description,
                        project_completed: project.project_completed == 1 ? true : false,
                    }
                ))
            }
        })
    // if (projects.length == 0) { 
    //     return null // no projects found 
    // } else {
    //     return projects.map(project => (
    //         {
    //             project_id: project.project_id,
    //             project_name: project.project_name,
    //             project_description: project.project_description,
    //             project_completed: project.project_completed == 1 ? true : false,
    //         }
    //     ))
    // }
}

module.exports = {
    create,
    getById,
    getAll,
}