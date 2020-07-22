new Morris.Area({
  element: "morris1",
  resize: true,
  data: [
    { y: "2011 Q1", item1: 2666, item2: 2666 },
    { y: "2011 Q2", item1: 2778, item2: 2294 },
    { y: "2011 Q3", item1: 4912, item2: 1969 },
    { y: "2011 Q4", item1: 3767, item2: 3597 },
    { y: "2012 Q1", item1: 6810, item2: 1914 },
    { y: "2012 Q2", item1: 5670, item2: 4293 },
    { y: "2012 Q3", item1: 4820, item2: 3795 },
    { y: "2012 Q4", item1: 15073, item2: 5967 },
    { y: "2013 Q1", item1: 10687, item2: 4460 },
    { y: "2013 Q2", item1: 8432, item2: 5713 }
  ],
  xkey: "y",
  ykeys: ["item1", "item2"],
  labels: ["Item 1", "Item 2"],
  lineColors: ["#a0d0e0", "#3c8dbc"],
  hideHover: "auto"
});

new Morris.Line({
  element: "morris2",
  resize: true,
  data: [
    { y: "2011 Q1", item1: 2666 },
    { y: "2011 Q2", item1: 2778 },
    { y: "2011 Q3", item1: 4912 },
    { y: "2011 Q4", item1: 3767 },
    { y: "2012 Q1", item1: 6810 },
    { y: "2012 Q2", item1: 5670 },
    { y: "2012 Q3", item1: 4820 },
    { y: "2012 Q4", item1: 15073 },
    { y: "2013 Q1", item1: 10687 },
    { y: "2013 Q2", item1: 8432 }
  ],
  xkey: "y",
  ykeys: ["item1"],
  labels: ["Item 1"],
  lineColors: ["#3c8dbc"]
});

new Morris.Donut({
  element: "morris3",
  resize: true,
  data: [
    { label: "Download Sales", value: 12 },
    { label: "In-Store Sales", value: 30 },
    { label: "Mail-Order Sales", value: 20 }
  ],
  colors: ["#3c8dbc", "#f56954", "#00a65a"],
  hideHover: "auto"
});

new Morris.Bar({
  element: "morris4",
  resize: true,
  data: [
    { y: "2006", cpu: 100,disk: 90 },
    { y: "2007", cpu: 75, disk: 65 },
    { y: "2008", cpu: 50, disk: 40 },
    { y: "2009", cpu: 75, disk: 65 },
    { y: "2010", cpu: 50, disk: 40 },
    { y: "2011", cpu: 75, disk: 65 },
    { y: "2012", cpu: 100,disk: 90 }
  ],
  xkey: "y",
  ykeys: ["cpu", "disk"],
  labels: ["CPU", "DISK"],
  barColors:["#00a65a","#f56954"]
});
