<template>
  <section></section>
</template>

<script>
export default {
  name: 'sdaBubble',
  props: ['chartData', 'chartClass'],
  data () {
    return {
      json: null
    }
  },
  mounted () {
    /* eslint-disable */
    var width = document.querySelector(this.chartClass).clientWidth;
    var height = document.querySelector(this.chartClass).clientHeight;
    var dataset = this.chartData.data;
    var fill = d3.scale.category20();
    var diameter = 960,
        format = d3.format(",d"),
        color = d3.scale.category20c();

    // Define a bubble object with attributes
    var bubble = d3.layout.pack()
        .sort(null)
        .size([diameter, diameter])
        .padding(1.5);

    // Define svg object
    var svg = d3.select("body").append("svg")
        .attr("width", diameter)
        .attr("height", diameter)
        .attr("class", "bubble");

    // Define 'div' for tooltips
    var div = d3.select("body")
        .append("div")  // declare the tooltip div
        .attr("class", "tooltip")
        .style("opacity", 0);
        //.text("a simple tooltip");

    d3.json(dataset, function(error, root) {
      if (error) return console.warn(error);
      pts = getTheData(root);
      visualiseIt(pts);
    });

    // Get the data from the json file
    function getTheData(root){
      var pts = bubble.nodes(classes(root)).filter( function(d) {return !d.children;} );
      return pts;
    }

    // Visualise the data function
    function visualiseIt(pts){
      var node = svg.selectAll(".node")
        .data(pts)
        .enter().append("g")
        .attr("class", "node")
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })

      // Shape for each node
      node.append("circle")
        .attr("r", function(d) { return d.r; })
        .style("fill", function(d) { return color(d.packageName); });

      // Label for each node
      node.append("text")
        .attr("dy", ".3em")
        .style("text-anchor", "middle")
        .text(function(d) { return d.className.substring(0, d.r / 3); });

      // Tooltip for bubble
      node.on("mouseover", function(d) {
        div .transition()
          .duration(100)
          .style("visibility", "visible")
          .style("opacity", 0.9);
        div .html(
          "Package: " +d.packageName +"<br/>"+
          "Class: "   +d.className   +"<br/>"+
          "Size: "    +d.value
          )
          .style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY - 28) + "px");
        })
        .on("mouseout", function(){return div.style("visibility", "hidden");});
    } // visualiseIt(pts)

    // Returns a flattened hierarchy containing all leaf nodes under the root.
    function classes(root) {
      var classes = [];

      function recurse(name, node) {
        if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
        else classes.push({packageName: name, className: node.name, value: node.size});
      }

      recurse(null, root);
      return {children: classes};
    }

    d3.select(self.frameElement).style("height", diameter + "px");

  }
}
</script>

<style>
  section {
    width: 100%;
    position: relative;
  }

.sdaBubble {
 min-height: 20rem;
}
</style>
