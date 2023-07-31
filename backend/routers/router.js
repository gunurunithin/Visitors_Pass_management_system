const express = require('express')
const router = express.Router()
const book = require('../model/book')
const empdata = require('../model/empdata')
const monk = require('monk');

var dbs = monk('127.0.0.1:27017/MeanStack')

router.post('/postdata', async(req,res)=>{
    let books;
    try{
        books = new book({
            fname:req.body.send.fname,
            lname:req.body.send.lname,
            email:req.body.send.email,
            number:req.body.send.number,
            in:req.body.send.in,
            out:req.body.send.out,
            purpose:req.body.send.purpose,
            date:req.body.send.dates,
            veh:req.body.send.veh,
            address:req.body.send.address,
            des:req.body.send.des,
            dates:req.body.send.dates,
            gender:req.body.send.gender,
            identity:req.body.send.identity,
        })
        await books.save()
    }catch (err){
        console.log(err)
    }
    if(!books){
        return res.status(500).json({msg:"Someting went wrong"})
    }
    return res.status(200).json({books})
})

const dbo=dbs.get('books');
const dbo1=dbs.get('employee');


router.get('/',function(req, res, next){
    res.render('index', {title:'Express'});
});

router.get('/getData', function(req, res){
 dbo.find({}, function (err, docs){
    {
        if(err){
            res.send(err)
        }else{
            res.send(docs)
        }
    }
 })
})

router.get('/getDatacustomer', function(req, res){
    dbo1.find({}, function (err, docs){
       {
           if(err){
               res.send(err)
           }else{
               res.send(docs)
           }
       }
    })
   })

module.exports= router;