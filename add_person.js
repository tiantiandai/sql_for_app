const settings = require("./settings"); // settings.json
const myArgv= [process.argv[2], process.argv[3], process.argv[4]];

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

knex('famous_people').insert({first_name: myArgv[0], last_name: myArgv[1], birthdate: myArgv[2]});