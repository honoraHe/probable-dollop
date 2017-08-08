/**
* # 描述
* 功能模板
* @author liuyy
* @class template 模板JS
*/
import 'components/reset-css/reset.css';
import Getparameter from "components/get-parameter/get-parameter.js"; 
import Statistics from "components/statistics/statistics.js";

(function template(win){    
    win.onload = function(){
    	// let devicejudgement = new Devicejudgement(document,window);
        let getparameter = new Getparameter();
        let tj = new Statistics();
        let fromId = getparameter.from || getparameter.qd || getparameter.channelyy || 66223; 
        
        // 初始加载页面统计
		tj({'tjtype':'window-onload','tjuid':'tj','tjtag':'page-load','tjtime':'20170705_yy'});
		location.href="http://ag.qq.com/detail?gameId=com.huizheng.miaoyuan&autoDownload=true";

    };    
}(window));



