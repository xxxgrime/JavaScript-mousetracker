var express=require("express")
var cors=require("cors")
var path=require("path")
var bodyParser=require("body-parser")
var ejs=require("ejs")

var app=express();

const port =3000;


app.use(cors())

app.set("views",path.join(__dirname,"views"))
app.set("view-engine",ejs)
app.engine('html',require('ejs').renderFile)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))



app.get('/render',function(req,res,next){

  res.render("index.html")
 
})

var render;
app.post('/render',(req,res,next)=>{
    render=req.body;
    console.log(req.body)
    res.send("received")
})

app.get("/getdata",(req,res,next)=>{

    console.log("this is redner")
    console.log(render)
    render?res.send(render):res.send("render not found")
})

app.listen(port,()=>{
    console.log("server started")
})