$('.wt_btn').click(function(){
	var place = $('#place').val();//搜索区域、商圈、楼盘
	var mj = $('#area').val();//面积
	var mj1 = $('#area1').val();//面积1
	var fund = $('#fund').val();//预算
	var fund1 = $('#fund1').val();//预算1
	
	//确认查找跳转
	mui.openWindow({
		url: '../jxfy1.html',
		id:'jxfy1'
	});
});
