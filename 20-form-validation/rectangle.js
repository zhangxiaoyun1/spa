$(
    function(){
        //get dom elem
        var $width=$('#width'),
            $height=$('#height'),
            $btnCal=$('#calculate'),
            $perimeter=$('#perimeter'),
            $area=$('#area');
// $forkMeGH.show("https://github.com/zhangxiaoyun1/rectangle");
        // $bszPageFooter.show("body");
        

        /* calc button click event*/
        $btnCal.click(function(){
            //get value
            if($width.val()=='' || $height.val()==''){
                if($width.val()==''){
                    $('#wp').val('宽度不允许为空');
                }else{
                    $('#hp').val('高度不允许为空');
                }
            }else{
                var w=Number($width.val()),
                h=Number($height.val());
            //caculate
            if(w.toString().split(".").length==1){
                var nw=0;
                var aw=0;
            }else{
                var nw=w.toString().split(".")[1].length,
                aw=w.toString().split(".")[1].length;
            }
            if(h.toString().split(".").length==1){
                var nh=0;
                var ah=0;
            }else{
                var nh=h.toString().split(".")[1].length,
                ah=h.toString().split(".")[1].length;
            }
            if(nw>nh){
                var lp=nw;
            }else{
                var lp=nh;
            }
            var p=Math.round(2*(w+h) * Math.pow(10,lp )) / Math.pow(10,lp),
                a=Math.round((w*h) * Math.pow(10, (aw+ah))) / Math.pow(10, (aw+ah));
            //output
            $perimeter.val(p);
            $area.val(a);
            }
            
        });
            
    }
);