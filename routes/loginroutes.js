exports.login = function(req,res){
    var email= req.body.email;
    var password = req.body.password;
    
  }
  

  exports.register = function(req,res){
    // console.log("req",req.body);
    var today = new Date();
    var users={
      "first_name":req.body.first_name,
      "last_name":req.body.last_name,
      "email":req.body.email,
      "password":req.body.password,
      "created":today,
      "modified":today
    }
   
  }

  var MongoClient = require('mongodb').MongoClient;

  exports.mongoRsponse = function(req,res){
    var url = "mongodb://localhost:27017/mydb";

    
    MongoClient.connect(url, function(err, db) {
      

    db.collection("customers").find({}, function(err, docs) {
      if(err) return next(err);
      docs.each(function(err, doc) {
        if(doc) {
          console.log(doc);
          var response = {
                statusCode: 200,
                headers:  { 'Content-Type': 'application/json' },
                body:    JSON.parse(doc)
              }
          res.send(response);
        }
      });
    });

  });
    
    }
   
    //db.customers.find()

  