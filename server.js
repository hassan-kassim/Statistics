const express        = require('express');
var mongo            = require('mongodb');
const bodyParser     = require('body-parser');
var login = require('./routes/loginroutes');
var MongoClient = require('mongodb').MongoClient;

const app            = express();
// const port = 8000;
var router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
   
});

router.get('/getCustomer', function(req, res) {

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
});

router.get('/getDetails', function(req, res) {

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
  if (err) throw err;

  var db = client.db('mydb');

  db.collection('customers').findOne({}, function (findErr, result) {
    if (findErr) throw findErr;
    console.log(result);
   
       
          console.log(result);
          var response = {
                statusCode: 200,
                headers:  { 'Content-Type': 'application/json' },
                body:   result
              }
          res.send(response);
        
     
    client.close();
  });
}); 

});

router.get('/getallCustomer',function(req, res){
  
  var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
 
    var response = {
      statusCode: 200,
      headers:  { 'Content-Type': 'application/json' },
      body:   result
    }
res.send(response);
    db.close();
  });

});
});

router.post('/register',login.register);
router.post('/login',login.login);
// router.get('/getCustomer',login.mongoRsponse);
app.use('/api', router);
app.listen(5000);

