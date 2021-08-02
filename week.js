const express = require('express');
const bodyparser= require('body-parser');
const date=require(__dirname+"/date.js")
let ejs = require('ejs');
const app= new express();
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
let items=["eat","sleep","rave"];
let it=[];


app.listen(3000,function(){
    console.log("my week project is on 3000");
})
app.get("/",function(req,res){
  let day= date.getdate();
   res.render("week",{kindofday:day,newitem:items});


})
app.post("/",function(req,res){
    console.log(req.body);
    let item= req.body.input;
    if(req.body.list==="Work List"){
        it.push(item);
        res.redirect("/work");

    }
    else{
    items.push(item);
    res.redirect("/");}

})
app.get("/work",function(req,res){
    let work="Work List";
    res.render("week",{kindofday:work,newitem:it});

})
