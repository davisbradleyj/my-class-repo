var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 80,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
var svg = d3
  .select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append an SVG group
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Create an initial parameter for the x-axis that will use the 'domestic' column from the csv
var chosenXAxis = "domestic";

// Create a function that will be used for updating x-scale var upon click on axis label
function xScale(boxOffice, chosenXAxis){
  // create scales
  var xLinearScale = d3.scaleLinear()
    .domain([d3.min(boxOffice, d => d[chosenXAxis]) * 0.8,
      d3.max(boxOffice, d => d[chosenXAxis]) * 1.2
    ])
    .range([0, width]);

  return xLinearScale;
}

// Create a function that will be used for updating xAxis var upon click on axis label
function renderAxes(newXScale, xAxis) {
  var bottomAxis = d3.axisBottom(newXScale);

  xAxis.transition()
    .duration(1000)
    .call(bottomAxis);

  return xAxis;
}

// Create a function that will be used for updating circles group with a transition to new circles
function renderCircles(circlesGroup, newXScale, chosenXaxis) {

  circlesGroup.transition()
    .duration(1000)
    .attr("cx", d => newXScale(d[chosenXAxis]));

  return circlesGroup;
}

// Create a function that will be used for updating circles group with new tooltip

// Remember that you want to show the tooltip on mouse over and hide it on mouse out

function updateToolTip(chosenXAxis, circlesGroup) {

  if (chosenXAxis === "domestic") {
    var label = "domestic:";
  }
  else {
    var label = "overseas:";
  }

  var toolTip = d3.tip()
    .attr("class", "tooltip")
    .offset([80, -60])
    .html(function(d) {
      return (`${d.film}<br>${label} $${d[chosenXAxis]}M<br>worldwide:$${d.worldwide}M`);
    });

  circlesGroup.call(toolTip);

  circlesGroup.on("mouseover", function(data) {
    toolTip.show(data);
  })
    // onmouseout event
    .on("mouseout", function(data, index) {
      toolTip.hide(data);
    });

  return circlesGroup;
}


// Retrieve data from the CSV file and execute everything below
d3.csv("boxOffice.csv", function(err, boxOffice) {
  if (err) throw err;

  // parse the data as integers
  boxOffice.forEach(function(data){
    data.worldwide = +data.worldwide;
    data.domestic = +data.domestic;
    data.overseas = +data.overseas;
  });
  // xLinearScale function above csv import
  var xLinearScale = xScale(boxOffice, chosenXAxis);
  // Create y scale function
  var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(boxOffice, d => d.worldwide)])
    .range([height, 0]);
  // Create initial axis functions
  var bottomAxis = d3.axisBottom(xLinearScale);
  var leftAxis = d3.axisLeft(yLinearScale);
  // append x axis
  var xAxis = chartGroup.append("g")
    .classed("x-axis", true)
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);
  // append y axis
  chartGroup.append("g")
    .call(leftAxis);
  // append initial circles with a radius of 25, a fill of #2fc656 and opacity of .5
  var circlesGroup = chartGroup.selectAll("circle")
    .data(boxOffice)
    .enter()
    .append("circle")
    .attr("cx", d => xLinearScale(d[chosenXAxis]))
    .attr("cy", d => yLinearScale(d.worldwide))
    .attr("r", 20)
    .attr("fill", "#2fc656")
    .attr("opacity", ".5");

  // Create group for  2 x- axis labels, domestic and overseas
  var labelsGroup = chartGroup.append("g")
    .attr("transform", `translate(${width / 2}, ${height + 20})`);

  var domesticLabel = labelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 20)
    .attr("value", "domestic") // value to grab for event listener
    .classed("active", true)
    .text("Domestic Gross (in Hundred Millions)");

  var overseasLabel = labelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 40)
    .attr("value", "overseas") // value to grab for event listener
    .classed("inactive", true)
    .text("Overseas Gross (in Hundred Millions)");

  // append y axis
  chartGroup.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 0 - margin.left)
  .attr("x", 0 - (height / 2))
  .attr("dy", "2.5em")
  .classed("axis-text", true)
  .text("Total Worldwide Gross (in Hundred Millions)");

  // updateToolTip function above csv import
  var circlesGroup = updateToolTip(chosenXAxis, circlesGroup);

  // create an x axis labels event listener that will change the current x-axis once clicked
  labelsGroup.selectAll("text")
    .on("click", function() {
      // get value of selection
      var value = d3.select(this).attr("value");
      if (value !== chosenXAxis) {

        // replaces chosenXaxis with value
        chosenXAxis = value;

        // console.log(chosenXAxis)

        // functions here found above csv import
        // updates x scale for new data
        xLinearScale = xScale(boxOffice, chosenXAxis);

        // updates x axis with transition
        xAxis = renderAxes(xLinearScale, xAxis);

        // updates circles with new x values
        circlesGroup = renderCircles(circlesGroup, xLinearScale, chosenXAxis);

        // updates tooltips with new info
        circlesGroup = updateToolTip(chosenXAxis, circlesGroup);

        // changes classes to change bold text
        if (chosenXAxis === "overseas") {
          overseasLabel
            .classed("active", true)
            .classed("inactive", false);
          domesticLabel
            .classed("active", false)
            .classed("inactive", true);
        }
        else {
          overseasLabel
            .classed("active", false)
            .classed("inactive", true);
          domesticLabel
            .classed("active", true)
            .classed("inactive", false);
        }
      }
    });
});
