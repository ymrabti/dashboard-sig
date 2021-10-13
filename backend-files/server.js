var app = require('./app');
var port = process.env.PORT || 3080;
var server = app.listen(port, ()=> {
    console.log(`Server listening on the port::${port}`);
    const all_routes = require('express-list-endpoints');
    console.log(all_routes(app).sort((a,b)=>a.path-b.path));
});