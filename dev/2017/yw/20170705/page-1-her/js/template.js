/**
* # 描述
* 功能模板
* @author her
* @class template 模板JS
*/
import '../css/template.css';
import 'components/reset-css/reset.css';
import Getparameter from "components/get-parameter/get-parameter.js";
import Statistics from "components/statistics/statistics.js";
(function template(win){
    var getparameter = new Getparameter();
    var tj = new Statistics();
    var html = document.getElementsByTagName("html")[0];
    var fromId = getparameter.from;
    var autoLoad = getparameter.autoLoad;
    var time = getparameter.time;
    var downUrl = "//sptd.youyuan.com/apk/download/"+fromId+"/YouYuan_"+fromId+".apk";
    
    //全屏下载
    html.addEventListener('click',function(){
        tj({'tjtype':'pageClick','tjuid':'hr-2017070501','tjtag':'pageClick','channelyy':fromId,'from':fromId,'downloadUrl':downUrl});
        location.href = downUrl;
    })
    win.onload = function(){
        tj({'tjtype':'pageLoad','tjuid':'hr-2017070501','tjtag':'pageLoad','channelyy':fromId,'from':fromId,'downloadUrl':downUrl});
    };

    if(autoLoad == 'on'){
        setTimeout(function(){
            location.href = downUrl;
        }, time);
    }


}(window));