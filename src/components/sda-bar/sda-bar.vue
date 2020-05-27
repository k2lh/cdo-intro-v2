<template>
  <section class="graph"></section>
</template>

<script>
export default {
  name: 'sdaBar',
  props: ['project'],
  data () {
    return {
      json: null
    }
  },
  mounted () {
    /* eslint-disable */
    var margin = {top: 20, right: 20, bottom: 70, left: 40};
    var width = document.querySelector('.graph').clientWidth - margin.left - margin.right;
    var height = document.querySelector('.graph').clientHeight - margin.top - margin.bottom;
    var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
    var y = d3.scale.linear().range([height, 0]);
    var xAxis = d3.svg.axis()
        .scale(x)
        .outerTickSize([1])
        .orient("bottom")
    var yAxis = d3.svg.axis()
        .scale(y)
        .outerTickSize([1])
        .orient("left")
        .ticks(10);
    var color = d3.scale.ordinal().range(["#d73027","#f46d43","#fdae61","#a6d96a","#66bd63","#1a9850"]);

    var svg = d3.select(".graph").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.json('../static/companies.json', function(error, data) {
        data.forEach(function(d) {
            d.label = d.label;
            d.amount = +d.amount;
        });

        x.domain(data.map(function(d) { return d.label; }));
        y.domain([0, d3.max(data, function(d) { return d.amount; })]);

        svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
        .selectAll("text")
          .style("text-anchor", "end")
          .attr("dx", "1rem")
          .attr("dy", "1rem");

        svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 5)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("amount");

        // Add bar chart
        svg.selectAll("bar")
          .data(data)
        .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(d.label); })
          .attr("width", x.rangeBand())
          .attr("y", function(d) { return y(d.amount); })
          .attr("height", function(d) { return height - y(d.amount); })
          .style("fill", function(d) { return color(d.color); });

          var tooltip = d3.select('.bar')
          .append('div')
          .attr('class', 'tooltip');

          tooltip.append('div')
          .attr('class', 'label');
          tooltip.append('div')
          .attr('class', 'amount');

          svg.selectAll(".bar")
          .on('mouseover', function(d) {
              tooltip.select('.label').html("<b> Label: " + d.label + "</b>");
              tooltip.select('.amount').html("<b> amount: " + d.amount + "</b>");

              tooltip.style('display', 'block');
              tooltip.style('opacity',2);
          })
          .on('mousemove', function(d) {

              tooltip.style('top', (d3.event.layerY + 10) + 'px')
              .style('left', (d3.event.layerX - 25) + 'px');
          })
          .on('mouseout', function(d) {
              tooltip.style('display', 'none');
              tooltip.style('opacity',0);
          });
      });
  }
}
</script>

<style scoped>
  .graph {
    width: 100%;
    min-height: 600px;
  }
	.axis path,
	.axis line {
	  fill: none;
	  stroke: #000;
	  shape-rendering: crispEdges;
	}
  .tooltip {
    position: relative;
    text-align: center;
    width: 60px;
    height: 28px;
    padding: 2px;
    background: white;
    border: 1px solid #DDD;
    border-radius: 0;
    pointer-events: none;
  }

</style>
