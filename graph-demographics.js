//Donut chart example
nv.addGraph(function() {
  var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLabels(true)     //Display pie labels
      .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
      .labelType("percent") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
      .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
      .donutRatio(0.35)     //Configure how big you want the donut hole size to be.
      ;

    d3.select("#chart2 svg")
        .datum(exampleData())
        .transition().duration(350)
        .call(chart);

  return chart;
});

function exampleData() {
  return  [
  {
    "label": "Response",
    "value": 1
  },
  {
    "label": "3-4 months a year",
    "value": 88
  },
  {
    "label": "7-9 months a year",
    "value": 127
  },
  {
    "label": "5-6 months a year",
    "value": 184
  },
  {
    "label": "All year long",
    "value": 69
  },
  {
    "label": "Never",
    "value": 16
  },
  {
    "label": "1-2 months a year",
    "value": 16
  },
  {
    "label": "Toute l’année",
    "value": 2
  }
];
}
