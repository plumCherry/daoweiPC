
// 引入包
var mongoose = require ('mongoose');
// 与数据库建立连接
mongoose.connect('mongodb://localhost:27017/login');

var connection = mongoose.connection ;
connection.on('error',function (err) {
    console.error(err);
});
connection.on('open',function () {
    console.log('connected');
});

//建立骨架
var userSchema = new mongoose.Schema({
    userName: String,
    passWord: String
});
var customer = {
    userName: 'wangmu',
    passWord: '098765'
};
var userModel = mongoose.model('customer',userSchema);

userModel.create(customer,function (err,doc) {
    if(err){
        console.error(err);
    }else{
        console.log(doc);
    }
});

//获取用户填写的数据 回调函数

function getUser(userName,callback) {
    userModel.findOne({userName:userName},function (err,doc) {
        if(err){
            console.error(err);
            callback('恭喜你页面走失了，你可以去买彩票了');
        }else{
            console.log(doc);
            callback(null,doc);
        }
    })
};

exports.getUser = getUser;

function addUser(userInfo,callback) {
    userModel.create(userInfo,function (err,doc) {
        if(err){
            callback(err)
        }else{
            callback(null,doc)
        }
    })
};
exports.addUser = addUser;























