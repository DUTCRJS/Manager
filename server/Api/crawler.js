var soft = require('./crawlerSoft');
var innovation = require('./crawlerInnovation');
var office = require('./crawlerOffice');
var schedule = require('node-schedule');
var api = require('./infoApi');
// soft.startHttpGet();
// innovation.startHttpGet();
// office.startHttpGet();

var rule = new schedule.RecurrenceRule();
// rule.hour = [0,6,12,18];
rule.second = [0,15,30,45];
schedule.scheduleJob(rule, function(){
    // console.log('现在时间：',new Date());
    soft.startHttpGet();
    innovation.startHttpGet();
    office.startHttpGet();
});
