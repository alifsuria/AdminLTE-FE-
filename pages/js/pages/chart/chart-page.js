var chart1 = $("#chart1");
var graph1 = new Chart(chart1, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Digital Goods",
        display: false,
        data: [28, 48, 40, 19, 86, 27, 90],
        order: 1,
        backgroundColor: "#4B94BF",
        pointRadius:0
      },
      {
        label: "Electronics",
        data: [65, 59, 80, 81, 56, 55, 40],
        order: 2,
        backgroundColor: "#D2D6DE",
        pointRadius:0
      }
    ]
  },
  options: {
    tooltips: {
      intersect: false,
      mode: "index"
    },
    scales:{
        xAxes:[{
            gridLines:{
                display: false
            }
        }],
        yAxes:[{
            gridLines:{
                display: false
            }
        }]
    },
    legend:{
        display: false
    }

  }
});


var donut1 = $("#chart2");
var graph2 = new Chart(donut1,{
    type:"doughnut",
    data:{
        labels:["Chrome","IE","Firefox","Safari","Opera","Navigator"],
        datasets:[{
            data:[700,500,400,600,300,100],
            backgroundColor: ["#F56954","#00A65A","#F39C12","#00C0EF","#3C8DBC","#D2D6DE"],
            borderWidth: 1
        }]
    },
    options:{
        legend:{
            display: false
        }
    }
})

var chart3 = $("#chart3");
var graph3 = new Chart(chart3,{
    type:"line",
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Digital Goods",
            display: false,
            data: [28, 48, 40, 19, 86, 27, 90],
            order: 1,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#4B94BF",
            pointRadius:0
          },
          {
            label: "Electronics",
            data: [65, 59, 80, 81, 56, 55, 40],
            order: 2,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#D2D6DE",
            pointRadius:0
          }
        ]
      },
      options: {
        tooltips: {
          intersect: false,
          mode: "index"
        },
        scales:{
            xAxes:[{
                gridLines:{
                    display: false
                }
            }],
            yAxes:[{
                gridLines:{
                    display: false
                }
            }]
        },
        legend:{
            display: false
        }

      }
})

var chart4 = $("#chart4");
var graph4 = new Chart(chart4,{
    type:"bar",
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Electronics",
                data: [65, 59, 80, 81, 56, 55, 40],
                order: 1,
                backgroundColor: "#D2D6DE",
              },
          {
            label: "Digital Goods",
            data: [28, 48, 40, 19, 86, 27, 90],
            order: 2,
            backgroundColor: "#00A65A",
          }
        ]
      },
      options: {
        tooltips: {
          intersect: false,
          mode: "index"
        },
        scales:{
            xAxes:[{
                gridLines:{
                    display: true
                }
            }],
            yAxes:[{
                gridLines:{
                    display: true
                }
            }]
        },
        legend:{
            display: false
        }

      }
})