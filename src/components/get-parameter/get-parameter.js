/**
* # 描述
* 获取页面url链接上的配置参数
* @author dorryLiu
* @class Getparameter
*
* **使用范例**：
*
*      @example
*      var getParameter=new getparameter();
*      var fromId=getParameter.from;
*/

function Getparameter(key){
    var QueryString = {
        data: {},
        Initial: function() {
            var aPairs,aTmp,a;
            var queryString = location.search;
            queryString = queryString.substr(1, queryString.length);
            aPairs = queryString.split("&");
            for (var i = 0; i < aPairs.length; i++) {
                aTmp = aPairs[i].split("=");
                this.data[aTmp[0]] = aTmp[1];
            }
        },
        GetValue: function(key) {
            return QueryString.data[key];
        }
    };
    QueryString.Initial();
    return QueryString.data
}
export default Getparameter;