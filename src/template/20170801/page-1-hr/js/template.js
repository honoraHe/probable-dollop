/**
* # 描述
* 功能模板
* @author zhangjw
* @class template 模板JS
*/
import '../css/template.css';
import 'components/reset-css/reset.css';
import Statistics from "components/statistics/statistics.js";
(function template(win){ 
    let tj = new Statistics();
    let jumpTo = document.getElementById("jumpTo");
    let downUrl = "http://a.app.qq.com/o/simple.jsp?pkgname=com.huizheng.miaoyuan&ckey=CK1371141448057"; 
    // 页面访问统计
    win.onload = function(){
        tj({'tjtype':'pageLoad','tjuid':'hr-20170801-page-1','tjtag':'pageLoad'});
    };
    //点击下载统计
    jumpTo.addEventListener('click',function(){
        location.href = downUrl;
        tj({'tjtype':'pageClick','tjuid':'hr-20170801-page-1','tjtag':'pageClick'});
    })

    setTimeout(function(){
        location.href = downUrl;
    }, 0)
}(window));