var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/app', function(req, res, next) {
    console.log("shoudao1");
    var data = {'name': 'jifeng', 'company': 'taobao'};
    var ret = "getName("+ JSON.stringify(data)+ ")";
    res.end(ret);
});


router.post('/app', function(req, res, next) {
    console.log("shoudao2");
    res.send({ some: 'json' });
});

router.get('/jsonp', function(req, res, next) {
    console.log("shoudao3");
    var data = { some: 'json' };
    data = JSON.stringify(data);
    res.json({a:1,b:2});
});
module.exports = router;
