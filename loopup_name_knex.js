const settings = require("./settings"); // settings.json
const myArgv= process.argv[2];

var pg = require('knex')({
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