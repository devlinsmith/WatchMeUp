var Watch = require('../models/watch');

module.exports.create = function (req, res) {
  var watch = new Watch(req.body);
  watch.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
    // Technically you should not use the body of a GET to alter a response (HTTP 1.1 Spec)
    // But it would be possible to read parameters off the request and filter the res(ponse) with the appropriate result
    // Other option is to make controls that define angular filters on a page - see filters and search on index.html
  Watch.find({}, function (err, results) {
    res.json(results);
  });
}

// Not going to work
module.exports.remove = function (reg, res) {
    Watch.remove({ _id: req.body.id}, function(err) {
        if(!err) {
            process.stdout.write("Successful removal")
        }
        else {
            process.stdout.write("Error: " + err)
        }
    })
}

// Not going to work
module.exports.update = function (reg, res) {
    Watch.update({ _id: req.body.id}, function(err) {
        if(!err) {
            process.stdout.write("Successful removal")
        }
        else {
            process.stdout.write("Error: " + err)
        }
    })
}