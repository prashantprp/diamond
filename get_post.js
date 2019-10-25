var express = require('express');
var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}))

app.get('/show', function(req, res) {
    var sql = require("mssql");
    // config for your database
    var config = {
        user: 'prp',
        password: 'Jill1234',
        server: 'prpserver.database.windows.net',
        database: 'prpdb',
        options: {
            encrypt: true
        }
    };
    // connect to your database
    sql.connect(config, function(err) {
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
        // query to the database and get the records
        request.query('select * from dbo.Greet', function(err, recordset) {
            if (err) console.log(err)
            // send records as a response
            // res.send(recordset);
            res.render("index", {
                recordset: recordset.recordset
            });
			sql.close();
        });
    });
});

app.get('/demo', function(req, res) {
    res.render("expost");
            });			
 


app.post('/demoinsert', function(req, res) {
    var sql = require("mssql");
    // config for your database
    var config = {
        user: 'prp',
        password: 'Jill1234',
        server: 'prpserver.database.windows.net',
        database: 'prpdb',
        options: {
            encrypt: true
        }
    };
	
	var firstName=req.body.firstname;
	console.log(firstName);
    // connect to your database
    sql.connect(config, function(err) {
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
        // query to the database and get the records
		var vquery = "insert into dbo.Greet (Message) values ('" +req.body.firstname+ "')";
        request.query(vquery, function(err, recordset) {
            if (err) console.log(err)           
        });
    }); 
});

/* var query = "INSERT INTO [Category] (CName,CSubCategory) VALUES ('" +req.body.CName+"','"+req.body.CSubCategory+"')"; – Mohammed Ehab Jan 8 '18 at 14:06 */ 

app.listen(3000, process.env.IP, function() {
    console.log("Server has started!!!");
});