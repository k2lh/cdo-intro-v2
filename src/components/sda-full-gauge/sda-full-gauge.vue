<template>
  <section class="sdaFullGauge"></section>
</template>

<script>
export default {
  name: 'sdaFullGauge',
  props: ['chartData', 'chartClass', 'chartTitle'],
  data () {
    return {
      json: null
    }
  },
  mounted () {
    /* eslint-disable */
    console.log(this.chartData);
    var w = document.querySelector(this.chartClass).clientWidth;
    var h = w;
    var tau = 2 * Math.PI;
    var outerRadius = w / 2 - 5;
    var innerRadius = w / 2 - 15;

    var percent = this.chartData.percent;
    var ratio = percent/100;
    var color = this.chartData.color;
    var title = this.chartData.title;
    var label1 = this.chartData.label1;
    var period = this.chartData.period;
    var value = this.chartData.value;
    var label2 = this.chartData.label2;
    var value3 = this.chartData.value3;

    var pie = d3.layout.pie()
      .value(function(d){return d})
      .sort(null);

    var arc = d3.svg.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .startAngle(0)
      .endAngle(Math.PI * 2);
    var arcLine = d3.svg.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .startAngle(0);

    var svg = d3.selectAll(this.chartClass)
      .datum(0)
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .append('g')
       .attr("transform", function(d, i) { return "translate(" + (i * 2 + 1.2) / 2.5 * w + "," + h / 2 + ")"; })
      .attr("class", "field");

    var path = svg.append('path')
      .attr({ d:arc })
      .style({ fill: '#dfe3e6' });

    svg.append("svg:circle")
      .attr("cx", "0")
      .attr("cy", 0)
      .attr("r", innerRadius - 10)
      .style('stroke', function(d) { return color; })
      .style("stroke-width", 10)    // set the stroke width
      .style("fill", "none")
      .append("g");

    var pathForeground = svg.append('path')
      .datum({ endAngle:0 })
      .attr({ d:arcLine })
      .style({fill: '#00a68f'});

    var middleCount = svg.append('text')
      .attr("text-anchor", "middle")
      .style({'fill': '#5a6872'});
      middleCount.append('tspan')
      .attr("text-anchor", "middle")
      .attr("y", "-1rem")
      .attr("x", "0")
      .style({'font-size': '1rem'})
      .style({'text-transform': 'uppercase'})
      .text(this.chartData.title);
      middleCount.append('tspan')
      .attr("text-anchor", "middle")
      .attr("y", "0.5rem")
      .attr("x", "0")
      .style({'font-size': '1.5rem'})
      .text(this.chartData.value);
      middleCount.append('tspan')
      .attr("text-anchor", "middle")
      .attr("y", "1.75rem")
      .attr("x", "0")
      .style({'font-size': '.875rem'})
      .text(this.chartData.percent)
      .attr("class", "label");

    var tooltip = d3.select(this.chartClass)
  		.append('div')
  		.attr('class', 'tooltip');

  		tooltip.append('div')
  		.attr('class', 'label');

  		tooltip.append('div')
  		.attr('class', 'count');

  		tooltip.append('div')
  		.attr('class', 'percent');

      svg.on('mouseover', function(d) {
  			tooltip.select('.label').html(period);
  			tooltip.select('.count').html('LFQ ' + title + ': ' + value);
  			tooltip.select('.percent').html(percent + '%');
  			tooltip.style('display', 'block');
        tooltip.style('border', '1px solid #AAA');
  			tooltip.style('opacity', 2);
        tooltip.style('fill', '#5a6872');
        tooltip.style('background', '#FFF');
  		});

  		svg.on('mousemove', function(d) {
  			tooltip.style('top', (d3.event.layerY + 10) + 'px')
  			.style('left', (d3.event.layerX - 25) + 'px');
  		});

  		svg.on('mouseout', function() {
  			tooltip.style('display', 'none');
  			tooltip.style('opacity',0);
  		});

    var arcTween = function(transition, newValue, oldValue) {
      transition.attrTween("d", function (d) {
        var interpolate = d3.interpolate(d.endAngle, tau * (newValue / 100));
        var interpolateCount = d3.interpolate(oldValue, newValue);
        return function (t) {
          d.endAngle = interpolate(t);
          return arcLine(d);
        };
      });
    };

    pathForeground.transition()
      .duration(750)
      .ease('cubic')
      .call(arcTween,percent,0);

  }
}
</script>

<style>
  section {
    width: 100%;
    position: relative;
  }

  text {
    white-space: normal;
  }

  section.sdaFullGauge {
    padding-top: 1.5rem;
    padding-left: 0;
  }
</style>
