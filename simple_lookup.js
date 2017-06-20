const pg = require("pg");
const settings = require("./settings"); // settings.json
const myArgv= process.argv[2];

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT * FROM famous_people WHERE first_name = $1 OR last_name = $1", [myArgv], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log("Searching ...");
    let count = result.rows.length;
    console.log('Found ' + count + " person(s) by the name 'Lincoln':");

    for(var i = 0; i < result.rows.length; i++){
      let c = i + 1;
      console.log("- " + c + ": " + result.rows[i].first_name + " " + result.rows[i].last_name + ", born '" + result.rows[i].birthdate + "'" )
    }
    console.log(result.rows); // result. row is an array that contains the data that we are interested in.
    client.end();
  });
});