$(function () {
  /*  $('#cday').datepick({dateFormat: 'yyyy-mm-dd'});

    $.datepicker.formatDate('yy/mm/dd', new Date());

    $( "#datepicker" ).datepicker({dateFormat:"yy/mm/dd"}).datepicker("setDate",new Date());*/
    var $lisNode = $('.navList>li');
    var index = 0;
    $lisNode.click(function () {
        var target = $(this).index();
        if(target != index ){
            $($lisNode[target]).addClass("active");
            $($lisNode[index]).removeClass("active");
            index =  target
        }

    })
});
