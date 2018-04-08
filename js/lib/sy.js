//检测网络环境是否链接
function networkLink(){
	if (plus.networkinfo.getCurrentType() == plus.networkinfo.CONNECTION_NONE) {
//		mui.alert("网络异常，请检查网络设置！", function(){
//			alert(123);
//		});
		mui.toast("网络异常，请检查网络设置！");
}
//	else{
//		window.onload();
//	}
}
//获取版本号
//mui.plusReady(function(){
//	plus.runtime.getProperty(plus.runtime.appid,function(inf){
//		alert(inf.version);
//		return inf.version;
//	});	
//	plusReady();
//});
//
//var wgtVer=null; 
//function plusReady(){ // 获取本地应用资源版本号 
//  plus.runtime.getProperty(plus.runtime.appid,function(inf){ 
//      wgtVer=inf.version; 
//      alert(wgtVer);
//  }); 
//} 

