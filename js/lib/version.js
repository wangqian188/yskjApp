//获取版本号
//mui.plusReady(function(){
//	plus.runtime.getProperty(plus.runtime.appid,function(inf){
//		alert(inf.version);
//		return inf.version;
//	});	
//	plusReady();
//});

var wgtVer=null; 
function plusReady(){ // 获取本地应用资源版本号 
    plus.runtime.getProperty(plus.runtime.appid,function(inf){ 
        wgtVer=inf.version; 
    }); 
} 
mui.plusReady(function(){
	plusReady();	
});


//操作系统
	    var e = navigator.userAgent.toLowerCase();
	    var u = navigator.userAgent, app = navigator.appVersion;
	    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
	    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	    var appUrl="";
	    function version(){
	      	$.ajax({  
	              type:'post',  
	              url:'http://116.62.68.26:8080/yskjApp/webApp/dataInfo/appDown.do?appType=android',
	              dataType:'json',  
	              headers:{'Content-Type':'application/json'},	              
	              success:function(data){
	                   appUrl=data.appUrl;
	                   if (isAndroid) {
					       //安卓操作系统
					       if(data.data.versionCode != wgtVer){
						        var btnArray = ['忽略更新', '立即更新'];
								mui.confirm('您当前的版本为1.1.0，发现最新版本1.1.1，是否下载更新？', '提示', btnArray, function(e) {
								 	if (e.index == 0) {
										mui.toast("已取消更新！");
								 	}
								 	if(e.index == 1){
										mui.toast("发现新版本！");
										window.location.href= data.data.appFileUrl;
								 	}
								})
					       }else{
					       		return;
					       }
					       //window.location.href="http://192.168.0.126:8080/yskjApp/webApp/dataInfo/appDown.do?appType=android&appVersion=V1.1";
					    }else if (isIOS) {
					　　　　   //ios操作系统
	//				    window.location.href=appUrl;
					    	window.location.href='https://itunes.apple.com/cn/app/id1253355672?mt=8';
					       
					       //window.location.href="http://116.62.68.26:8080/yskjApp/webApp/dataInfo/appDown.do?appType=IOS&appVersion=V1.1";
					    }else {
					        //window.location.href="http://47.92.145.21:81/yskj.apk";
					    } 
	              },
	              error:function(xhr,type,errorThrown){
					  //异常处理；
					  alert("下载失败！");
				   } 
	          });
	    	
	    }