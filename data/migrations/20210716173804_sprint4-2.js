
exports.up = function (knex) {
    return knex.schema.createTable('projects', table => {
        table.increments('project_id')
        table.string('project_name', 128).notNullable();
        table.string('project_description', 255).nullable();
        table.boolean('project_completed').nullable().defaultTo(false);
    })
        .createTable('resources', table => {
            table.increments('resource_id');
            table.string('resource_name', 128).notNullable().unique()
            table.string('resource_description').nullable()
        })

        .createTable('tasks', table => {
            table.increments('task_id');
            table.string('task_description', 255).notNullable();
            table.string('task_notes', 255).nullable();
            table.boolean('task_completed').nullable().defaultTo(false);
            table.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })

        .createTable('project_resources', table => {
            table.increments('pr_id');
            table.string('pr_assignment', 255).nullable();
            table.string('pr_description', 255).nullable();
            table.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
