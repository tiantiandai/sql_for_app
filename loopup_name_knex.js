const settings = require("./settings"); // settings.json
const myArgv= process.argv[2];

var knex = require('knex')({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  },
  searchPath: 'knex,public'
});


knex.select().from('famous_people')
.where('last_name', myArgv)
.orWhere('first_name', myArgv)
.asCallback(function(err, rows) {

  console.log("Searching ...");
  let count = rows.length;
  console.log('Found ' + count + " person(s) by the name 'Lincoln':");

  for(var i = 0; i < count; i++){
    let c = i + 1;
    console.log("- " + c + ": " + rows[i].first_name + " " + rows[i].last_name + ", born '" + rows[i].birthdate + "'" )
  }
  if (err) return console.error(err);
});