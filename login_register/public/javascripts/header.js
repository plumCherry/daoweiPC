
$(function () {
    var $aNode = $("#h_list>li:not(:last-child)>a");

    getRequest();
    function getRequest(value) {
        var url = decodeURI(location.search);
        if(url.indexOf("?") != -1){
            var str = url.substr(1,1);
            console.log(str);
            $($aNode[0]).removeClass("active");
            $($aNode[str]).addClass("active")
        }
    }
    /*动画*/
    var $head = $('#positionWrap');
    $(window).scroll(function () {
        var h1 = $('body').scrollTop();
        var h2 = $head.height();

        if (h1 > h2){
            $head.addClass('headAni');
            $head.css('position','fixed');
        }else{
            $head.css('position','relative');
            $head.removeClass('headAni');
        }
    })
});
