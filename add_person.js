const settings = require("./settings");
function performQuery(query, name) {
  var knex = require('knex')({
    client: 'pg',
    connection: {
        host : settings.hostname,
        user : settings.user,
        password : settings.password,
        database : settings.database
    },
    pool: {
      afterCreate: function (conn, done) {
        conn.query(query, name, (err, result) => {
        if (err) {
          return console.error("error running query", err);
        }
        console.log(`Found ${result.rows.length} person(s) by the name ${name} `);
        for(let row of result.rows) {
          console.log(`${row.id}: ${row.first_name} ${row.last_name}, born ${row.birthdate}`);
        }
          done(err, conn);
        });
      }
    }
  });
}


function findFamousPeople() {
  const query =
  `SELECT * from famous_people where last_name = $1::text`;
  const name = [process.argv[2]];
  performQuery(query, name);
}

function addFamousPeople() {
  const query =
  `INSERT  INTO famous_people (first_name, last_name, birthdate) values ($1::text, $2::text, $3::date)`;
  const info = [process.argv[2], process.argv[3], process.argv[4]];
  performQuery(query, info);
}

// addFamousPeople();
 findFamousPeople();


