$(function(){
    $('input').click(function(){
		var $code=$('<div><pre class="javascript"></pre></div>');
		var str=$('textarea').val();
		if(str!==''){
			$code.find('pre').html(str);
			hljs.highlightBlock($code.find('pre')[0]);
			$('body').append($code);
		}
	})
})

