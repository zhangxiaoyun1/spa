function Inp(){
    var $input=$('<input type="password">');
    var $shows=$('<i class="iconfont icon-yanjing1"></i><br>');
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
    this.add=function(con){
        $(con).append($input);
        $(con).append($shows);
    }
    this.show=function(){
        var pwd=$input.val();
        alert(pwd);
    }
    // return{
    //     add:add,
    //     show:show
    // }
}