var api = require('./infoApi');
var infoUrl = require('../DB/infourl');
var http = require('http');
var url = "http://teach.dlut.edu.cn/zytg/zytg.htm";
var cheerio = require('cheerio');

// 加载编码转换模块
var iconv = require('iconv-lite');

function informationClassJudge(informationTitle){
    var informationClass = [];
    if(informationTitle.indexOf("竞赛") != -1 ||informationTitle.indexOf("竞赛") != -1 || informationTitle.indexOf("计算") != -1 || informationTitle.indexOf("创新") != -1 || informationTitle.indexOf("创业") != -1 || informationTitle.indexOf("创客") != -1 || informationTitle.indexOf("创意") != -1){
        // var informationClass = "technology";
        informationClass.push("21");
    }
    if(informationTitle.indexOf("模拟联合国") != -1 || informationTitle.indexOf("演讲") != -1|| (informationTitle.indexOf("英语") != -1 && informationTitle.indexOf("比赛") != -1) || informationTitle.indexOf("运动") != -1 || informationTitle.indexOf("体育") != -1){
        // var informationClass = "technology";
        informationClass.push("22");
    }
    if(informationTitle.indexOf("奖学金") != -1 ||informationTitle.indexOf("竞选") != -1 || informationTitle.indexOf("打擂") != -1 || informationTitle.indexOf("评选") != -1|| informationTitle.indexOf("助学金") != -1){
        // var informationClass = "technology";
        informationClass.push("23");
    }
    if(informationTitle.indexOf("实践") != -1 ||informationTitle.indexOf("社会") != -1){
        // var informationClass = "technology";
        informationClass.push("24");
    }
    if(informationTitle.indexOf("公示") != -1 || informationTitle.indexOf("排名") != -1 || informationTitle.indexOf("奖学金") != -1|| informationTitle.indexOf("助学金") != -1){
        // var informationClass = "technology";
        informationClass.push("25");
    }
    if(informationTitle.indexOf("四级") != -1 || informationTitle.indexOf("六级") != -1 || informationTitle.indexOf("课") != -1 || informationTitle.indexOf("调课") != -1){
        // var informationClass = "technology";
        informationClass.push("26");
    }
    if(informationClass == false)
    {
        informationClass.push("29");
    }
    return informationClass;
}

function filterChapters_02(html) {
    // console.log(url);
    // console.log(i);
    var $ = cheerio.load(html);
    // console.log(html);
    var temp = $('.header').find('p').text().split('：')[2];
    var informationDate = temp.split(" ")[0];
    var Date = informationDate.replace('年','-').replace('月','-').replace('日','');
    var informationTitle = $('.header').find('h1').text();
    var informationContent = $('#div_vote_id').prev().text();
    var informationClass = JSON.stringify(informationClassJudge(informationTitle));
    // console.log(informationClass);
    var htmlContent = $('#div_vote_id').prev().html();
    var time = {
        title: informationTitle,
        content: informationContent,
        date:Date,
        kind:informationClass,
        htmlContent:htmlContent
    };
    // console.log(time);
    return time;
}

function filterChapters(html) {
    var $ = cheerio.load(html);
    var list = $('.list ul li');
    // console.log(list);
    var itemsData = [];
    list.each(function () {
        // console.log(list.text());
        var item = $(this);
        var itemHref = "http://teach.dlut.edu.cn/"+ item.find('a').attr('href').split("../")[1];

        itemsData.push(itemHref);
    });

    return itemsData;
}
function startHttpGet_02(itemsData){

    // var size = itemsData.length;
    var DataTemp = '';
    // for(var i = 0; i < size; i++)
    // {
    //     http.get(itemsData[i],function (res) {
    //         var html ='';
    //
    //         res.on('data',function (data) {
    //             html += data
    //         });
    //         res.on('end',function () {
    //             DataTemp[i] =  filterChapters_02(html);
    //             api.createAInfo(DataTemp[i]);
    //         });
    //     }).on('error',function () {
    //         console.log('获取学生周知出错')
    //     });
    // }
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

//调用
// startHttpGet();