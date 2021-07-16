// build your `Resource` model here
let db = require('../../data/dbConfig');

module.exports = {
    create,
    getResourceByID,
    getAllResources
}

function getResourceByID(id) {
    return db('resources')
        .where('resource_id', id)
        .first();
}

function create(resource) {
    return db('resources')
        .insert(resource)
        .then(returnedID => {
            return getResourceByID(returnedID)
        })
}

function getAllResources() {
    return db('resources')
}