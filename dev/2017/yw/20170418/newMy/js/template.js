/**
* # 描述
* 功能模板
* @author zjw
* @class template 模板JS
*/
import '../css/template.css';
import 'components/reset-css/reset.css';
import Getparameter from "components/get-parameter/get-parameter.js";
import Statistics from "components/statistics/statistics.js"
(function template(win){
    let getparameter = new Getparameter();
    let tj = new Statistics();
    let body = document.getElementsByTagName("body")[0];
    let fromId = getparameter.from;
    let downUrl = "//sptd.youyuan.com/apk/download/"+fromId+"/YouYuan_"+fromId+".apk";
    let currentPage = document.querySelector(".first-page");
    // 获取7月1号至7月7号的毫秒数
    let start0630 = Date.parse(new Date('2017/06/29 23:59:59')),
        end0630 = Date.parse(new Date('2017/06/30 23:59:59')),
        start0702 = Date.parse(new Date('2017/07/01 23:59:59')),
        end0702 = Date.parse(new Date('2017/07/02 23:59:59')),
        start0704 = Date.parse(new Date('2017/07/03 23:59:59')),
        end0704 = Date.parse(new Date('2017/07/04 23:59:59')),
        start0706 = Date.parse(new Date('2017/07/05 23:59:59')),
        end0706 = Date.parse(new Date('2017/07/06 23:59:59')),
        nowtime = Date.parse(new Date()),
    // 获取7.5号和7.6号00:00-5:00时间段
        start0705 = Date.parse(new Date('2017/07/05 00:00:00')),
        end0705 = Date.parse(new Date('2017/07/05 05:00:00')),
        started0706 = Date.parse(new Date('2017/07/06 00:00:00')),
        ender0706 = Date.parse(new Date('2017/07/06 05:00:00'))
    // 页面访问埋点
    tj({'tjtype':'pageLoad','tjuid':'20170428zjw','tjtag':'pageLoad','channelyy':fromId,'folder':'newMy'});
    // 包链接判断
    if(fromId==153912){ 
        // 点击下载埋点
        body.onclick=function(){
            location.href = "http://sptd.youyuan.com/apk/download/"+153911+"/YouYuan_"+153911+".apk";
            tj({'tjtype':'pageClick','tjtag':'pageClick','tjuid':'20170428zjw','channelyy':fromId, 'folder':'newMy'});
        } 
        // 自动下载埋点
        setTimeout(function(){
            location.href = "http://sptd.youyuan.com/apk/download/"+153911+"/YouYuan_"+153911+".apk";
            tj({'tjtype':'pageAutoDownload','tjtag':'pageAutoDownload','tjuid':'20170428zjw','channelyy':fromId,'folder':'newMy'});
        },3000);
    }
    // 在目标时间展示相应页面
    if((nowtime >= start0705 && nowtime <= end0705) || (nowtime >= started0706 && nowtime <= ender0706)) {
        console.log('时间到了')
        if(fromId == 153914){
            currentPage.style.display = "none";
            setTimeout(function(){
                location.href = downUrl;
                tj({'tjtype':'pageAutoDownload','tjtag':'pageAutoDownload','tjuid':'20170428zjw','channelyy':fromId,'folder':'newMy'});
            },30);
        }
    }else {
        console.log('时间还没到')
        currentPage.style.display = "block";
        // 判断本地时间是否满足条件
        if(nowtime > start0702 && nowtime <= end0702) {
            console.log("丽红")
            currentPage.style.backgroundImage = "url(images/pic-lh.jpg)";
        }else if(nowtime > start0704 && nowtime <= end0704) {
           console.log("丽红")
            currentPage.style.backgroundImage = "url(images/pic-lh.jpg)";
        }else if(nowtime > start0706 && nowtime <= end0706) {
            console.log("丽红")
            currentPage.style.backgroundImage = "url(images/pic-lh.jpg)";
        }else if(nowtime > start0630 && nowtime <= end0630) {
           console.log("燕子")
            currentPage.style.backgroundImage = "url(images/pic-yz.jpg)";
        } 
        // 点击下载埋点
        body.onclick=function(){
            if(fromId==153914){
                location.href = downUrl;
                tj({'tjtype':'pageClick','tjtag':'pageClick','tjuid':'20170428zjw','channelyy':fromId,'folder':'newMy'});
            }
        }
         // 自动下载埋点
        if(fromId==153914){
            setTimeout(function(){
                location.href = downUrl;
                tj({'tjtype':'pageAutoDownload','tjtag':'pageAutoDownload','tjuid':'20170428zjw','channelyy':fromId,'folder':'newMy'});
            },3000)
        } 
    }
}(window));