const express = require('express');
const app = express();
const cors = require('cors');
const controllers = require('./controllers/brandListController');

app.use(cors());
app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.get('/brandList', (req , res) => {
    controllers.getAllbrandlist(req, res , next =>{
        res.send();
    });
});


app.get('/brandList/:id', (req , res) => {
    controllers.getbrandlistById(req, res , next =>{
        res.send();
    });
});

app.post('/brand', (req , res) => {
    controllers.addbrandList(req.body, (callack) =>{
        res.send(callack);
    });
});
