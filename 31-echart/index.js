$(function(){
    var myChart=echarts.init(document.getElementById('main'));
    var x=[];
    var y=[];
    for(var i=0;i<=1;i+=0.1){
        x.push(i);
        if(i==0){
            y.push(0);
        }else{
            y.push(-1*i*Math.log2(i)-(1-i)*Math.log2(1-i));
        }
    }
    var option = {
        title:{
            text:'二进熵函数曲线'
        },
        xAxis: {
            type: 'category',
            data: ['0', '0.1', '0.2', '0.3', '0.4', '0.5', '0.6','0.7','0.8','0.9','1']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: y,
            type: 'line',
            smooth: true
        }]
    };
    myChart.setOption(option);
})

