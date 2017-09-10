// 引用依赖的包
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var template = require('art-template');



// 引入路由模块
var router = require('./routes/router.js');


// express 实例对象
var app = express();


// 设置名值对    模板相关
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

// 使用依赖的包
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// template模板配置
template.config('base', '');
template.config('extname', '.html');
app.engine('.html', template.__express);
app.set('view engine', 'html');

// 使用静态资源
app.use(express.static(path.join(__dirname, 'public')));

// 使用路由模块
app.use('/',router);


// 404 处理
app.all('*', function (req, res) {
    res.send('恭喜你页面走失了，你可以去买彩票了');

});

module.exports = app;
