var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', function(req,res){
	res.send('<h1>erhuo</h1>')；
});


app.listen(3000, function(){
	console.log('erhuo');
});