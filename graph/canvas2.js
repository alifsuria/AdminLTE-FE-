//
var chart = $("#graph");
Chart.defaults.global.elements.point.radius = 0;
Chart.defaults.global.legend.display = false;
var salechart = new Chart(chart, {
  type: "line",
  data: {
    labels: ["January", "Feburary", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Digital Goods",
        display: false,
        data: [28, 48, 40, 19, 86, 27, 90],
        order: 1,
        backgroundColor: "#4B94BF"
      },
      {
        label: "Electronics",
        data: [65, 59, 80, 81, 56, 55, 40],
        order: 2,
        backgroundColor: "#D2D6DE"
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Sales: 1 Jan, 2014 - 30 Jul, 2014",
      fontSize: 14,
      color: "black",
      fontWeight: "bold"
    },
    tooltips: {
      intersect: false,
      mode: "index"
    }
  }
});
//

//
var visitchart = $("#visit-bar");
Chart.defaults.scale.ticks.display = false;
var visitGraph = new Chart(visitchart, {
  type: "bar",
  data: {
    labels: ["90", "70", "90", "70", "75", "80", "70"],
    datasets: [
      {
        display: false,
        data: [90, 70, 90, 70, 75, 80, 70],
        backgroundColor: "white"
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "rgba(0,0,0,0)"
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            color: "rgba(0,0,0,0)"
          },
          ticks: {
            min: 69,
            max: 90
          }
        }
      ]
    },
    tooltips: {
      enabled: true,
      callbacks: {
        title: function(tooltipItem, data) {
          return;
        }
      }
    }
  }
});
//

//
var referralchart = $("#referral-bar");
Chart.defaults.scale.ticks.display = false;
var referralGraph = new Chart(referralchart, {
  type: "bar",
  data: {
    labels: ["90", "50", "90", "70", , "61", "83", "63"],
    datasets: [
      {
        display: false,
        data: [90, 70, 90, 70, 75, 80, 70],
        backgroundColor: "white"
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "rgba(0,0,0,0)"
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            color: "rgba(0,0,0,0)"
          },
          ticks: {
            min: 69,
            max: 90
          }
        }
      ]
    },
    tooltips: {
      enabled: true,
      callbacks: {
        title: function(tooltipItem, data) {
          return;
        }
      }, bodyFontSize:10
    }
  }
});
//

