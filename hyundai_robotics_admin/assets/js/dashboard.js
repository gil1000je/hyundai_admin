google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Time', '방문자 수'],
    ['18:00', 4000], // 안보이는 영역
    ['00:00', 2000], // 실제로 보이는 영역 (1번째)
    ['06:00', 4000], // 실제로 보이는 영역 (2번째)
    ['12:00', 1000], // 실제로 보이는 영역 (3번째)
    ['18:00', 2000], // 실제로 보이는 영역 (4번째)
    ['00:00', 4000], // 안보이는 영역
    ['06:00', 4000], // 안보이는 영역
  ]);

  var options = {

    // title: '',
    // curveType: 'function',
    legend: { position:"none" },
    width: "1250",
    height: "240",
    color: 'red',
    fillColor:'#000',
    disabledColor: '#FFD9D9',
    tooltips: {
      titleFontSize: 30,
      bodyFontSize: 30
    },
    vAxis: {
      minorGridlines:{
        count:0
      },
      gridlines: { 
        count: 5,
        minSpacing:30,
        color:'#BBB'
      },
      viewWindow: {
          min: 0,
          max: 5000
      },
      textStyle:{
          color: '#999',
          fontSize:12
      }
    },        
    animation: {             
    startup: true,                 
    duration: 300,                 
    easing: 'ease' },
    visible: true,
    series: {
      0: { color: '#339A76' }
    }
    
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}