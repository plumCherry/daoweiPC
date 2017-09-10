$(function () {
    /*转换时间*/
    function getMyTime(time) {
        var oDate = new Date(time),
            oMonth = oDate.getMonth()+1,
            oDay = oDate.getDate(),
            oHour = oDate.getHours(),
            oMin = oDate.getMinutes(),
            oSen = oDate.getSeconds(),
            oTime = getzf(oMonth) +'月'+ getzf(oDay) +'日'+ getzf(oHour) +':'+ getzf(oMin);//最后拼接时间
        return oTime;
    }
    //补0操作
    function getzf(num){
        if(parseInt(num) < 10){
            num = '0'+num;
        }
        return num;
    }
    /*预约时间转换*/
    var $reserveTime = $('.reserveTime');
    reserve();
    function reserve() {
        var time = +$reserveTime.html();
        var reserve = getMyTime(time);
        $reserveTime.html(reserve);

    }
});
