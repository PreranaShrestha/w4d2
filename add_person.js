const settings = require("./settings");
function performQuery() {
  var knex = require('knex')({
    client: 'pg',
    connection: {
        host : settings.hostname,
        user : settings.user,
        password : settings.password,
        database : settings.database
    }
     });
    knex.insert({first_name: process.argv[2], last_name: process.argv[3], birthdate: process.argv[4]}).into("famous_people").then(function(id){
      console.log(id);
    });

}
performQuery();

// function findFamousPeople() {
//   const query =
//   `SELECT * from famous_people where last_name = $1::text`;
//   const name = [process.argv[2]];
//   performQuery(query, name);
// }

// function addFamousPeople() {
//   const query =
//   `INSERT  INTO famous_people (first_name, last_name, birthdate) values ($1::text, $2::text, $3::date)`;
//   const info = [process.argv[2], process.argv[3], process.argv[4]];
//   performQuery(query, info);
// }

// // addFamousPeople();
//  findFamousPeople();
