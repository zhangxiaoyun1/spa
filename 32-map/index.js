$(function(){
    var sContent =
	"<h4 style='margin:0 0 5px 0;padding:0.2em 0'>SPA富应用开发</h4>" + 
	"<img style='float:right;margin:4px' id='imgDemo' src='../img/tianAnMen.jpg' width='139' height='104' title='天安门'/>" + 
    "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>时间：周二、周四下午</p>" + 
    "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>地点：505教室</p>" +
	"</div>";
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(114.529963, 38.003679);
	var marker = new BMap.Marker(point);
	var infoWindow = new BMap.InfoWindow(sContent);
	map.centerAndZoom(point, 15);
	map.addOverlay(marker);
	marker.addEventListener("click", function(){          
	   this.openInfoWindow(infoWindow);
	   //图片加载完毕重绘infowindow
	   document.getElementById('main').onload = function (){
		   infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
	   }
	});
})

