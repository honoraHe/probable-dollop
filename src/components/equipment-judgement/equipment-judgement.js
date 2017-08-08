/**
* #描述
* 判断设备(pc/ios/android)
* @author dorryLiu
* @class Equipmentjudgement
*
*     **使用范例**：
*
*     @example  
*     var equipmentjudgement = new Equipmentjudgement(); 
*     equipmentjudgement.iosFlag
*     equipmentjudgement.androidFlag
*     equipmentjudgement.pcFlag
*/
function Equipmentjudgement(){
	/**
	* @cfg {Object} Flag 参数说明
	* @param {Boolean} iosFlag ios条件开关
	* @param {Boolean} androidFlag android条件开关
	* @param {Boolean} pcFlag pc条件开关
	*/
	var iosFlag = false,
		androidFlag = false,
		pcFlag = false;
	var browser = {
	    versions:function(){
	        var u = navigator.userAgent;
	        return { //移动终端浏览器版本信息
	            trident: u.indexOf('Trident') > -1, //IE内核
	            presto: u.indexOf('Presto') > -1, //opera内核
	            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
	            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
	            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
	            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
	            android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
	            uc:u.indexOf('Linux') >-1,//uc浏览器
	            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
	            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
	            iPad: u.indexOf('iPad') > -1, //是否iPad
	        };
	    }(),
	    language:(navigator.browserLanguage || navigator.language).toLowerCase()
	}
	if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
	    iosFlag = true;
	}else if(browser.versions.android){
		androidFlag = true;
	}else{
		pcFlag = true;
	}
	return{
		iosFlag:iosFlag,
		androidFlag:androidFlag,
		pcFlag:pcFlag
	}
}

export default Equipmentjudgement

