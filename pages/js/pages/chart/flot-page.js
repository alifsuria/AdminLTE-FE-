//Line Chart
var line_data1 = [
  [0, 0],
  [0.5, 0.48],
  [1.0, 0.84],
  [1.5, 1.0],
  [2.0, 0.91],
  [2.5, 0.6],
  [3.0, 0.14],
  [3.5, -0.35],
  [4.0, -0.76],
  [4.5, -0.98],
  [5.0, -0.96],
  [5.5, -0.71],
  [6.0, -0.28],
  [6.5, 0.22],
  [7.0, 0.66],
  [7.5, 0.94],
  [8.0, 0.99],
  [8.5, 0.8],
  [9.0, 0.41],
  [9.5, -0.08],
  [10.0, -0.54],
  [10.5, -0.88],
  [11.0, -1.0],
  [11.5, -0.88],
  [12.0, -0.54],
  [12.5, -0.07],
  [13.0, 0.42],
  [13.5, 0.8]
];
var line_data2 = [
  [0, 1],
  [0.5, 0.88],
  [1.0, 0.54],
  [1.5, 0.07],
  [2.0, -0.42],
  [2.5, -0.8],
  [3.0, -0.99],
  [3.5, -0.94],
  [4.0, -0.65],
  [4.5, -0.21],
  [5.0, 0.28],
  [5.5, 0.71],
  [6.0, 0.96],
  [6.5, 0.98],
  [7.0, 0.75],
  [7.5, 0.35],
  [8.0, -0.15],
  [8.5, -0.6],
  [9.0, -0.91],
  [9.5, -1],
  [10.0, -0.84],
  [10.5, -0.48],
  [11.0, 0],
  [11.5, 0.48],
  [12.0, 0.84],
  [12.5, 1],
  [13.0, 0.91],
  [13.5, 0.59]
];
var dataset = [
  {
    label: "Data 1",
    data: line_data1,
    color: "#3c8dbc",
    points: { symbol: "circle", fillcolor: "lightblue", show: true },
    lines: { show: true }
  },

  {
    label: "Data 2",
    data: line_data2,
    color: "#00c0ef",
    points: { symbol: "circle", fillcolor: "lightblue", show: true },
    lines: { show: true }
  }
];
var options = {
  legend: {
    show: false
  },
  grid: {
    color: "#D2D6DE",
    show: true,
    borderWidth: 1,
    borderColor: "#F8F8F8"
  },
  series: {
    shadowSize: 0 // Drawing is faster without shadow
  }
};
////

//Area Chart
var area_data1 = [
  [2, 88.0],
  [3, 93.3],
  [4, 102.0],
  [5, 108.5],
  [6, 115.7],
  [7, 115.6],
  [8, 124.6],
  [9, 130.3],
  [10, 134.3],
  [11, 141.4],
  [12, 146.5],
  [13, 151.7],
  [14, 159.9],
  [15, 165.4],
  [16, 167.8],
  [17, 168.7],
  [18, 169.5],
  [19, 168.0]
];
var area_dataset = [
  {
    label: "Data 1",
    data: area_data1,
    lines: { show: true },
    color: "#99E6F9"
  }
];
var area_option = {
  grid: {
    show: false
  },
  legend: {
    show: false
  },
  lines: {
    fill: true //Converts the line chart to area chart
  },
  series: {
    shadowSize: 0, // Drawing is faster without shadows
    color: "#00c0ef"
  }
};
////

//Bar Chart
var bar_data1 = [
  ["January", 10],
  ["February", 8],
  ["March", 4],
  ["April", 13],
  ["May", 17],
  ["June", 9]
];
var bar_dataset1 = [
  {
    label: "Bar Chart",
    data: bar_data1,
    color: "#3c8dbc"
  }
];
var bar_option = {
  grid: {
    borderWidth: 1,
    borderColor: "#f3f3f3",
    tickColor: "#f3f3f3"
  },
  series: {
    bars: {
      show: true,
      barWidth: 0.5,
      align: "center"
    }
  },
  xaxis: {
    mode: "categories",
    tickLength: 0
  },
  legend: {
    show: false
  }
};
////

//Donut Chart
var donut_data = [
  { label: "Series 1", data: 30, color: "#3c8dbc" },
  { label: "series 2", data: 20, color: "#0073b7" },
  { label: "Series 3", data: 50, color: "#00c0ef" }
];
var donut_option = {
  series: {
    pie: {
      show: true,
      radius: 1,
      innerRadius: 0.5,
      label: {
        show: true,
        radius: 2 / 3,
        formatter: labelFormatter,
        threshold: 0.1
      }
    }
  },
  legend: {
    show: false
  }
};

//Custom label
function labelFormatter(label, series) {
  return (
    '<div style="font-size:13px; text-align:center; padding:2px; color: #fff; font-weight: 600;">' +
    label +
    "<br>" +
    Math.round(series.percent) +
    "%</div>"
  );
}
$(document).ready(function() {
  $.plot($("#line-chart"), dataset, options);
  $.plot($("#area-chart"), area_dataset, area_option);
  $.plot($("#bar-chart"), bar_dataset1, bar_option);
  $.plot($("#donut-chart"), donut_data, donut_option);
});



 //Interactive Real time
 var data = [], totalPoints = 100

 function getRandomData() {

   if (data.length > 0)
     data = data.slice(1)

   // Do a random walk
   while (data.length < totalPoints) {

     var prev = data.length > 0 ? data[data.length - 1] : 50,
         y    = prev + Math.random() * 10 - 5

     if (y < 0) {
       y = 0
     } else if (y > 100) {
       y = 100
     }

     data.push(y)
   }

   // Zip the generated y values with the x values
   var res = []
   for (var i = 0; i < data.length; ++i) {
     res.push([i, data[i]])
   }

   return res
 }

 var interactive_plot = $.plot('#interactive', [getRandomData()], {
   grid  : {
     borderColor: '#f3f3f3',
     borderWidth: 1,
     tickColor  : '#f3f3f3'
   },
   series: {
     shadowSize: 0, // Drawing is faster without shadows
     color     : '#3c8dbc'
   },
   lines : {
     fill : true, //Converts the line chart to area chart
     color: '#3c8dbc'
   },
   yaxis : {
     min : 0,
     max : 100,
     show: true
   },
   xaxis : {
     show: true
   }
 })

 var updateInterval = 500 //Fetch data ever x milliseconds
 var realtime       = 'on' //If == to on then fetch data every x seconds. else stop fetching
 function update() {

   interactive_plot.setData([getRandomData()])

   // Since the axes don't change, we don't need to call plot.setupGrid()
   interactive_plot.draw()
   if (realtime === 'on')
     setTimeout(update, updateInterval)
 }

 //INITIALIZE REALTIME DATA FETCHING
 if (realtime === 'on') {
   update()
 }
 //REALTIME TOGGLE
 $('#realtime .btn').click(function () {
   if ($(this).data('toggle') === 'on') {
     realtime = 'on'
   }
   else {
     realtime = 'off'
   }
   update()
 })

