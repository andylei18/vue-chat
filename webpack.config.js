//先清空 n-build 文件夹下的文件
var fs = require('fs');
var folder_exists = fs.existsSync('./n-build');
if(folder_exists == true)
{
    var dirList = fs.readdirSync('./n-build');
    dirList.forEach(function(fileName)
    {
        fs.unlinkSync('./n-build/' + fileName);
    });
    console.log("clearing n-build");
};

//readfile
fs.readFile("index.html",'utf-8',function(err,data){
    if(err){
        console.log("error");
    }else{
        //将index.html里面的hash值清除掉
        var devhtml = data.replace(/((?:href|src)="[^"]+\.)(\w{20}\.)(js|css)/g, '$1$3');
        fs.writeFileSync('index.html', devhtml);
    }
});


var webpack = require('webpack');

var vue = require("vue-loader");

//混淆压缩
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

//检测重用模块
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

//独立样式文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");



// 在命令行 输入  “PRODUCTION=1 webpack --progress” 就会打包压缩，并且注入md5戳 到 index.html里面
var production = process.env.PRODUCTION;

var plugins = [
    //会将所有的样式文件打包成一个单独的style.css
    new ExtractTextPlugin( production ? "style.[hash].css" : "style.css" , {
        disable: false//,
        //allChunks: true  //所有独立样式打包成一个css文件
    }),
    //new ExtractTextPlugin("[name].css" )
    //自动分析重用的模块并且打包成单独的文件
    new CommonsChunkPlugin(production ? "vendor.[hash].js" : "vendor.js" ),
    function(){
        return this.plugin('done', function(stats) {
            var content;
            //这里可以拿到hash值   参考：http://webpack.github.io/docs/long-term-caching.html
            content = JSON.stringify(stats.toJson().assetsByChunkName, null, 2);
            console.log('版本是：'+JSON.stringify(stats.toJson().hash));
            //return fs.writeFileSync('build/assets.json', content);
        });
    },
    // 使用 ProvidePlugin 加载使用率高的依赖库
    new webpack.ProvidePlugin({
        $: 'webpack-zepto'
    })
];

//发布编译时，压缩，版本控制
if (process.env.PRODUCTION) {
    //压缩
    plugins.push(new webpack.optimize.UglifyJsPlugin({compress: {warnings: false } }));
}

/*
 版本控制
 package.json中的
 "html-webpack-plugin": "^1.6.2",
 模块是把生成的带有md5戳的文件，插入到index.html中。
 通过index.tpl模板，生成 index.html
 */
var HtmlWebpackPlugin = require("html-webpack-plugin");
//HtmlWebpackPlugin文档 https://www.npmjs.com/package/html-webpack-plugin
//https://github.com/ampedandwired/html-webpack-plugin/issues/52
plugins.push( new HtmlWebpackPlugin({
    filename:'../index.html',//会生成index.html在根目录下,并注入脚本
    template:'index.tpl',
    inject:true //此参数必须加上，不加不注入
}));


module.exports = {
    entry: ["./src/app.js"],
    output: {
        path: "./n-build",
        /*
         publicPath路径就是你发布之后的路径，
         比如你想发布到你站点的/util/vue/build 目录下, 那么设置
         publicPath: "/util/vue/build/",
         此字段配置如果不正确，发布后资源定位不对，比如：css里面的精灵图路径错误
         */
        // 在命令行 输入 "CUSTOM=1 webpack" 进行不压缩的本地打包
        publicPath: process.env.CUSTOM ? "/git/WebApp/n-build/" : "/n-build/",
        filename:  production ? "build.[hash].js" : "build.js"
    },
    module: {
        preLoaders:[
            // {
            //     //代码检查
            //     test:/\.js$/,exclude:/node_modules/,loader:'jshint-loader'
            // }
        ],
        loaders: [
            // 加载vue组件，并将css全部整合到一个style.css里面
            // 但是使用这种方式后 原先可以在vue组件中 在style里面加入 scoped 就不能用了,
            // 好处是使用了cssnext，那么样式按照标准的来写就行了，会自动生成兼容代码 http://cssnext.io/playground/
            {

                test: /\.vue$/,
                loader: vue.withLoaders({
                    css: ExtractTextPlugin.extract("style-loader",
                        "css-loader?sourceMap")/*!cssnext-loader 会导致压缩的时候动画命名被覆盖*/
                })
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!cssnext-loader")
            },
            {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'}, // 内联 base64 URLs, 限定 <=8k 的图片, 其他的用 URL

            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url",
                query: {
                    name: '[name].[ext]?[hash]&mimetype=application/font-woff'
                }
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url",
                query: {
                    name: '[name].[ext]?[hash]&mimetype=application/font-woff2'
                }
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url",
                query: {
                    name: '[name].[ext]?mimetype=application/font-woff2'
                }
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url",
                query: {
                    name: '[name].[ext]?mimetype=application/font-woff2'
                }
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url",
                query: {
                    name: '[name].[ext]?mimetype=image/svg+xml'
                }
            },
            {
                test: /\.json(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url",
                query: {
                    name: '[name].[ext]?mimetype=application/json'
                }
            }
        ]
    },
    plugins : plugins,
    //devtool: 'source-map'//,
    // resolve: {
    //     // 现在可以写 require('file') 代替 require('file.coffee')
    //     extensions: ['', '.js', '.json', '.coffee','vue']
    // }
};