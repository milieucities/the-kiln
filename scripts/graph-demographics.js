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

    var data; //a global
    d3.json(require['./data/demographics.json'], function(json, error){ 
      if (error) {
      	return console.error(error);
      }
      d3.select("#chart svg")
        .data(json)
        .transition().duration(350)
        .call(chart);
  })
})

function exampleData() {
  return  [
      {
        "label": "3-4 months a year",
        "value" : 87
      } ,
      {
        "label": "7-9 months a year",
        "value" : 126
      } ,
      {
        "label": "5-6 months a year",
        "value" : 183
      } ,
      {
        "label": "All year long",
        "value" : 68
      } ,
      {
        "label": "Never",
        "value" : 15
      } ,
      {
        "label": "1-2 months a year",
        "value" : 15
      }
    ];
}
