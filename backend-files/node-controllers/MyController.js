const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
const Call = require('./calls');
const fetch = require("node-fetch")

const database = require("../models/database");
const getUsers = (request, response) => {
    database.pool.query('SELECT id, geom, commune_fr, commune_ar, pachalik_c, pachalik_1, type, shape_leng, shape_area FROM public.communes_berkane', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const users = [{ firstName: 'Mrabti', lastName: 'Younes', email: 'younesmrabti@gmail.com' }];
router.get('/users', getUsers);

router.get('/vectorol', (req, res) => {
    const user = req.body.user;
    users.push(user);
    res.json(user);
});
router.post('/user', (req, res) => {
    res.json({"source":1});
});
router.get('/dashboard/:layer', (req, res) => {
    database.pool.query('SELECT * FROM '+req.params.layer, (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
    // res.status(200).json(req.params.layer)
});
router.get('/fetch/:layer', (req, res) => {
    let url = `http://sigsrv:8080/geoserver/dashboard/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dashboard%3A${req.params.layer}&outputFormat=application%2Fjson`;
    
    fetch(url).then(res => res.json())
    .then(json_result => {
        res.json(json_result);
    })
    // res.status(200).json(req.params.layer)
});


// router.post('/user', function (req, res) {
//     Call.AddUser(req.body,function(err,rows){
//         if(err) {
//             res.status(400).json(err);
//         }
//         else
//         {
//             res.json(rows);
//         }
//     });
// });

// router.get('/users', function (req, res) {
//     Call.getUsers(function(err,rows){
//         if(err) {
//             res.status(400).json(err);
//         }
//         else
//         {
//             res.json(rows);
//         }
//     });
// });
module.exports = router;