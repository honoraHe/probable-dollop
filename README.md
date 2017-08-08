一、	文件夹结构
dev文件夹：用来放置所有项目的开发源代码，对应上线时候文件夹的目录；

node_modules文件夹：存放着所有项目需要的依赖；

src/builds文件夹：用来暂时存放编译后的项目，对应操作是打包好后剪切到对应上线时候的文件夹中；

src/components文件夹：这里存放着之前项目所有用到过的可供童鞋们公用的模块。可根据自己需要随意调用哟；

src/components/company-name文件夹：通过url上的拼接属性cp,来判断公司名称展示。

使用范例：在对应的template.js中调用：

var companyname = new Companyname();

使用这个方法依赖get-parameter.js，所以要在引用此方法之后才能正常使用。

页面显示公司名称时候对应的样式在company-name.css中；具体如何控制样式的使用在company-name.js中有详细说明；

src/components/device-judgment文件夹：根据屏幕尺寸，通过rem单位自适应各种屏幕尺寸。因为已经找到更简便的适配方法，所以此文件夹不做更详细的解释。

src/equipment-judgement文件夹：判断设备(pc/ios/android)。

使用范例：在对应的template.js中调用：

var equipmentjudgement = new Equipmentjudgement();

equipmentjudgement.iosFlag

equipmentjudgement.androidFlag

equipmentjudgement.pcFlag

src/get-parameter文件夹：获取页面url链接上的配置参数。

使用范例：在对应的template.js中调用：

var getParameter=new getparameter();

var fromId=getParameter.from;

src/ip2area文件夹：IP获取地址接口。

使用范例：在对应的template.js中调用：

var Ip2area = new Ip2area();

Ip2area.data

src/reset-css文件夹：页面的一些基本重置样式。可以直接引用；

src/statistics文件夹：统计用JS，所有页面引用。可以直接引用

使用范例：在对应的template.js中调用：

let tj = new Statistics();

src/template文件夹：用来自己本地开发的地方，相当于一个缓冲区

二、常用命令

npm run webpack    是基于webpack.config.js

npm run develop     是基于webpack.develop.config.js

npm run product     是基于webpack.production.config.js

npm run start        使用webpack构建本地服务器，基于webpack.config.js


webpack构建本地服务器

contentBase：默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录
