
var mongoose = require('mongoose');
// mongoose.connect('mongodb://vidas:vidas123@coachgo-shard-00-00-dqxa6.mongodb.net:27017/pizza?ssl=true&authSource=admin', 
mongoose.connect('mongodb://localhost/pizza-database', 
{useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log(`we're connected!`);
});
module.exports.db;


