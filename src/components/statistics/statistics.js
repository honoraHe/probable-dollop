/**
* # 描述
* 统计用JS，所有页面引用
* @author diaos
* @class statistic
*/

function Statistic(){
    var params = {};
    //Document对象数据
    if(document) {
        params.domain = document.domain || ''; 
        params.url = document.URL || ''; 
        params.title = document.title || ''; 
        params.referrer = document.referrer || ''; 
    }   
    //Window对象数据
    if(window && window.screen) {
        params.sh = window.screen.height || 0;
        params.sw = window.screen.width || 0;
        params.cd = window.screen.colorDepth || 0;
    }   
    //navigator对象数据
    if(navigator) {
        params.lang = navigator.language || ''; 
    }
    // 本地测试筛选
    if(params.url && params.url.indexOf('file:///')===0){
        params.url = "localhost";
    }
    //拼接参数串
    var args = ''; 
    for(var i in params) {
        if(args !== '') {
            args += '&';
        }   
        args += i + '=' + encodeURIComponent(params[i]);
    }

        // 发送统计信息
        function report(msg){
            if(navigator && navigator.sendBeacon){
                navigator.sendBeacon(msg);
            }else{
                var img = document.createElement('img');
                img.onload = img.onerror = function(){
                    img = img.onload = img.onerror = null;
                };
                img.src = msg;
            }
        }

    function tj(pp,realTimeFlg){
        var userArgs = '',userSrc=''; 

        /**
        *
        * @cfg {Object} tj 统计必填的三个参数
        * @param {Object} tjtype 统计类型
        * @param {Object} tjuid 添加统计的人
        * @param {Object} tjtag 统计位置
        *
        */

        if(!pp || !pp.tjtype || !pp.tjuid || !pp.tjtag){
            pp = pp || {};
            pp.tjtype = pp.tjtype || 'undefined';
            pp.tjuid = pp.tjuid || 'undefined';
            pp.tjtag = pp.tjtag || 'undefined';
        }
        var randomNum = parseInt(Math.random()*10000);

        for(var i in pp){
            userArgs += '&'+ i + '=' + encodeURIComponent(pp[i]);
        }
        userArgs += "&rdm="+ randomNum;
        if(realTimeFlg){
            userSrc = '//stj.youyuan.com/tj/tj.gif?' + userArgs.substr(1) + '&' + args;
        }else{
            userSrc = '//x.youyuan.com/tj/tj.gif?' + userArgs.substr(1) + '&' + args;
        }
        report(userSrc);
    };
    return tj;
};
export default Statistic;

