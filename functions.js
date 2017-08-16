const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const path= require ('path');
const port = 3000;
// mustache
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');
app.use('/Aug_16th', express.static(__dirname + '/Aug_16th'));


//Functions
app.get('/', function(req, res){
  res.render(path.join(__dirname + '/users.mustache'));
})

app.listen(port, function(){
  console.log("Active Server: 3000!")
});
