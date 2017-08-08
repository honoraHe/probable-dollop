/**
* # 描述
* 公共接口引用
* @author diaos
* @requires path
* @requires html-webpack-plugin
* @requires webpack
*
*/
const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSWebpack = require("uglifyjs-webpack-plugin");

/**
* # 定义参数
*/
var config = {
	context: path.resolve(__dirname,"src/template/20170714/page-1-hr/"),
	entry: path.resolve(__dirname,"src/template/20170714/page-1-hr/js/template.js"),
	// entry: {bundle1: path.resolve(__dirname,"src/template/20170714/page-4/js/template.js"),
 //    	   bundle2: path.resolve(__dirname,"src/template/20170714/page-4/js/meta.min.js")
	//  },
	output: {
		path: path.resolve(__dirname,"src/builds/build"),
		filename: 'js/[name]-[hash:5].js'
	},
	module: {
		/**
		* #在webpack2.0版本已经将 module.loaders 改为 module.rules 为了兼容性考虑以前的声明方法任然可用，同时链式loader(用!连接)只适用于module.loader
		* #同时-loader不可省略 
		*/
		rules: [{
		    test: /\.css$/,
		    include: path.resolve(__dirname,"src/"),
		    use: ExtractTextPlugin.extract({
		    	fallback: 'style-loader',
		    	publicPath: '../',
		    	use: [
			        // 'style-loader',
			         {
			            loader: 'css-loader',
			            options: {
			            	importLoaders: 1
			            }
			        }, {
			            loader: 'postcss-loader',
			            // 在这里进行配置，也可以在postcss.config.js中进行配置，详情参考https://github.com/postcss/postcss-loader
			            options: {
			                plugins: function() {
			                    return [
			                        require('autoprefixer')({
			                        	broswers: ['last 5 versions']
			                        })
			                    ];
			                }
			            }
			        }
			    ]
			})
		}, {
		    test: /\.js$/,
		    include: path.resolve(__dirname,"src/"),
		    exclude: /(node_modules|bower_components)/, //需要排除的目录
		    use: {
		    	loader: 'babel-loader',
		    	options: {
		    		presets: ['es2015']
		    	}
		    }
		}, {
			test: /\.(gif|png|jpg|svg)$/,
			include: path.resolve(__dirname,"src/"),
			use:{
				loader: 'file-loader',
				options: {
					name: 'images/[name]-[hash:5].[ext]'
				}
			}
		}, {
			test: /\.htm|\.html$/,
			include: path.resolve(__dirname,"src/"),
			//exclude: path.resolve(__dirname,"template.html"),
			use:[{
				loader: 'html-loader'
			}]
		}]
	},
	/**
	* #配置devServer各种参数
	*/
	devServer:{
		contentBase: path.join(__dirname, "../"),
		compress: true,
		port: 9000,
		hot: true, // 配置HMR之后可以选择开启
        historyApiFallback: true, // 不跳转
        inline: true // 实时刷新
	},
	plugins: [
		new htmlWebpackPlugin({
			template: 'template.html',
			filename: 'index.html',
			inject: 'body',
			minify: {
				removeComments: false,
				collapseWhitespace: false
			}
		}),
		/*new UglifyJSWebpack({
			comments: false,
			beautify: true
		}), // 压缩js*/
		new ExtractTextPlugin("css/[name]-[hash:5].css"), // 输出独立css文件
		new webpack.HotModuleReplacementPlugin() // 热加载插件
	],
	resolve: {//import路径问题
	  modules: [
	    path.resolve('src'),
	    path.resolve('node_modules')
	  ]
	}
}

/**
* # 参数输出
*/
module.exports = config;
