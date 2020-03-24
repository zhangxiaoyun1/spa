var $inp=(function(){
    var $input=$('<input type="password">');
    var $shows=$('<i class="iconfont icon-yanjing1"></i>');
    $input.css({
        width:'250px',
        height:'25px',
        marginTop:'100px'
    })
    $shows.css({
         marginLeft:'-30px',
         marginTop:'10px',
         color:'#ccc',
         fontSize:24
    })
    $shows.mouseover(function(){
        $input.attr('type','text');
        $shows.attr('class','iconfont icon-yanjing');
    })
    $shows.mouseout(function(){
        $input.attr('type','password');
        $shows.attr('class','iconfont icon-yanjing1');
    })
    function add(con){
        $(con).append($input);
        $(con).append($shows);
    }
    function show(){
        var pwd=$input.val();
        alert(pwd);
    }
    return{
        add:add,
        show:show
    }
}())