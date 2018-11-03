var bosonnlp = require('bosonnlp');
// var nlp = new bosonnlp.BosonNLP('tisMljlM.27843.un29s13XHwrS');
var nlp = new bosonnlp.BosonNLP('A38E3Kdv.27964.giZ-4pW3EIuI');
var info = require('../DB/info');
var moment = require('moment');
var manager = require("../DB/manager");
// var content = '大连理工大学软件学院各团支部成员：为在学院广大团员青年中弘扬志愿服务精神，推动学院志愿服务蓬勃发展，团委青年志愿者协会特开展“志愿辽宁”志愿者注册事宜。现将具体事宜公示如下。 一、  参与对象大连理工大学软件学院各团支部成员。二、  注意事项1、各团支部“志愿辽宁”注册人数占比于该学年团建志愿服务类评分。2、在部分评优评先中，“志愿辽宁”注册将作为硬性要求。3、注册流程详情请见附件一：“志愿辽宁”志愿者网上注册详细流程及注意事项。4、已进行过“志愿辽宁”注册的团支部成员无需再次注册，只需向团支书提交注册信息表和注册截图即可。5、各团支部需提交包含团支部所有成员的注册信息表(附件二)以及注册截图（附件三）。6、材料上交以团总支为单位发送至团委青年志愿者协会公邮ssdutqx@163.com.截止日期为10月24日晚12点。7、若对注册流程有任何疑问，可联系孟祥宇 13220832320。团委青年志愿者协会2018年10月19日';
exports.start = function(callback){

    info.findAll({
        where:{
            startTime : null
        }
    }).then(function(result){
        // console.log(result[1].content);
        // console.log(result);
        var i = 0;
        // result.forEach(function(item){
        // 	var content = item.title;
        // 	console.log(content);
        //
        // })
        getMsg();
        function getMsg() {
            var content = result[i].content;
            var pubTime = result[i].pubTime;
            var infoId = result[i].infoId;
            nlp.ner(content, function(resultStr){
                ret = JSON.parse(resultStr);
                // console.log(ret);
                // console.log(resultStr);
                var word = ret[0].word;
                var entity = ret[0].entity;
                var strArray = [];
                entity.forEach(function(item){

                    if(item[2] === 'time'){
                        var retStr = '';
                        for(var i = item[0]; i < item[1]; i++)
                        {
                            retStr += word[i];
                        }
                        // strArray.push(retStr);
                        if((retStr.indexOf('月') != -1 && retStr.indexOf('日') != -1 || retStr.indexOf('-') != -1) && retStr.indexOf('二') == -1 && retStr.indexOf("季") == -1 && retStr.indexOf("秋") == -1){
                            // console.log( retStr.replace('年','-').replace('月','-').replace('日',' ') + "is a date");
                            if(retStr.indexOf('年') == -1 || retStr.indexOf('-') == 2 || retStr.indexOf('-') == 1){
                                var retStrYear = '2018年' + retStr;
                                if(retStrYear.split('日')[1] != null && retStrYear.indexOf('x') == -1){
                                    var retStrFin = retStrYear.split('日')[0] + '日';
                                    // console.log(retStrFin.replace('年','-').replace('月','-').replace('日',''));
                                    strArray.push(retStrFin.replace('年','-').replace('月','-').replace('日',''));
                                }
                            }else{
                                if(retStr.split('日')[1] != null && retStr.indexOf('x') == -1){
                                    var retStrFin = retStr.split('日')[0] + '日';
                                    // console.log(retStrFin.replace('年','-').replace('月','-').replace('日',''));
                                    strArray.push(retStrFin.replace('年','-').replace('月','-').replace('日',''));
                                }
                            }

                        }
                    }
                    var size = strArray.length;
                    console.log(size);
                    switch(size){
                        case 2:
                            var str_01 = strArray[0].split('-')[2];
                            var str_02 = strArray[1].split('-')[2];
                            if(parseInt(str_01, 10) <= parseInt(str_02, 10)){
                                var sql_01 = 'UPDATE info SET startTime =  "' + strArray[0] + ' "WHERE infoId = "' + infoId + '"';
                                var sql_02 = 'UPDATE info SET endTime =  "' + strArray[1] + ' "WHERE infoId = "' + infoId + '"';
                                manager.sequelize.query(sql_01);
                                manager.sequelize.query(sql_02);
                            }else{
                                var sql_01 = 'UPDATE info SET startTime = "' + strArray[1] + ' "WHERE infoId = "' + infoId + '"';
                                var sql_02 = 'UPDATE info SET endTime =  "' + strArray[0] + ' "WHERE infoId = "' + infoId + '"';
                                manager.sequelize.query(sql_01);
                                manager.sequelize.query(sql_02);
                            }
                            break;
                        default:
                            // var sql = 'UPDATE info SET startTime =  "' + result[i].pubTime + ' "WHERE infoId = "' + result[i].infoId + '"';
                            var sql_01 = 'UPDATE info SET startTime =  "' + pubTime + ' "WHERE infoId = "' + infoId + '"';
                            var sql_02 = 'UPDATE info SET endTime =  "' + pubTime + ' "WHERE infoId = "' + infoId + '"';
                            manager.sequelize.query(sql_01);
                            manager.sequelize.query(sql_02);
                            break;

                    }
                    // console.log(strArray);
                })
            });
            // var sql = 'UPDATE info SET startTime =  "' + result[i].pubTime + ' "WHERE infoId = "' + result[i].infoId + '"';
            // manager.sequelize.query(sql);
            // console.log(i);
            i++;
            console.log('====');
            if(i < result.length){
                setTimeout(getMsg,Math.random()*5*1000);
            }else{
                callback();
            }

        }
    }).catch(function(err){
        console.log('failed: ' + err);
    });
};
// nlp.ner(content, function (resultStr) {
// 	result = JSON.parse(resultStr);
// 	var word = result[0].word;
// 	var tag = result[0].tag;
// 	var entity = result[0].entity;
// 	// console.log(resultStr);
// 	// console.log(word);
// 	// console.log(tag);
// 	//console.log(entity);
// 	entity.forEach(function(item){
// 		if(item[2] === 'time'){
//
// 			console.log(item[2]);
// 			//console.log(resultStr);
// 			var retStr = '';
// 			for(var i = item[0] ; i < item[1]; i ++){
// 				// console.log( word[ i ] );
// 				retStr += word[ i ];
// 			}
// 			console.log(retStr);
// 		}
//
// 	})
//
// });

