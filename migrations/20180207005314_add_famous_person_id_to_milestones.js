
exports.up = function(knex, Promise) {

  return Promise.all([
    knex.schema.table('milestones', function(t){
      t.integer('famous_person_id');
      t.foreign('famous_person_id').references('famous_people.id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones', function(t){
      t.dropForeign('famous_person_id')
      t.dropColumn('famous_person_id')
  })
  ])
};