$(function() {
  $(".dial").knob({
    /*change : function (value) {
         //console.log("change : " + value);
         },
         release : function (value) {
         console.log("release : " + value);
         },
         cancel : function () {
         console.log("cancel : " + this.value);
         },*/
    draw: function() {
      // "tron" case
      if (this.$.data("skin") == "tron") {
        var a = this.angle(this.cv), // Angle
          sa = this.startAngle, // Previous start angle
          sat = this.startAngle, // Start angle
          ea, // Previous end angle
          eat = sat + a, // End angle
          r = true;

        this.g.lineWidth = this.lineWidth;

        this.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);

        if (this.o.displayPrevious) {
          ea = this.startAngle + this.angle(this.value);
          this.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
          this.g.beginPath();
          this.g.strokeStyle = this.previousColor;
          this.g.arc(
            this.xy,
            this.xy,
            this.radius - this.lineWidth,
            sa,
            ea,
            false
          );
          this.g.stroke();
        }

        this.g.beginPath();
        this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
        this.g.arc(
          this.xy,
          this.xy,
          this.radius - this.lineWidth,
          sat,
          eat,
          false
        );
        this.g.stroke();

        this.g.lineWidth = 2;
        this.g.beginPath();
        this.g.strokeStyle = this.o.fgColor;
        this.g.arc(
          this.xy,
          this.xy,
          this.radius - this.lineWidth + 1 + (this.lineWidth * 2) / 3,
          0,
          2 * Math.PI,
          false
        );
        this.g.stroke();

        return false;
      }
    }
  });

  //First Method of supply data(make a variable)
  var pie_value = [4, 8, 6];
  $("#sparkline-pie").sparkline(pie_value, {
    type: "pie",
    sliceColors: ["#DC3912", "#FF9900", "#3366CC"],
    offset: -120,
    width: 100,
    height: 100
  });

  //Second Method of suplly data(put in a array in a "sparkline" function)
  $("#sparkline-line").sparkline([6, 4, 7, 8, 4, 3, 2, 2, 5, 4, 7, 4, 1, 5, 7, 9, 8, 7, 6], {
    type: "line",
    fillColor: "#EFFBFB",
    lineColor: "#39CCCC",
    lineWidth: 2,
    spotRadius: 3,
    width: 320,
    height: 100
  });

  $("#sparkline-bar").sparkline([6, 4, 8, 9, 10, 5, 13, 18, 21, 7, 9], {
    type: "bar",
    barColor: "#F39C12",
    barWidth: 15,
    barSpacing: 5,
    width: 224,
    height: 100
  });

  //Interactive mouse speed
  function drawMouseSpeedDemo() {
    var mrefreshinterval = 500; // update display every 500ms
    var lastmousex = -1;
    var lastmousey = -1;
    var lastmousetime;
    var mousetravel = 0;
    var mpoints = [];
    var mpoints_max = 30;
    $("html").mousemove(function(e) {
      var mousex = e.pageX;
      var mousey = e.pageY;
      if (lastmousex > -1) {
        mousetravel += Math.max(
          Math.abs(mousex - lastmousex),
          Math.abs(mousey - lastmousey)
        );
      }
      lastmousex = mousex;
      lastmousey = mousey;
    });
    var mdraw = function() {
      var md = new Date();
      var timenow = md.getTime();
      if (lastmousetime && lastmousetime != timenow) {
        var pps = Math.round((mousetravel / (timenow - lastmousetime)) * 1000);
        mpoints.push(pps);
        if (mpoints.length > mpoints_max) mpoints.splice(0, 1);
        mousetravel = 0;
        $("#mouse-speed").sparkline(mpoints, {
          width: mpoints.length * 2,
          tooltipSuffix: " pixels per second"
        });
      }
      lastmousetime = timenow;
      setTimeout(mdraw, mrefreshinterval);
    };
    // We could use setInterval instead, but I prefer to do it this way
    setTimeout(mdraw, mrefreshinterval);
  }
  drawMouseSpeedDemo();

  //Example Sparkline
  $("#sparkline-example1").sparkline([10, 8, 9, 3, 5, 8], {
    type: "line",
    fillColor: "#CCDDFF",
    lineColor: "#3333FF"
  });

  $("#sparkline-example2").sparkline([8, 4, 0, 0, 0, 1, 4, 4, 10, 10, 10, 0, 0, 0, 4, 6, 5, 9], {
    type: "line",
    fillColor: "#CCDDFF",
    lineColor: "#3333FF"
  });

  $("#sparkline-example3").sparkline([10, 8, 9, 3, 5, 8, 5], {
    type: "bar",
    barColor: "#3333FF"
  });

  $("#sparkline-example4").sparkline([-3, 1, 2, 0, 3, -1], {
    type: "bar",
    barColor: "#3333FF"
  });
  var example5 = [[2, 0],[4, 2],[2, 4],[1, 4]];
  $("#sparkline-example5").sparkline(example5, {
    type: "bar"
  });

  var example6_1 = [8,4,0,0,0,0,1,4,4,4,0,0,0,0,0,0,0,4,6,5,9,0
  ];
  var example6_2 = [4,1,5,7,9,9,8,8,7,6,6,4,7,8,8,4,3,2,2,5,6,7
  ];
  var $spark1 = $("#sparkline-example6");
  $spark1.sparkline(example6_1, {
    fillColor: false,
    lineColor: "blue"
  });
  $spark1.sparkline(example6_2, {
    composite: true,
    lineColor: "red",
    fillColor: false
  });


  $("#sparkline-example7").sparkline([8,4,0,0,0,0,1,4,4,10,10,10,10,0,0,0,4,6,5,9], {
    type: "line",
    normalRangeMin: 0,
    normalRangeMax: 5
  });

  var example8_1 = [4, 6, 7, 7, 4, 3, 2, 1, 4];
  var example8_2 = [4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 7, 8, 4, 3, 2, 2, 5, 6];
  var $spark2 = $("#sparkline-example8");
  $spark2.sparkline(example8_1, {
    type: "bar",
    fillColor: false,
    barColor: "#CCDDFF"
  });
  $spark2.sparkline(example8_2, {
    type: "line",
    composite: true,
    lineColor: "red",
    fillColor: false
  });

  $("#sparkline-example9").sparkline([4, 6, 7, 4, 3, 2, 1, 4, 5, 6, 7, 6, 2, 4, 5], {
    type: "discrete"
  });

  $("#sparkline-example10").sparkline([4, 6, 7, 4, 3, 2, 1, 4], {
    type: "discrete",
    thresholdValue: 3,
    thresholdColor: "red"
  });

  $("#sparkline-example11").sparkline([10, 12, 12, 9, 7], {
    type: "bullet"
  });

  $("#sparkline-example12").sparkline([15, 12, 12, 9, 7], {
    type: "bullet"
  });

  $("#sparkline-example13").sparkline([10, 12, 14, 9, 7], {
    type: "bullet"
  });

  $("#sparkline-example14").sparkline([10, 8, 9, 3, 5, 8, 5, 7], {
    type: "line",
    width: 100,
    lineColor: "red",
    fillColor: "#FFFFAA",
    spotColor: "blue",
    spotRadius: 2
  });

  $("#sparkline-example15").sparkline([1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1], {
    type: "tristate"
  });

  $("#sparkline-example16").sparkline([1, 2, 0, 2, -1, -2, 1, -2, 0, 0, 1, 1], {
    type: "tristate",
    colorMap: { "-2": "#ff0", "2": "blue" }
  });

  $("#sparkline-example17").sparkline([150,3,100,8,30,25,108],{
      type:"box",
  })
  $("#sparkline-example18").sparkline([1, 3, 5, 8, 10, 15, 18],{
    type:"box",
    target:10,
    raw:true
  })

  $("#sparkline-example19").sparkline([1,1,2],{
      type:"pie"
  })

  $("#sparkline-example20").sparkline([1,5],{
    type:"pie"
  })

  $("#sparkline-example21").sparkline([20,50,80],{
    type:"pie"
})

});
