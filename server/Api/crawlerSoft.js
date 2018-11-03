var api = require('./infoApi');
var infoUrl = require('../DB/infourl');
var http = require('http');

// 获取多个界面
// var url = new Array();
// url[0] = 'http://ssdut.dlut.edu.cn/index/bkstz.htm';
// for(var i = 1; i < 5; i++)
// {
//     url[i] = 'http://ssdut.dlut.edu.cn/index/bkstz/'+ (16 - i) + '.htm'
// }


var api = require('./infoApi');
//网页获取
var url = 'http://ssdut.dlut.edu.cn/index/bkstz.htm';

//cheerio爬虫
var cheerio = require('cheerio');

// 加载编码转换模块
var iconv = require('iconv-lite')

function informationClassJudge(informationTitle){
    // console.log(typeof informationTitle);
    // var a = informationTitle.("转发");
    // console.log(a);
    var informationClass = [];
    if(informationTitle.indexOf("竞赛") != -1 ||informationTitle.indexOf("竞赛") != -1 || informationTitle.indexOf("计算") != -1 || informationTitle.indexOf("创新") != -1 || informationTitle.indexOf("创业") != -1 || informationTitle.indexOf("创客") != -1 || informationTitle.indexOf("创意") != -1){
        // var informationClass = "technology";
        informationClass.push("11");
    }
    if(informationTitle.indexOf("模拟联合国") != -1 || informationTitle.indexOf("演讲") != -1|| (informationTitle.indexOf("英语") != -1 && informationTitle.indexOf("比赛") != -1) || informationTitle.indexOf("运动") != -1 || informationTitle.indexOf("体育") != -1){
        // var informationClass = "technology";
        informationClass.push("12");
    }
    if(informationTitle.indexOf("奖学金") != -1 ||informationTitle.indexOf("竞选") != -1 || informationTitle.indexOf("打擂") != -1 || informationTitle.indexOf("评选") != -1|| informationTitle.indexOf("助学金") != -1){
        // var informationClass = "technology";
        informationClass.push("13");
    }
    if(informationTitle.indexOf("实践") != -1 ||informationTitle.indexOf("社会") != -1){
        // var informationClass = "technology";
        informationClass.push("14");
    }
    if(informationTitle.indexOf("公示") != -1 || informationTitle.indexOf("排名") != -1 || informationTitle.indexOf("奖学金") != -1|| informationTitle.indexOf("助学金") != -1){
        // var informationClass = "technology";
        informationClass.push("15");
    }
    if(informationTitle.indexOf("四级") != -1 || informationTitle.indexOf("六级") != -1 || informationTitle.indexOf("课") != -1 || informationTitle.indexOf("调课") != -1){
        // var informationClass = "technology";
        informationClass.push("16");
    }
    if(informationClass == false)
    {
        informationClass.push("19");
    }
    return informationClass;
}

function filterChapters(html) {
    var $ = cheerio.load(html);
    //console.log(html)
    var c_hzjl_list1 = $('.c_hzjl_list1 ul li');

    var itemsData = [];
    c_hzjl_list1.each(function () {
        var item = $(this);
        var itemHref = "http://ssdut.dlut.edu.cn/"+ item.find('a').attr('href').split("../")[1];
        itemsData.push(itemHref);
    });
    return itemsData;
}

function filterChapters_02(html) {
    var $ = cheerio.load(html);
    // console.log(html);
    var temp = $($('.lh_15per').children("div").get(0)).text();
    var informationDate = temp.split(" ")[0];
    var Date = informationDate.replace('年','-').replace('月','-').replace('日','');
    var informationTitle = $('.lh_15per').find('h1').text();
    var informationContent = $('#div_vote_id').prev().text();
    var htmlContent = $('#div_vote_id').prev().html();
    var informationClass = JSON.stringify(informationClassJudge(informationTitle));
    var time = {
        title: informationTitle,
        content: informationContent,
        date:Date,
        // kind: informationClass,
        kind:informationClass,
        htmlContent:htmlContent
    };
    // console.log(time);
    return time;
}

function startHttpGet_02(itemsData){

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

// function startHttpGet()
exports.startHttpGet = function(){
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
