//***********************************************************************
var mongoose  = require('mongoose'),
    User    = mongoose.model('User')
//************* Change to the right mongoose.model **********************
//***********************************************************************
module.exports = (function() {
  return {
    index: function(req, res) {
      console.log('3. index');
      User.find({}, function(err, data) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(data);
        }
      })
    },
    show: function(req, res) {
      console.log(req.params);
      User.findOne({_id: req.params.id}, function(err,data) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          console.log(data);
          res.json(data);
        }
      })
    },
    create: function(req, res) {
      var user = new User({name:req.body.name, score: req.body.score, percentage: req.body.percentage});
      user.save(function(err) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          console.log("didn't get saved")
          res.json({success: true});
          console.log("got saved")
        }
      })
    },
    update: function(req, res) {
      console.log(req.params, req.body);
      User.findOne({_id: req.params.id}, function(err, data) {
        for (var i in req.body) {
          if (req.body[i] != data[i]) {
          data[i] = req.body[i];
          }
        }
        console.log(data);
        data.save(function(err, data) {
          if (err) {
            console.log(err);
            res.json(err);
          } else {
            console.log(data);
            res.json(data);
          }
        })
      })
    },
    delete: function(req, res) {
      console.log(req.params.id);
      User.findOne({_id: req.params.id}, function(err, data) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          User.remove(data, function(error, datum) {
            if (error) {
              console.log(error);
              res.json(error);
            } else {
              console.log(datum);
              res.json(datum);
            }
          })
        }
      });
    }
  }
})();
//***********************************************************************
