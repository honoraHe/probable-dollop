/**
* #描述
* 根据屏幕尺寸,通过rem单位自适应各种屏幕尺寸
* @author dorryLiu
* @class Devicejudgment
* 此模块在需要使用rem为单位进行运算时之间引入即可	
*
*     **使用范例**：
*
*     @example  
*     var devicejudgement = new Devicejudgement(document,window); 
*/

function Devicejudgement(doc, win) {
	/**
	* @cfg {Object}  配置参数说明
	* @param {Object} clientWidth 获取可视区宽度
	*/
	var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function () {
	var clientWidth = docEl.clientWidth;
	if (!clientWidth) return;
	docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
	};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
	return Devicejudgement
}

export default Devicejudgement(document,window);