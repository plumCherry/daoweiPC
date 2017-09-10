
var router = require('express').Router();
var db = require('../dao/db.js');
var axios = require('axios');





router.get('/', function (req, res) {
    axios.get('http://localhost:3000/menuItem')
        .then(function (response) {
            var obj = {
                menu: response.data
            };
            res.render('index',obj);
            res.send();
        })
        .catch(function (error) {
            console.log(error)
        });

});
router.get('/server', function (req, res) {
    axios.get('http://www.daoway.cn/service/serviceItems?start=1&size=56')
        .then(function (response) {
            var obj = {
                server: response.data
            };
            res.render('server',obj);
            res.send();
        })
        .catch(function (error) {
            console.log(error)
        })

});
router.get('/serviceItems',function (req,res,next) {
    var serviceId = req.query.serviceId;
    axios.get("http://www.daoway.cn/daoway/rest/service/"+serviceId)
        .then(function (response) {

            var server = response.data.data;
            axios.get("http://www.daoway.cn/fuwushang/getComments?start=10&serviceId="+serviceId)
                .then(function (response) {
                    var obj = {
                        server: server,
                        comment: response.data.data
                    };

                    res.render('serviceItems',obj);
                    res.send();
                })
                .catch(function (error) {
                    console.log(error)
                });

            /* moment(value).format('YYYY-MM-DD ')*/
        })
        .catch(function (error) {
            console.log(error);
        });

});
router.get('/downloadAPP',function (req,res,next) {
    axios.get("http://localhost:3000/download")
        .then(function (response) {
            var obj = {
                down: response.data
            };
            res.render('downloadAPP',obj);
            res.send();
        })
        .catch(function (error) {
            console.log(error)
        });

});
router.get('/aboutus',function (req,res,next) {
    res.render('aboutus');
    res.send();
});
router.get('/businessmen',function (req,res,next) {
    res.render('businessmen');
    res.send();
});
router.get('/sort',function (req,res,next) {
    var id = req.query.id;
    var tags = req.query.tags;
    axios.get("http://www.daoway.cn/daoway/rest/service/full/"+id)
        .then(function (response) {
            var obj = {
                tags:tags,
                sort: response.data.data
            };

            res.render('sort',obj);
            res.send();
        })
        .catch(function (error) {
            console.log(error);
        })

});


router.get('/login',function (req,res,next) {
    res.render('login');
    res.send();
});
router.post('/logins.html',function (req,res,next) {
    var userName = req.body.username;
    var passWord = req.body.password;
    db.getUser(userName,info);
    function info(err,doc) {
        if (err){
            res.send('恭喜你页面走失了，你可以去买彩票了')
        }else{
            res.redirect('/')
        }
    }
});

module.exports = router;