//
var organicchart = $("#organic-bar");
Chart.defaults.scale.ticks.display = false;
var organicGraph = new Chart(organicchart, {
  type: "bar",
  data: {
    labels: ["90", "50", "90", "70", "61", "83", "63"],
    datasets: [
      {
        display: false,
        data: [90, 70, 90, 70, 75, 80, 70],
        backgroundColor: "white"
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "rgba(0,0,0,0)"
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            color: "rgba(0,0,0,0)"
          },
          ticks: {
            min: 69,
            max: 90
          }
        }
      ]
    },
    tooltips: {
      enabled: true,
      callbacks: {
        title: function(tooltipItem, data) {
          return;
        }
      },
      bodyFontSize:10
    }
  }
});
//
//Popularity Chart//
var CallOfDutychart = $("#cod");
var CODchart = new Chart(CallOfDutychart, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        data: [90, 80, 90, -70, 61, -83, 63],
        backgroundColor: [
          "green",
          "green",
          "green",
          "red",
          "green",
          "red",
          "green"
        ]
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            lineWidth: 0,
            display: false
          },
          ticks: {
            min: -100,
            max: 100
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            lineWidth: 0,
            display: false
          },
          ticks: {
            min: -100,
            max: 100
          }
        }
      ]
    },
    tooltips: {
      enabled: true,
      callbacks: {
        title: function(tooltipItem, data) {
          return;
        }
      },
      bodyFontSize:10
    }
  }
});
//
//
var tv1 = $("#tv");
var samsungtv_1 = new Chart(tv1, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        data: [90, 80, -90, 70, 61, -83, 68],
        backgroundColor: [
          "orange",
          "orange",
          "red",
          "orange",
          "orange",
          "red",
          "orange"
        ]
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            lineWidth: 0,
            display: false
          },
          ticks: {
            min: -100,
            max: 100
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            lineWidth: 0,
            display: false
          },
          ticks: {
            min: -100,
            max: 100
          }
        }
      ]
    },
    tooltips: {
      enabled: true,
      callbacks: {
        title: function(tooltipItem, data) {
          return;
        }
      },
      bodyFontSize:10
    }
  }
});
//
//
var phone1 = $("#iphone1");
var iphone1 = new Chart(phone1, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        data: [90, -80, 90, 70, -61, 83, 63],
        backgroundColor: [
          "lightcoral",
          "red",
          "lightcoral",
          "lightcoral",
          "red",
          "lightcoral",
          "lightcoral"
        ]
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            lineWidth: 0,
            display: false
          },
          ticks: {
            min: -100,
            max: 100
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            lineWidth: 0,
            display: false
          },
          ticks: {
            min: -100,
            max: 100
          }
        }
      ]
    },
    tooltips: {
      enabled: true,
      callbacks: {
        title: function(tooltipItem, data) {
          return;
        }
      },
      bodyFontSize:10
    }
  }
});
//
//
var tv2 = $("#tv2");
var samsungtv_1 = new Chart(tv2, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          data: [90, 80, -90, 70, -61, 83, 68],
          backgroundColor: [
            "#007BFF",
            "#007BFF",
            "red",
            "#007BFF",
            "red",
            "#007BFF",
            "#007BFF"
          ]
        }
      ]
    },
    options: {
      scales: {
        xAxes: [
          {
            gridLines: {
              lineWidth: 0,
              display: false
            },
            ticks: {
              min: -100,
              max: 100
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              lineWidth: 0,
              display: false
            },
            ticks: {
              min: -100,
              max: 100
            }
          }
        ]
      },
      tooltips: {
        enabled: true,
        callbacks: {
          title: function(tooltipItem, data) {
            return;
          }
        },
        bodyFontSize:10
      }
    }
});
//
//
var tv3 = $("#tv3");
var samsungtv_1 = new Chart(tv3, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          data: [90, 80, -90, 70, 61, -83, 68],
          backgroundColor: [
            "orange",
            "orange",
            "red",
            "orange",
            "orange",
            "red",
            "orange"
          ]
        }
      ]
    },
    options: {
      scales: {
        xAxes: [
          {
            gridLines: {
              lineWidth: 0,
              display: false
            },
            ticks: {
              min: -100,
              max: 100
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              lineWidth: 0,
              display: false
            },
            ticks: {
              min: -100,
              max: 100
            }
          }
        ]
      },
      tooltips: {
        enabled: true,
        callbacks: {
          title: function(tooltipItem, data) {
            return;
          }
        },
        bodyFontSize:10
      }
    }
});
//
//
var phone2 = $("#iphone2");
var iphone2 = new Chart(phone2, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        data: [90, -80, 90, 70, -61, 83, 63],
        backgroundColor: [
          "lightcoral",
          "red",
          "lightcoral",
          "lightcoral",
          "red",
          "lightcoral",
          "lightcoral"
        ]
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            lineWidth: 0,
            display: false
          },
          ticks: {
            min: -100,
            max: 100
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            lineWidth: 0,
            display: false
          },
          ticks: {
            min: -100,
            max: 100
          }
        }
      ]
    },
    tooltips: {
      enabled: true,
      callbacks: {
        title: function(tooltipItem, data) {
          return;
        }
      },
      bodyFontSize:10
    }
  }
});
//
//
var CallOfDutychart2 = $("#cod2");
var CODchart2 = new Chart(CallOfDutychart2, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        data: [90, 80, 90, -70, 61, -83, 63],
        backgroundColor: [
          "green",
          "green",
          "green",
          "red",
          "green",
          "red",
          "green"
        ]
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            lineWidth: 0,
            display: false
          },
          ticks: {
            min: -100,
            max: 100
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            lineWidth: 0,
            display: false
          },
          ticks: {
            min: -100,
            max: 100
          }
        }
      ]
    },
    tooltips: {
      enabled: true,
      callbacks: {
        title: function(tooltipItem, data) {
          return;
        }
      },
      bodyFontSize:10
    }
  }
});
//
//
var BrowserUsage = $("#browser-chart");
var browserchart = new Chart(BrowserUsage,{
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
        tooltips:{
            enabled:true,
        }
    }
})

