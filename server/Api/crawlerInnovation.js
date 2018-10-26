var api = require('./infoApi');
var infoUrl = require('../DB/infourl');
var http = require('http');
var url = 'http://chuangxin.dlut.edu.cn/zytz/zytz.htm';
var cheerio = require('cheerio');

// 加载编码转换模块
var iconv = require('iconv-lite');

function informationClassJudge(informationTitle){

    var informationClass = [];
    if(informationTitle.indexOf("竞赛") != -1 ||informationTitle.indexOf("竞赛") != -1 || informationTitle.indexOf("计算") != -1 || informationTitle.indexOf("创新") != -1 || informationTitle.indexOf("创业") != -1 || informationTitle.indexOf("创客") != -1 || informationTitle.indexOf("创意") != -1){
        // var informationClass = "technology";
        informationClass.push("31");
    }
    if(informationTitle.indexOf("模拟联合国") != -1 || informationTitle.indexOf("演讲") != -1|| (informationTitle.indexOf("英语") != -1 && informationTitle.indexOf("比赛") != -1) || informationTitle.indexOf("运动") != -1 || informationTitle.indexOf("体育") != -1){
        // var informationClass = "technology";
        informationClass.push("32");
    }
    if(informationTitle.indexOf("奖学金") != -1 ||informationTitle.indexOf("竞选") != -1 || informationTitle.indexOf("打擂") != -1 || informationTitle.indexOf("评选") != -1|| informationTitle.indexOf("助学金") != -1){
        // var informationClass = "technology";
        informationClass.push("33");
    }
    if(informationTitle.indexOf("实践") != -1 ||informationTitle.indexOf("社会") != -1){
        // var informationClass = "technology";
        informationClass.push("34");
    }
    if(informationTitle.indexOf("公示") != -1 || informationTitle.indexOf("排名") != -1 || informationTitle.indexOf("奖学金") != -1|| informationTitle.indexOf("助学金") != -1){
        // var informationClass = "technology";
        informationClass.push("35");
    }
    if(informationTitle.indexOf("四级") != -1 || informationTitle.indexOf("六级") != -1 || informationTitle.indexOf("课") != -1 || informationTitle.indexOf("调课") != -1){
        // var informationClass = "technology";
        informationClass.push("36");
    }
    if(informationClass == false)
    {
        informationClass.push("39");
    }
    return informationClass;
}
function filterChapters_02(html) {
    var $ = cheerio.load(html);

    var temp = $('.header_con').find('p').text();
    // var informationDate = temp.split("：")[3];
    // var Date = informationDate.replace('年','-').replace('月','-').replace('日','');
    var Date = temp.split("：")[3];
    var informationTitle = $('.header_con').find('h3').text();
    var informationContent = $('#div_vote_id').prev().text();
    var informationClass = JSON.stringify(informationClassJudge(informationTitle));
    var htmlContent = $('#div_vote_id').prev().html();
    var time = {
        title: informationTitle,
        content: informationContent,
        date:Date,
        // kind: informationClass,
        kind:informationClass,
        htmlContent:htmlContent
    }
    // console.log(time);
    return time;
}

function filterChapters(html) {
    var $ = cheerio.load(html);
    // console.log(html);
    var list = $('.list ul li');
    // console.log(list);
    var itemsData = [];
    list.each(function () {
        // console.log(list.text());
        var item = $(this);
        // var itemTitle = item.find('a').text();
        var itemHref = "http://chuangxin.dlut.edu.cn/"+ item.find('a').attr('href').split("../")[1];
        itemsData.push(itemHref);
    });

    return itemsData;
}
function startHttpGet_02(itemsData){

    var DataTemp = '';
    http.get(itemsData,function (res) {
        var html ='';

        res.on('data',function (data) {
            html += data
        });
        res.on('end',function () {
            DataTemp =  filterChapters_02(html);
            api.createAInfo(DataTemp);
        });
    }).on('error',function () {
        console.log('获取学生周知出错')
    });
}
// function startHttpGet()
exports.startHttpGet = function() {
    http.get(url,function (res) {
        var html ='';
        res.on('data',function (data) {
            html += data
        });
        res.on('end',function () {
            var Data = filterChapters(html);
            // var Data = api.urlJudge(temp);

            Data.forEach(function(item, index){
                // console.log(item + "====" + index);
                infoUrl.findOne({
                    where:{
                        url:item
                    }
                }).then(function(result){
                    if(result == null)
                    {
                        console.log(item);
                        api.createAUrl(item);
                        startHttpGet_02(item);
                    }
                    else
                    {
                        console.log("have existed");
                    }
                }).catch(function(err){
                    console.log('failed: ' + err);
                })
            })

        });
    }).on('error',function () {
        console.log('获取学生周知出错')
    });
};
// startHttpGet();