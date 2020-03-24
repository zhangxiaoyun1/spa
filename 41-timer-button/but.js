var $timerButton=(function(){
    var $btn=$('<input type="button" disabled>'),
    cft={
        container:'body'
    },
    num=cft.num,
    timer;
    $btn.css({
        width:'150px',
        height:'50px',
        marginTop:'20px',
        textarea:'center'
    })
    function adds(conf){
        clearInterval(timer);
        $(cft.container).append($btn);
        $.extend(cft,conf);
        $btn.val(cft.title+'('+conf.num+'s)');
        timer=setInterval(function(){
            conf.num--;
            if(conf.num===0){
                clearInterval(timer);
                $btn.val('同意');
                $btn.removeAttr('disabled');
            }else{
                $btn.val(cft.title+'('+conf.num+'s)');
            }
        },1000);
        $btn.click(function(){
            cft.onClick();
        });
       
    } 
    return {
        show:adds
    }
}())