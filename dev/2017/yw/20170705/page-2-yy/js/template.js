/**
* # 描述
* 功能模板
* @author liuyy
* @class template 模板JS
*/
import '../css/template.css';
import 'components/reset-css/reset.css';
// import Devicejudgement from "components/device-judgement/device-judgement.js"; 
import Getparameter from "components/get-parameter/get-parameter.js"; 
import Statistics from "components/statistics/statistics.js";

(function template(win){    
    win.onload = function(){
    	// let devicejudgement = new Devicejudgement(document,window);
        let getparameter = new Getparameter();
        let tj = new Statistics();
        let fromId = getparameter.from || getparameter.qd || getparameter.channelyy || 66223; 
        
        let urlType = getparameter.ut;
        let autoLoad = getparameter.autoLoad;
        let dj =  getparameter.dj;
        let time = getparameter.time*1000 || 3000;
        let downUrl = '//sptd.youyuan.com/apk/download/'+fromId+'/YouYuan_'+fromId+'.apk' ;

        if(urlType == 'sp'){
            downUrl = '//sptd.youyuan.com/apk/sp/'+fromId+'/YouYuan_'+fromId+'.apk';        
        }
        if(urlType == 'yobolove'){
            downUrl = '//sptd.youyuan.com/apk/download/'+fromId+'/yobolove_'+fromId+'.apk';
        }
        if(urlType == 'yoboloveSp'){
            downUrl = '//sptd.youyuan.com/apk/sp/'+fromId+'/yobolove_'+fromId+'.apk';
        }
        if(urlType == 'lrxq'){
            downUrl = '//sptd.youyuan.com/apk/download/'+fromId+'/lrxq_'+fromId+'.apk';
        }

        let oBody = document.querySelector('body');
        let oHtml = document.querySelector("html");
        let downBtn = document.getElementsByClassName("downBtn");  // 可点击下载的按钮

        // 页面初始加载统计
        tj({'tjtype':'window-onload','tjuid':'tj','tjtag':'page-load'});

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
            oHtml.onclick=function(){
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



