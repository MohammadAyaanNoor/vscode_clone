var express = require('express');
var router = express.Router();
const fs = require('fs')
const folder = './files'
var path = require('path');

router.get('/', function(req, res) {
  fs.readdir(`${folder}`,{withFileTypes:true},function(err,files){
    res.render('index',{folder:folder, files:files});

  })
});

router.get('/newfile',function(req,res){
  const folderpath = './files/'
  const newfile = {
    filename:req.query.filename
  }
  const filepath = folderpath + `${newfile.filename}`
  const filecontent = ""
  fs.writeFile(filepath, filecontent, function(err){
    if (err) {
      console.error('Error creating file:', err);
    } else {
       res.redirect('/');
    }
  });
})

router.get("/delete/file/:filename",function(req,res){
  fs.unlink(`${folder}/${req.params.filename}`,function(err){
      res.redirect('/')
  })
})
router.get("/delete/folder/:filename",function(req,res){
  fs.rmdir(`${folder}/${req.params.filename}`,function(err){
      res.redirect('/')

  })
})
router.get("/rename/:filename",function(req,res){
  fs.rename(`${folder}/${req.params.filename}`,`${folder}/${req.query.newname}`,function(err){
    res.redirect('/')
  })
})
router.get('/newfolder',function(req,res){
  fs.mkdir(`${folder}/${req.query.foldername}`,{recursive:true},function(err){
    res.redirect('/')
  })
})
router.get('/fileopened/:nameoffile', function(req, res) {
  fs.readdir(`${folder}`,{withFileTypes:true},function(err,files){
    fs.readFile(`./${folder}/${req.params.nameoffile}`,"utf8",(err,data)=>{
      res.render('fileopened',{folder:folder, files:files,nameoffile:req.params.nameoffile,filedata:data});
    })
  })
});
router.get('/update/:filename',function(req,res){
  fs.rename(`${folder}/${req.params.filename}`,`${folder}/${req.query.newname}`,function(err){
     res.redirect('/');
  })
})
router.get("/save/:filename",function(req,res){
  fs.writeFile(`${folder}/${req.params.filename}`,req.query.codearea,function(err){
    res.redirect("back")
  })
})
router.get('/refresh',(req, res) => {
  res.redirect('back')
});


module.exports = router;
