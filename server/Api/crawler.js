var soft = require('./crawlerSoft');
var innovation = require('./crawlerInnovation');
var office = require('./crawlerOffice');
var schedule = require('node-schedule');
var api = require('./infoApi');
var manager = require("../DB/manager");
var boson = require("./boson")
// soft.startHttpGet();
// innovation.startHttpGet();
// office.startHttpGet();

var rule = new schedule.RecurrenceRule();
// rule.hour = [0,6,12,18];
// rule.minute = [0, 30];
rule.second = [0,15,30,45];
schedule.scheduleJob(rule, function(){
    // console.log('现在时间：',new Date());
    soft.startHttpGet();
    innovation.startHttpGet();
    office.startHttpGet();
    boson.start(function(){
    	var sql = 'DELETE FROM info WHERE startTime is null';
        manager.sequelize.query(sql).then(function(){
            console.log("删除时间为空的项目");
        });
    });

});
