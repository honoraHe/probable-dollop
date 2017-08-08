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
    let jumpTo = document.getElementById("jumpTo");
    let fromId = getparameter.from;
    let autoLoad = getparameter.autoLoad;
    let time = getparameter.time;
    let downUrl = "//sptd.youyuan.com/apk/download/"+fromId+"/YouYuan_"+fromId+".apk"; 
    // 页面访问统计
    win.onload = function(){
        tj({'tjtype':'pageLoad','tjuid':'zjw-20170705','tjtag':'pageLoad','channelyy':fromId,'from':fromId,'downloadUrl':downUrl});
    };
    //点击下载统计
    jumpTo.addEventListener('click',function(){
        location.href = downUrl;
        tj({'tjtype':'pageClick','tjuid':'zjw-20170705','tjtag':'pageClick','channelyy':fromId,'fromId':fromId,'downloadUrl':downUrl});
    })

    // if(autoLoad == 'on'){
        setTimeout(function(){
            location.href = downUrl;
        }, 3000);
    // }
}(window));