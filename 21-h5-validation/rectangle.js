$(
    function(){
        //get dom elem
        var $width=$('#width'),
            $height=$('#height'),
            $btnCal=$('#calculate'),
            $perimeter=$('#perimeter'),
            $area=$('#area');
        $forkMeGH.show("https://github.com/zhangxiaoyun1/rectangle");
        $bszPageFooter.show("body");
        $width.keypress(function(e){
            var p=e.target.selectionStart,
                v=e.target.value;
            if(e.key==='e'){
                if(p===0||v.indexOf('e')!==-1||v.indexOf('E')!==-1){
                    e.preventDefault();
                    return;
                }
                if(p===1&&v.substring(0,1)==='-'){
                    e.preventDefault();
                    return;
                }
            }
        })
        $height.keypress(function(e){
            var p=e.target.selectionStart,
                v=e.target.value;
            if(e.key==='e'){
                if(p===0||v.indexOf('e')!==-1||v.indexOf('E')!==-1){
                    e.preventDefault();
                    return;
                }
                if(p===1&&v.substring(0,1)==='-'){
                    e.preventDefault();
                    return;
                }
            }
        })

        /* calc button click event*/
        $btnCal.click(function(){
            //get value
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
        });
            
    }
);