/**
* #描述
* IP获取地址接口
* @author dorryLiu
* @class Ip2area
*
*     **使用范例**：
*
*     @example  
*     var Ip2area = new Ip2area(); 
*     Ip2area.data
*/
function Ip2area(){
    var url = '//ip.ws.126.net/ipquery',ipScript = document.createElement('script');
    ipScript.src = url;
    var data = {ready:false,'Isp':'北京'};
    ipScript.onload = function(){
        data.ready = true;
        data.Isp = localAddress;
    }
    document.querySelector("body").appendChild(ipScript);
    return data;
}
export default Ip2area;
