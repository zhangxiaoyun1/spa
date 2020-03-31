$(function(){
    window.onhashchange=function(){
          var str=window.location.hash,
        color=str.substring(3,str.length);
        $('#main').css({
            'background-color':color
        })
    }
    
})