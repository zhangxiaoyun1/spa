$(function(){
    $("#shows").mouseover(function(){
        $('input').attr('type','text');
        $('#shows').attr('class','iconfont icon-yanjing');
    })
    $("#shows").mouseout(function(){
        $('input').attr('type','password');
        $("#shows").attr('class','iconfont icon-yanjing1');
    })
})