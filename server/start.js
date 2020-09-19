require('dotenv').config();

require('./models/member')
require('./models/tree')

const app = require('./app');

const server = app.listen(process.env.PORT, function(err)
{
    if(err) throw err;
    console.log("Express runing on " + server.address().port);
});