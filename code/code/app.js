const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');

const app = express();

const storage = multer.diskStorage({
	destination: './public/uploads/',
	filename: function(req,file,cb){
	cb(null,file.fieldname + '-'+ Date.now()+ path.extname(file.originalname));
}
});

const upload = multer({
	storage: storage
}).single('Myimage');

app.set('view engine', 'html');

app.use(express.static('./public'));

app.get('/', (req,res) => res.render('index'));

app.post('/upload', (req, res) => {
	upload(req, res, (err) => {
	if(err){
	res.render('index', {
	msg:err
});
}else{
console.log(req.file);
res.status.send(req.file);
}
});
});

const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
