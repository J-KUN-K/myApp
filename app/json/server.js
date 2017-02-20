var express = require("express")
var bodyParser = require("body-parser")
var Post = require("./models/post")

var app = express()
app.use(bodyParser.json())

app.get('/api/posts', function (req, res){
	res.json([
	{
		username : 'node test1',
		body : 'node rock1'
	}])
})

app.post('/api/posts', function (req, res, next) {
	console.log('-----------------')
	console.log(req.body.username)
	console.log('----------------')
	console.log(req.body)
	console.log('-----------------')
	console.log(req.username)
	console.log('-----------------')
	console.log(req)
	var post = new Post({
		username : req.body.username,
		body : req.body.body
	})
	post.save(function (err, post){
		
		if (err) {return next(err)}
		res.json(201, post)
	})
})



app.listen(3000, function () {
	console.log('server listen on' , 3000)
})

