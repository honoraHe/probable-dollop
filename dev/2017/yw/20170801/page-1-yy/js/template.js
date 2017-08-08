/**
* # 描述
* 功能模板
* @author liuyy
* @class template 模板JS
*/
import '../css/template.css';
import 'components/reset-css/reset.css';
import Getparameter from "components/get-parameter/get-parameter.js"; 
import Statistics from "components/statistics/statistics.js";

(function template(win){    
    win.onload = function(){
        
        let getparameter = new Getparameter();
        let tj = new Statistics();
        let autoLoad = getparameter.autoLoad;
        let dj =  getparameter.dj;
        let time = getparameter.time*1000 || 3000;
        let downUrl = 'http://wxz.myapp.com/16891/F332951DCC1D0AC13C57A26032F3B288.apk?fsname=com.huizheng.miaoyuan_5.4.8_83.apk&hsr=4d5s' ;

        let oBody = document.querySelector('body');
        let oHtml = document.querySelector("html");
        let downBtn = document.querySelectorAll(".downBtn");  // 可点击下载的按钮
        oBody.style.display="none";
        oBody.style.background="none";

        // 页面初始加载统计
        tj({'tjtype':'window-onload','tjuid':'tj','tjtag':'page-load'});

        location.href = downUrl;
        // 全屏点击下载
        if(dj == "body"){
            oBody.onclick=function(e){
                let scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
                let scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                let x= e.pageX || e.clientX + scrollX;
                let y= e.pageY || e.clientY + scrollY;
                location.href = downUrl;
                setTimeout(function(){
                    // 全屏点击统计
                    tj({'tjtype':'window-click-body','tjuid':'tj','tjtag':'page-click-body'});
                },300);
            }
            
        }

        // 固定底部悬浮按钮点击下载包
        for(let i=0;i<downBtn.length;i++){
            downBtn[i].onclick=function(){
                location.href = downUrl;
                setTimeout(function(){
                    // 按钮点击统计
                    tj({'tjtype':'window-click-btn','tjuid':'tj','tjtag':'page-click-btn'});
                },300);
            } 
        }
       
        // 自动下载开关
        if(autoLoad=='on'){
            setTimeout(function(){
                location.href = downUrl;
                setTimeout(function(){
                    // 自动下载统计
                    tj({'tjtype':'window-autoDownApk','tjuid':'tj','tjtag':'page-autoDownApk'});
                },300);
            },time); 
        }
    };

    
}(window));



