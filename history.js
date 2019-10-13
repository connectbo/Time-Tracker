
console.log("hi");
var sampledata=[{activity: "hooping", hours: 22}, {activity:"lifting", hours: 15}, {activity:"coding", hours:10.5},
               {activity:"reading", hours:9}, {activity:"youtube", hours:12.5}];

var height = 800;
var width = 800;
var margin = 200;


var svg = d3.select("#container").append("svg")
    .attr("width", width )
    .attr("height", height)

width -= margin;
height -= margin;

var g = svg.append("g")
          .attr("transform", "translate(" + 100 + "," + 100 + ")");

var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
var y = d3.scaleLinear()
          .range([height, 0]);

x.domain(sampledata.map(d => d['activity']));
y.domain([0, d3.max(sampledata, d=>d['hours'])]);

        g.append("g")
         .attr("transform", "translate(0," + height + ")")
         .call(d3.axisBottom(x));

        g.append("g")
         .call(d3.axisLeft(y).tickFormat(function(d){
             return  d +'hours';
         }).ticks(10))
         .append("text")
         .attr("y", 6)
         .attr("dy", "0.71em")
         .attr("text-anchor", "end")
         .text("value");

  g.selectAll(".bar")
         .data(sampledata)
         .enter().append("rect")
         .attr("class", "bar")
         .attr("x", function(d) { return x(d.activity); })
         .attr("y", function(d) { return y(d.hours); })
         .attr("fill", "#64B5F6")
         .attr("width", x.bandwidth())
         .attr("height", function(d) { return height  - y(d.hours); });
