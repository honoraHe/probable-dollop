/**
* # 依赖引用
* @requires tip.css 样式信息
* @requires tip.htm dom结构
*/
import './tip.css';
import tpl from './tip.htm';

/**
* # 描述
* 这是提示组件Tip的描述
*
* **使用范例**：
*
*     @example
*     var tip = new Tip();
*	  tip.show('haha');
* @class Tip
* @return {object} tip实例
*/
function Tip(options){
	/**
	* 初始化配置
	* @cfg {element} msgEmt 提示信息
	* @cfg {object} _this 获取本地对象
	* @cfg {object} objSetT 延时对象
	* @cfg {object} options 初始化参数
	*
	*/
	var component = document.createElement("div");
	component.innerHTML = tpl;
	var msgEmt = component.querySelector('.msg'),
		tipDiv = component.querySelector('.tip-component'),
		objSetT;
	options = options || {msg:'',type:'loading',time:3800};
	/**
	* @method 显示Tip方法描述
	* @param {string} msg 提示信息内容
	* @param {string} type 提示类型
	* @return null
	*/
	function show(msg,type){
		hide();
		msg = msg||'',type=type||'alert';
		msgEmt.innerHTML = msg;
		if (type==='alert') {
			tipDiv.classList.add('alert');
		}else if(type==='loading'){
			tipDiv.classList.add('loading');
		}
		console.log("tip show");
		objSetT = setTimeout(function(){
			hide();
		},options.time);
	}
	/**
	* @method 隐藏Tip方法描述
	*
	*/
	function hide(){
		tipDiv.classList.remove('alert');
		tipDiv.classList.remove('loading');
		msgEmt.innerHTML = '';
		console.log("tip hide");
		if(objSetT){
			clearTimeout(objSetT);
		}
	}
	/**
	* @method loading Tip触发方法描述
	*
	*/
	function loading(msg){
		console.log("tip loading");
		show(msg,"loading");
	}
	/**
	* 组件点击触发隐藏方法
	* @event click
	* @param {event} ev 点击event
	* @return null
	* 
	*/
	tipDiv.addEventListener("click",function(ev){
		/**
		* # 隐藏tip
		*/
		hide();
		
		ev.stopPropagation();
		return false;
	},false);

	return {
		name: 'tip',
		tpl: tpl,
		element: tipDiv,
		show: show,
		hide: hide,
		loading: loading
	};
};

/**
* # 接口输出
* # exports tip
*/
export default Tip;
