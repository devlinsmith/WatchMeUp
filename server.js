var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    watchController   = require('./server/controllers/watch-controller');

mongoose.connect('mongodb://localhost:27017/watch-me-up');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

//REST API
app.get('/api/watches', watchController.list);
app.post('/api/watches', watchController.create);

//incomplete actions, not sure of exact URL usage (with/without id, include in body - delete has no body)
app.put('/api/watch/:id', watchController.update);
app.delete('/api/watch/:id', watchController.remove);

app.listen(3000, function() {
  console.log('Watches up, and go...');
})