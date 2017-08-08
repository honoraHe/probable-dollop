/**
* #描述 
* 通过url上的拼接属性cp,来判断公司名称展示
* @author dorryLiu
* @class Companyname
*
*     **使用范例**：
*
*     @example  
*     var companyname = new Companyname(); 
*/
import Getparameter from "../get-parameter/get-parameter.js"
import './company-name.css'
function Companyname(){
	/** 
	* @method 获取参数
	* @extends get-parameter.js
	*/

	var getparameter = new Getparameter();
	var cp=getparameter.cp;
	/**
	* 公司名称json数据
	* @cfg {Object} cpData
	*/
	var cpData={
		yyzx:'北京友缘在线网络科技股份有限公司',
		jsy:'北京聚生源网络科技有限公司',
		yb:'北京缘博网络科技有限公司',
		zy:'天津追缘无线科技有限公司'
	}
	
	if(cp=='yyzx' || cp=='yb' || cp=='jsy' || cp=='zy'){
		/**
		* @cfg {String} cp 根据cp值进行展示
		* @param {Object} cpImgDiv 创建一个class为add-compony-name的class,将cpData数据插入进此div中
		* @param {Object} bodyBox 获取body元素
		* @param {Object} cpBox 获取指定存放公司名称的盒子
		*/
		var cpImgDiv=document.createElement('div');
		cpImgDiv.setAttribute("class","add-compony-name");
		cpImgDiv.innerHTML=cpData[cp];
   		var cpBoxLength=document.getElementsByClassName('cp-box').length;
   		var cpBox=document.querySelector(".cp-box");
   		var bodyBox=document.querySelector("body");

   		if(cpBoxLength>0){
   			cpBox.appendChild(cpImgDiv);
   		}else{
   			bodyBox.appendChild(cpImgDiv);
   		}
   		
   		var fontWhite=document.getElementsByClassName("font-white");
   		if(fontWhite.length>0){
   			bodyBox.setAttribute('class','add-font-white');
   		}
   		
   }
}
export default Companyname