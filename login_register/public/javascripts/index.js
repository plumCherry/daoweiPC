$(function () {
    var $imgNode = $('.i_img li');
    var $smallCircle = $('.i_circle li');

    var lastIndex = 0;
    var playIndex = 0;

    /*点击小圆点*/
    $smallCircle.click(function () {
        var target = $(this).index();
        if(lastIndex != target){
           move(target);
        }
    });

    //轮播
    var timer = setInterval(function () {
        play()
    },4000);

    function play() {
        playIndex++;
        if (playIndex === $imgNode.length){
            playIndex = 0;
        }
        $smallCircle.eq(playIndex).addClass('active');
        $smallCircle.eq(lastIndex).removeClass();
        $($imgNode[playIndex]).css('opacity','1');
        $($imgNode[lastIndex]).css('opacity','0');
        lastIndex = playIndex
    }


    function move(target) {
        $smallCircle.eq(target).addClass('active');
        $smallCircle.eq(lastIndex).removeClass();
        $($imgNode[target]).css('opacity','1');
        $($imgNode[lastIndex]).css('opacity','0');
        lastIndex = target;
        playIndex = target;
    }


    $imgNode.hover(function () {
        //清除定时器
        clearInterval(timer);
    },function () {
        timer = setInterval(function () {
            play();
        },4000)
    });

    /*tabs hover*/
    var $listNodes = $('.list>li');
    var $hoverList = $('.list .hoverList');
    var $arrow = $('.list .arrow');
    var $rightIcon = $('.list .rightIcon');

    $listNodes.each(function (index) {
        $(this).hover(function () {
            var top = $listNodes[0].offsetHeight;

            $($hoverList[index]).css('top',-index*top);
            $($hoverList[index]).css('display','block');
            $($arrow[index]).css('display','block');
            $($rightIcon[index]).css('display','none');
        },function () {
            $($rightIcon[index]).css('display','block');
            $($hoverList[index]).css('display','none');
            $($arrow[index]).css('display','none')
        })
    })

    /*隔行变色*/
    var $lis = $('#i_content .lis');
    $lis.each(function (i,v) {
        if (i%2 != 0){
            $($lis[i]).css('background','#FBF8F8')
        }
    })
    
});
