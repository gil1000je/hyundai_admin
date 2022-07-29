google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  const graph = $('.graph') //그래프
  let data; // 데이터
  let options; // 옵션
  let chart = new google.visualization.LineChart(document.getElementById('curve_chart')); // 차트 스크립트


  // 초기값
  function init () {

    dailyData()
    
  }
  init()

  // 데일리(일) 그래프 데이터
  function dailyData() {

    // daily 아이디값 적용
    graph.attr("id","daily")

    data = google.visualization.arrayToDataTable([

      ["날짜","전월 방문자 수","방문자 수"],
      ["",1000,2000], //(1번째)
      ["",1000,4400], //(2번째)
      ["",1000,1000], //(3번째)
      ["",1000,2000], //(4번째)
      ["",1000,300],  //(5번째)
      ["",1000,3000], //(6번째)
      ["",1000,1500], //(7번째)
      ["",1000,200],  //(8번째)
      ["",1000,300],  //(9번째)
      ["",1000,800],  //(10번째)
      ["",1000,140],  //(11번째)
      ["",1000,200],  //(12번째)
      ["",1000,500],  //(13번째)
      ["",1000,1000], //(14번째)
      ["",1000,1000], //(15번째)
      ["",1000,3000], //(16번째)
      ["",1000,2500], //(17번째)
      ["",1000,1000], //(18번째)
      ["",1000,5000], //(19번째)
      ["",1000,1200], //(20번째)
      ["",1000,1000], //(21번째)
      ["",1000,400],  //(22번째)
      ["",1000,350],  //(23번째)
      ["",1000,200],  //(24번째)
      ["",1000,800],  //(25번째)
      ["",1000,1000], //(26번째)
      ["",1000,1200], //(27번째)
      ["",1000,1500], //(28번째)
      ["",1000,800],  //(29번째)
      ["",1000,1200], //(30번째)
      ["",1000,1800], //(31번째)

    ]);

    options = {

      // title: '',
      // curveType: 'function',
      // pointSize: 5,
      legend: { position:"none" },
      width: "990",
      height: "240",
      disabledColor: '#FFD9D9',
      tooltips: { trigger:"none"},
      vAxis: {
        minorGridlines:{
          count:0
        },
        gridlines: { 
          count: 5,
          minSpacing:50,
          color:'#BBB'
        },
        viewWindow: {
            min: 0,
            max: 5000
        },
        textStyle:{
            color: 'red',
            fontSize:0,
            position:"none"
        }
      },    
      hAxis: {
        textStyle:{
          legend: { position:"none" },
        }
      },
      series: {
        0: {
            lineWidth:0
        },
        1: {
            color: '#339A76',
            pointSize: 5,  
        }
      },
      animation: {             
      startup: true,                 
      duration: 800,                 
      easing: 'inAndOut' },
      visible: true,
      
    };

    chart.draw(data, options);

  }

  // 위클리(주) 그래프 데이터
  function weeklyData() {

    // Weekly 아이디값 적용
    graph.attr("id","weekly")

    data = google.visualization.arrayToDataTable([
      ["날짜","전월 방문자 수","방문자 수"],
      ['2022-06-19 ~ 2022-06-27', 4000, 2000], //(1번째)
      ['2022-06-19 ~ 2022-06-27', 4000, 4000], //(2번째)
      ['2022-06-19 ~ 2022-06-27', 4000, 1000], //(3번째)
      ['2022-06-19 ~ 2022-06-27', 4000, 2000], //(4번째)
      ['2022-06-19 ~ 2022-06-27', 4000, 1000], //(5번째)
    ]);

    options = {

      // title: '',
      // curveType: 'function',
      // pointSize: 12,
      legend: { position:"none" },
      width: "1200",
      height: "240",
      disabledColor: '#FFD9D9',
      tooltips: { trigger:"none"},
      vAxis: {
        minorGridlines:{
          count:0
        },
        gridlines: { 
          count: 5,
          minSpacing:50,
          color:'#BBB'
        },
        viewWindow: {
            min: 0,
            max: 5000
        },
        textStyle:{
            color: 'red',
            fontSize:0,
            position:"none"
        }
      },    
      hAxis: {
        textStyle:{
          legend: { position:"none" },
        }
      },
      series: {
        0: {
            lineWidth:0 
        },
        1: {
            color: '#339A76',
            pointSize: 5,  
        }
      },
      animation: {             
      startup: true,                 
      duration: 800,                 
      easing: 'inAndOut' },
      visible: true,
      
    };

  }

  // 먼슬리(달) 그래프 데이터
  function monthlyData() {

    // monthly 아이디값 적용
    graph.attr("id","monthly")

    data = google.visualization.arrayToDataTable([
      ["날짜","전월 방문자 수","방문자 수"],
      ['2022년 5월',2000,2000],//(1번째)
      ['2022년 6월',2000,4000],//(2번째)
      ['2022년 7월',2000,1000],//(3번째)
    ]);

    options = {

      // title: '',
      // curveType: 'function',
      // pointSize: 12,
      legend: { position:"none" },
      width: "1400",
      height: "240",
      disabledColor: '#FFD9D9',
      tooltips: { trigger:"none"},
      vAxis: {
        minorGridlines:{
          count:0
        },
        gridlines: { 
          count: 5,
          minSpacing:50,
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
      hAxis: {
        textStyle:{
          color:"#696A74",
          fontSize:12
        }
      },
      series: {
        0: {
            lineWidth:0 
        },
        1: {
            color: '#339A76',
            pointSize: 5,  
      }
      },
      animation: {             
      startup: true,                 
      duration: 800,                 
      easing: 'inAndOut' },
      visible: true,
      
    };
    
  }

  // 툴팁 (말풍선) 생성 이벤트
  function tooltipPosition() {
    
    $(document).on("mouseover","circle",function(){
      $('.tooltip-box').stop().show()   
    })
    $(document).on("mouseleave","circle",function(){
      $('.tooltip-box').hide()  
    })

    $(document).mousemove(function(e){

        var mouseX = e.pageX;
        var mouseY = e.pageY;

        $('.tooltip-box').css({
            left: mouseX + 10 + "px",
            top : mouseY + 10 + "px"
        })
    })
  
  }
  tooltipPosition()

  // 탭 클릭 이벤트
  function tabClick() {

    const chartTab = $('#boxVisit .tab li a')

    chartTab.on('click',function(){

      let target = $(this).text()

      $(this).parent().addClass('active').siblings().removeClass('active')

      if (target == "Daily") {
        dailyData()
      } else if (target == "Weekly") {
        weeklyData()
      } else if (target == "Monthly") {
        monthlyData()
      }

      chart.draw(data, options);
      
    })

  }
  tabClick()

}