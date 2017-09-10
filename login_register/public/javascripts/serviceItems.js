$(function () {

    var $lisNode = $('.navList>li');
    var index = 0;
    $lisNode.click(function () {
        var target = $(this).index();
        if(target != index ){
            $($lisNode[target]).addClass("active");
            $($lisNode[index]).removeClass("active");
            index =  target
        }

    });

    /*星星*/
    var $stars = $('.star') ;
    var $userList = $('.user_list li');
    stars();
    function stars() {

        for (var i=0;i<$stars.length;i++){
            var redStars = Math.ceil($($stars[i]).html());
            for (var j=0;j<redStars;j++){
                $($stars[i]).append("<img src='images/red_star.png'>")
            }
            for (var a = 0;a<5-redStars;a++){
                $($stars[i]).append("<img src='images/gray_star.png'>")
            }
            $stars[i].childNodes[0].remove();
        }
    }

    /*时间转换*/
    function getMyDate(time){
        var oDate = new Date(time),
            oYear = oDate.getFullYear(),
            oMonth = oDate.getMonth()+1,
            oDay = oDate.getDate(),
            oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay);//最后拼接时间
        return oTime;
    }

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
    /*评论时间转换*/
    var $time = $('.time');
    for (var i=0;i<$time.length;i++){
        var times = +$($time[i]).html();
        var commentTime = getMyDate(times);
        $($time[i]).html(commentTime);

    }
    /*预约时间转换*/
    var $reserveTime = $('.reserveTime');
    reserve();
    function reserve() {
        var time = +$reserveTime.html();
        var reserve = getMyTime(time);
        $reserveTime.html(reserve);
    }
    /*默认头像*/
    var $img = $('.img');
    console.log($img);
    $.each($img, function (item, name) {
        if($($img[item]).attr('src') === ''){
            $($img[item]).attr('src', 'images/fuwushangimg.png')
        }
    })

});
