<template>
  <section class="sdaMultiDonut">
    <h5 class="h4">{{chartTitle}}</h5>
  </section>
</template>

<script>
export default {
  name: 'sdaMultiDonut',
  props: ['chartData', 'chartClass', 'chartTitle'],
  data () {
    return {
      json: null
    }
  },
  mounted () {
    /* eslint-disable */
    var width = document.querySelector(this.chartClass).clientWidth;
    var height = width / 3;
    var tau = 2 * Math.PI;

    var fields = [
      { percent: 80, ratio: .8, color: "red", label: "Last Full Quarter vs Current FY", title: "Revenue"},
      { percent: 30, ratio: .3, color: "green", label: "Last Full Quarter vs Current FY", title: "Cost" },
      { percent: 60, ratio: .6, color: "yellow", label: "Last Full Quarter vs Current FY", title: "GP" }
    ];

    var pie = d3.layout.pie()
        .sort(null)
        .value(function(d) { return d.ratio; });

    var innerRadius = width / 6.5 - 15;
    var outerRadius = width / 6.5 - 5;
    var arc = d3.svg.arc()
      .innerRadius(innerRadius)
      .outerRadius(width / 6.5 - 5)
      .startAngle(0)
      .endAngle(tau);

    var arcLine = d3.svg.arc()
      .innerRadius(innerRadius)
      .outerRadius(width / 6.5 - 5)
      .startAngle(0);

    var svg = d3.select('.sdaMultiDonut').append("svg")
      .attr("width", width)
      .attr("height", height);

    var field = svg.selectAll(".field")
      .data(fields)
      .attr("width", width)
      .attr("height", height)
      .enter()
      .append("g")
      .attr("transform", function(d, i) { return "translate(" + (i * 2 + 1.25) / 6.5 * width + "," + height / 2 + ")"; })
      .attr("class", "field");

    field.append("svg:circle")
      .attr("cx", "0")
      .attr("cy", 0)
      .attr("r", innerRadius - 10)
      .attr('fill', function(d) { return d.color; })
      .append("g");

    var path = field.append('path')
      .attr({ d:arc })
      .style({ fill: '#dfe3e6' });

    // <path> attribute d: Expected number, "…384615384 0 1,1 NaN,NaNLNaN,NaNA…".
    // field.append("path")
    //   .attr({ d:arcLine })
    //   .style('fill', '#00a68f')
    // 	.transition()
    // 	.duration(500)
    // 	.delay(500)
    // 	.attrTween("d", arcTween);

      // <path> attribute d: Expected number, "…384615384 0 1,1 NaN,NaNLNaN,NaNA…".
      // field.append("path")
      //   .style('fill', '#00a68f')
      //   .attr({ d:arcLine });

    var percent = fields[0].ratio;
    // field.append(...).datum(...).attr(...).style(...).attrTween is not a function
    field.append('path')
      .data(function(d,i) { console.log(d); return pie(d[i].ratio) })
      // .datum({endAngle: percent})
      .attr({ d:arcLine })
      .style('fill', '#00a68f')
      .attrTween("d", arcTween);

    var label = field.append("text")
      .attr("class", "label")
      .attr("text-anchor", "middle")
      .attr("dy", ".5rem");

    function arcTween(d) {
      var i = d3.interpolate(d.endAngle, tau * 100);
      return function(t) {
        return arc(i(t));
      };
    }

  }
}
</script>

<style>
  section {
    width: 100%;
    position: relative;
  }

  .sdaMultiDonut text.label {
    font-size: 2rem;
  	font-weight: 600;
  }

  .sdaMultiDonut .text.label {
    font-size: 1rem;
  	font-weight: 400;
  }

</style>
