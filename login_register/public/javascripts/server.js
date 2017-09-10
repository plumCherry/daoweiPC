$(function () {
   /* $button = $('.s_button');
    $button.click(function () {
        $(this).css('display',"none")

    })*/

   var $lisNode = $('.imgList li');
   var $button = $('.s_button');
   var num = 40;

    lazyLoad();
   function lazyLoad() {
       for(var i = 40;i<$lisNode.length;i++){
           $($lisNode[i]).css("display","none");
       }
       $button.click(function () {
           if (num>=$lisNode.length){
               $(this).children(':first').html('暂无商家');
               setTimeout(function () {
                   $($button).css('display',"none");
               },1000)
           }
           for(var i= 40;i<$lisNode.length;i++){
               num++;
               $($lisNode[i]).css("display","block");
           }
       })

   }



});
