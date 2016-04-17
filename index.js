require('dotenv').config();
triage = require('nano')(process.env.DATABASE_URL);

exports.handler = function(event, context) {
  triage.insert(event, function(err, body) {
    if (err) {
      context.fail(err);
    } else {
      context.succeed(body);
    }
  });
}
