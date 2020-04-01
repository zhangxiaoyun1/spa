$(function(){
    var num=$('#range').val();
    $('#age').html(num+'岁');
    $("#range").change(function(){
        num=$('#range').val();
        $('#age').html(num+'岁');
    })
})