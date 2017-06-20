const pg = require("pg");
const settings = require("./settings"); // settings.json



const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});


let dbConnect = function (done) {
  client.connect(function connectionCallback(err) {
    done(err, client);
  });
}

module.exports = dbConnect;