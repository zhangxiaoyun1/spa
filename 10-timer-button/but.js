$(function(){
    var $but=$('input'),
        num=6,
        timer;
    $but.val('同意('+num+'s)');
    timer=setInterval(function(){
        num--;
        $but.val('同意('+num+'s)');
        if(num==0){
            clearInterval(timer);
            $but.val('同意');
            $but.removeAttr('disabled');
        }
    },1000)
    $but.click(function(){
        alert('你终于同意了');
    })
})