
exports.up = function(knex, Promise) {

  return Promise.all([
    knex.schema.table('milestones', function(t){
      t.integer('famous_person_id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones')
  ])
};