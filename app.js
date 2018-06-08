const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const Todo =require('./model/todo');

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));


app.set('views',path.join(__dirname,'views'));
app.set('view engine',"ejs");


app.post('/delete/:id',(req,res)=>{
    Todo.findByIdAndRemove(req.params.id,(err)=>{
        if(err){
            res.redirect('/');
        }else{
            res.redirect('/');
        }
    });
});

app.post('/new',(req,res)=>{
    var newList = new Todo(
        {
            event: req.body.event,
            description: req.body.description
        }
    );
    newList.save();
    
    res.redirect('/');
});


app.get('/',(req,res)=>{
    Todo.find()
    .then((lists)=>{
        res.render('index',{newList:lists});        
    });

});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});