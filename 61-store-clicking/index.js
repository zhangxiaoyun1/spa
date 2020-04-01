$(function(){
    var num=window.localStorage.getItem('num') || 0;
    $('input').val('被点击了'+num+'次');
    $('input').click(function(){
        num++;
        window.localStorage.setItem('num',num);
        $('input').val('被点击了'+num+'次');
    })
})

