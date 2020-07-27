//声明使用模块
var express = require('express');
var app = express();
var path = require('path');
//var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var options = {
    maxAge: 3600000 ,
    etag :true
};

//设置使用哪个模板引擎
//app.set('view engine' , 'ejs' );
app.set('port' , process.env.PORT || 3200 );
app.use( bodyParser.json());
app.use( bodyParser.urlencoded( {  limit : '50mb',extended : true }));
//app.use( favicon(__dirname + '/static/favicon.png'));
app.use( express.static( path.join(__dirname , 'build')  , options ) );
app.use('/src/image',express.static( path.join( __dirname, 'build/'),{
    dotfiles: 'allow'
}));
app.use('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
});
//设置跨域访问
app.all('*', function ( req ,res , next ) {
    res.header("Access-Control-Allow-Origin" , "*");
    res.header("Access-Control-Allow-Headers" , "X-Requested-With");
    res.header("Access-Control-Allow-Methods" , "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By" , "3.2.1");
    res.header("Content-Type" , "application/json;charset=utf-8");
    next();
});

var server = app.listen( app.get('port') , function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('已建立连接');
    console.log('port:' +  port );
});

app.use(function ( req ,res , next ) {
    var err = new Error('404 Not Found');
    err.status = 404 ;
    next(err);
});
//开发环境
if ( app.get('env') === 'development'){
    app.use(function ( err ,req ,res ,next ) {
        res.status( err.status || 500);
        console.log(err.message);
        // res.render('error' , {
        //     message : err.message ,
        //     error : err
        // })
    })
}
//生产环境
app.use(function ( err ,req ,res , next ) {
    res.status( err.status || 500);
    res.render('error' , {
        message : err.message ,
        error : {}
    })
});

module.exports = app ;
