/**
* # 描述
* 功能模板
* @author zhangjw
* @class template 模板JS
*/
import '../css/template.css';
import 'components/reset-css/reset.css';
import Getparameter from "components/get-parameter/get-parameter.js";
import Statistics from "components/statistics/statistics.js";
(function template(win){
    let getparameter = new Getparameter();
    let tj = new Statistics();
    let body = document.getElementsByTagName("body")[0];
    let fromId = getparameter.from;
    let downUrl = "//sptd.youyuan.com/apk/download/"+fromId+"/YouYuan_"+fromId+".apk"; 
    win.onload = function(){
        tj({'tjtype':'pageLoad','tjuid':'hr-20170714','tjtag':'pageLoad','channelyy':fromId,'from':fromId,'downloadUrl':downUrl});
    };
    //全屏下载
    body.addEventListener('click',function(){
        tj({'tjtype':'pageClick','tjuid':'hr-20170714','tjtag':'pageClick','channelyy':fromId,'fromId':fromId,'downloadUrl':downUrl});
        location.href = downUrl;
    })
}(window));