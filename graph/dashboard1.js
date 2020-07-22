$(document).ready(function(){
  var donut = new Morris.Donut({
    element:"donut-chart",
    resize:true,
    data:[
        {label:"Download Sales",value:12},
        {label:"In-Store Sales",value:30},
        {label:"Mail-Order Sales",value:20}
    ],
    colors   : ['#3c8dbc', '#f56954', '#00a65a'],
    redraw:true,
    hideHover:"auto"
  });

  var area = new Morris.Area({
    element:"area-chart",
    resize    : true,
    data      : [
      { y: '2011 Q1', item1: 2666, item2: 2666 },
      { y: '2011 Q2', item1: 2778, item2: 2294 },
      { y: '2011 Q3', item1: 4912, item2: 1969 },
      { y: '2011 Q4', item1: 3767, item2: 3597 },
      { y: '2012 Q1', item1: 6810, item2: 1914 },
      { y: '2012 Q2', item1: 5670, item2: 4293 },
      { y: '2012 Q3', item1: 4820, item2: 3795 },
      { y: '2012 Q4', item1: 15073, item2: 5967 },
      { y: '2013 Q1', item1: 10687, item2: 4460 },
      { y: '2013 Q2', item1: 8432, item2: 5713 }
    ],
    xkey      : 'y',
    ykeys     : ['item1', 'item2'],
    labels    : ['Item 1', 'Item 2'],
    lineColors: ['#a0d0e0', '#3c8dbc'],
    hideHover : 'auto',
    redraw:true
  });

    //Fix for chart under tabs
    $('.nav.nav-tabs>a').on('shown.bs.tab', function () {
      area.redraw();
      donut.redraw();
      console.log("lOG");
    });


    var thevalues = [1000,1200,920,927,931,1027,930,1021];
    $("#sparkline-1").sparkline(thevalues,{
      type:"line",
      lineColor:"#92c1dc",
      fillColor:"#ebf4f9",
      height: "50",
      width: "80"
    });
    thevalues = [515,519,520,522,652,810,370,627,319,630,921];
    $("#sparkline-2").sparkline(thevalues,{
      type:"line",
      lineColor:"#92c1dc",
      fillColor:"#ebf4f9",
      height: "50",
      width: "80"
    });
    thevalues = [15,19,20,22,33,27,31,27,19,30,21];
    $("#sparkline-3").sparkline(thevalues,{
      type:"line",
      lineColor:"#92c1dc",
      fillColor:"#ebf4f9",
      height: "50",
      width: "80"
    });


    new Morris.Line({
      element:"graph-sales1",
      resize:true,
      data:[
        { a: '2011 Q1', year: 2666 },
        { a: '2011 Q2', year: 2778 },
        { a: '2011 Q3', year: 4912 },
        { a: '2011 Q4', year: 3767 },
        { a: '2012 Q1', year: 6810 },
        { a: '2012 Q2', year: 5670 },
        { a: '2012 Q3', year: 4820 },
        { a: '2012 Q4', year: 15073 },
        { a: '2013 Q1', year: 10687 },
        { a: '2013 Q2', year: 8432 }
      ],
      xkey:"a",
      ykeys:["year"],
      labels:["year1"],
      hideHover:"auto",
      lineColors       : ['#efefef'],
      lineWidth        : 2,
      hideHover        : 'auto',
      gridTextColor    : '#fff',
      gridStrokeWidth  : 0.4,
      pointSize        : 4,
      pointStrokeColors: ['#efefef'],
      gridLineColor    : '#efefef',
      gridTextFamily   : 'Open Sans',
      gridTextSize     : 10
    })

    //Jqeury Knob
  $(function(){
    $(".knob").knob({
    })
  })
})