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
			       mui.plusReady(function(){
			       		//获取本地版本号
						plus.runtime.getProperty(plus.runtime.appid,function(inf){ 
					        var wgtVer=inf.version; 
					       if(data.data.versionCode != wgtVer){
						        var btnArray = ['忽略更新', '立即更新'];
								mui.confirm('您当前的版本为'+wgtVer+'，发现最新版本'+data.data.versionCode+'，是否下载更新？', '提示', btnArray, function(e) {
								 	if (e.index == 0) {
								 		mui.toast("已取消更新！");
								 	}
								 	if(e.index == 1){
								 		var url = data.data.appFileUrl;
								 		plus.nativeUI.showWaiting('下载更新中...');
								 		var dd= plus.downloader.createDownload(url, {},function(d, status) {
				                            if (status == 200) {
				                            	plus.nativeUI.closeWaiting();
				                                plus.nativeUI.toast("正在准备环境，请稍后！");
				                               // sleep(1000);
				                                var path = d.filename;//下载apk
				                                plus.runtime.install(path); // 自动安装apk文件
				                            }else {
				                                alert('版本更新失败!');
				                            }
				                        });
				                        dd.start();
								 	}
								},'div')
							       }else{
							       		mui.toast("已经最新版本！");
							       		return;
							       }
							    });	
							});
					    }else if (isIOS) {
					　　　　   //ios操作系统
//							mui.plusReady(function(){
//					       		//获取本地版本号
//								plus.runtime.getProperty(plus.runtime.appid,function(inf){ 
//							        var wgtVer=inf.version; 
//							       if(data.data.versionCode != wgtVer){
//								        var btnArray = ['忽略更新', '立即更新'];
//										mui.confirm('您当前的版本为'+wgtVer+'，发现最新版本'+data.data.versionCode+'，是否下载更新？', '提示', btnArray, function(e) {
//										 	if (e.index == 0) {
//										 		mui.toast("已取消更新！");
//										 	}
//										 	if(e.index == 1){
//										 		mui.toast("发现新版本！");
//										 		window.location.href= 'https://www.pgyer.com/IWef';
//										 	}
//										},'div')
//									       }
//									    });	
//								});

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