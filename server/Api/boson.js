var bosonnlp = require('bosonnlp');
var nlp = new bosonnlp.BosonNLP('tisMljlM.27843.un29s13XHwrS');

var content = '大连理工大学软件学院各团支部成员：为在学院广大团员青年中弘扬志愿服务精神，推动学院志愿服务蓬勃发展，团委青年志愿者协会特开展“志愿辽宁”志愿者注册事宜。现将具体事宜公示如下。 一、  参与对象大连理工大学软件学院各团支部成员。二、  注意事项1、各团支部“志愿辽宁”注册人数占比于该学年团建志愿服务类评分。2、在部分评优评先中，“志愿辽宁”注册将作为硬性要求。3、注册流程详情请见附件一：“志愿辽宁”志愿者网上注册详细流程及注意事项。4、已进行过“志愿辽宁”注册的团支部成员无需再次注册，只需向团支书提交注册信息表和注册截图即可。5、各团支部需提交包含团支部所有成员的注册信息表(附件二)以及注册截图（附件三）。6、材料上交以团总支为单位发送至团委青年志愿者协会公邮ssdutqx@163.com.截止日期为10月24日晚12点。7、若对注册流程有任何疑问，可联系孟祥宇 13220832320。团委青年志愿者协会2018年10月19日';

nlp.ner(content, function (resultStr) {
	result = JSON.parse(resultStr);
	var word = result[0].word;
	var tag = result[0].tag;
	var entity = result[0].entity;
	console.log(resultStr);
	// console.log(word);
	// console.log(tag);
	//console.log(entity);
	entity.forEach(function(item){
		if(item[2] === 'time'){

			console.log(item[2]);
			//console.log(resultStr);
			var retStr = '';
			for(var i = item[0] ; i < item[1]; i ++){
				//sconsole.log( word[ i ] );
				retStr += word[ i ];
			}
			console.log(retStr);
		}
		
	})
	
});