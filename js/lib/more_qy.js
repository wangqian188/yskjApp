var nav = $('.top_nav li');
//所属行业
$('.sshy').click(function(){
	hy();
	$('.zc_box').css('display','block');
	$('.bottom_box').css('overflow','hidden');
	$('.tj_box1').css('display','none');
	$('.tj_box').css('display','block');
	$(this).find('.nav_jt').attr('class','mui-icon mui-icon-arrowup nav_jt');
	$('.nav_jt').eq(1).attr('class','mui-icon mui-icon-arrowdown nav_jt');
});
//所属区域
$('.ssqy').click(function(){
	qy();
	$('.zc_box').css('display','block');
	$('.bottom_box').css('overflow','hidden');
	$('.tj_box').css('display','none');
	$('.tj_box1').css('display','block');
	$(this).find('.nav_jt').attr('class','mui-icon mui-icon-arrowup nav_jt');
	$('.nav_jt').eq(0).attr('class','mui-icon mui-icon-arrowdown nav_jt');
});
//重置箭头方向
function nav_reset(){
	var jt_res = $('.nav_jt');
	for (var i=0; i<jt_res.length; i++) {
		$('.nav_jt').eq(i).attr('class','mui-icon mui-icon-arrowdown nav_jt');
	}
}
//点击遮罩隐藏筛选
$('.zc_box').click(function(){
	nav_reset();
	$('.zc_box').css('display','none');
	$('.bottom_box').css('overflow','auto');
});
//阻止事件冒泡
$('.tj_box').click(function(){
	return false;
});
function qy(){
	//获取所有的区域
	mui.ajax(Interface_url + '/yhcms/web/lpjbxx/getLpcity.do',{
		data:{},
		dataType:'json',
		type:'post',
		timeout:10000,
		headers:{'Content-Type':'application/json'},	              
		success:function(data){
			if(data.success){
				var xzqyData = data.data.xzqy;
				var area_leftstr = '';
				for (var i=0; i<xzqyData.length; i++) {
					area_leftstr += '<span id="'+xzqyData[i].fdcode+'" onclick="clk('+xzqyData[i].fdcode+','+i+')">'+xzqyData[i].fdname+'</span>';
				}
				$('.tj_box1').html(area_leftstr);
			}else{
				
			}
		},
		error:function(xhr,type,errorThrown){
			console.log(type);
		}
	});
}
var hy_arr = [
{value:'wh',text:'文化'},
{value:'zx',text:'咨询'},
{value:'cm',text:'传媒'},
{value:'hl',text:'互联'},
{value:'jy',text:'教育'},
{value:'jr',text:'金融'},
{value:'kj',text:'科教'},
{value:'ly',text:'旅游'},
{value:'qt',text:'其他'}
];
//属于行业
function hy(){
	var area_leftstr = '';
	for (var i=0; i<hy_arr.length; i++) {
		area_leftstr += '<span onclick="clk('+hy_arr[i].text+','+i+')">'+hy_arr[i].text+'</span>';
	}
	$('.tj_box').html(area_leftstr);
}
$('#vip_list li').click(function(){
	mui.openWindow({ 
		url:'./qy_detail.html',
		id:'qy_detail'
	})
});
