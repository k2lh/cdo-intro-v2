<template>
  <section>
    <h6 class="h6-center"> &nbsp;</h6>
  </section>
</template>

<script>
export default {
  name: 'sdaDonutNoCtrl',
  props: ['chartData', 'chartClass', 'chartTitle'],
  data () {
    return {
      json: null
    }
  },
  mounted () {
    /* eslint-disable */
    function renderPieChart (dataset, chartClass){
  		var width = document.querySelector(chartClass).clientWidth;
  		var height = width * 1.5;
  		var radius = Math.min(width, width) / 2;
  		var donutWidth = radius / 3;
  		var legendRectSize = radius / 8;
  		var legendSpacing = 6;

  		dataset.data.forEach(function(item){
  			item.enabled = true;
  		});

      var color = d3.scale.ordinal().range(['#40d5bb','#008673','#95d13c','#34bc6e','#00884b','#56acf2','#047cc0','#1c496d']);
  		var svg = d3.select(chartClass)
  		.append("svg")
  		.attr("width", width)
  		.attr("height", height)
  		.append("g")
  		.attr("transform", "translate(" + width / 2 + "," + (height / 1.6) / 2 + ")");

  		var arc = d3.svg.arc()
  		.outerRadius(radius - 10)
  		.innerRadius(radius - donutWidth);

  		var pie = d3.layout.pie()
  		.sort(null)
  		.value(function(d) { return d.value; });

  		var tooltip = d3.select(chartClass)
  		.append('div')
  		.attr('class', 'tooltip');

  		tooltip.append('div')
  		.attr('class', 'label');

  		tooltip.append('div')
  		.attr('class', 'count');

  		tooltip.append('div')
  		.attr('class', 'percent');

  		var path = svg.selectAll('path')
  		.data(pie(dataset.data))
  		.enter()
  		.append('path')
  		.attr('d', arc)
  		.attr('fill', function(d, i) {
  			return color(d.data.label);
  		})
  		.each(function(d) { this._current = d; });

  		path.on('mouseover', function(d) {
  			var total = d3.sum(dataset.data.map(function(d) {
  				return (d.enabled) ? d.value : 0;
  			}));
  			var percent = Math.round(1000 * d.data.value / total) / 10;
  			tooltip.select('.label').html(d.data.label.toUpperCase()).style('color','black');
  			tooltip.select('.count').html(d.data.value);
  			tooltip.select('.percent').html(percent + '%');
  			tooltip.style('display', 'block');
  			tooltip.style('opacity',2);
        tooltip.style('background', '#FFF');
        tooltip.style('border', '1px solid #AAA');
  		});

  		path.on('mousemove', function(d) {
  			tooltip.style('top', (d3.event.layerY + 10) + 'px')
  			.style('left', (d3.event.layerX - 25) + 'px');
  		});

  		path.on('mouseout', function() {
  			tooltip.style('display', 'none');
  			tooltip.style('opacity',0);
  		});

      var middleCount = svg.append('text')
        .attr("text-anchor", "middle")
        .style({'fill': '#5a6872'});
        middleCount.append('tspan')
        .attr("text-anchor", "middle")
        .attr("y", "-1rem")
        .attr("x", "0")
        .style({'font-size': '1rem'})
        .style({'text-transform': 'uppercase'})
        .text(dataset.title);
        middleCount.append('tspan')
        .attr("text-anchor", "middle")
        .attr("y", ".5rem")
        .attr("x", "0")
        .style({'font-size': '1.5rem'})
        .text(dataset.value);
        middleCount.append('tspan')
        .attr("text-anchor", "middle")
        .attr("y", "1.75rem")
        .attr("x", "0")
        .style({'font-size': '.875rem'})
        .text(dataset.percent)
        .attr("class", "label");

  		var legend = svg.selectAll('.legend')
  		.data(color.domain())
  		.enter()
  		.append('g')
  		.attr('class', 'legend')
  		.attr('transform', function(d, i) {
  			var h = legendRectSize + legendSpacing;
  			var offset = (height / -1.9) + h * color.domain().length / 2;
  			var horz = -8 * legendRectSize;
  			var vert = i * h - offset;
  			return 'translate(' + horz + ',' + vert + ')';
  		});

  		legend.append('rect')
  		.attr('width', legendRectSize)
  		.attr('height', legendRectSize)
  		.style('fill', color)
  		.style('stroke', color)
  		.on('click', function(label) {
  			var rect = d3.select(this);
  			var enabled = true;
  			var totalEnabled = d3.sum(dataset.data.map(function(d) {
  				return (d.enabled) ? 1 : 0;
  			}));

  			if (rect.attr('class') === 'disabled') {
  				rect.attr('class', '').style('fill', color);
  			} else {
  				if (totalEnabled < 2) return;
  				rect.attr('class', 'disabled').style('fill', '#FFF');
  				enabled = false;
  			}

  			pie.value(function(d) {
  				if (d.label === label) d.enabled = enabled;
  				return (d.enabled) ? d.value : 0;
  			});

  			path = path.data(pie(dataset.data));

  			path.transition()
  			.duration(750)
  			.attrTween('d', function(d) {
  				var interpolate = d3.interpolate(this._current, d);
  				this._current = interpolate(0);
  				return function(t) {
  					return arc(interpolate(t));
  				};
  			});
  		});

  		legend.append('text')
  		.attr('x', legendRectSize + legendSpacing)
  		.attr('y', legendRectSize - legendSpacing + 4)
  		.text(function(d) { return d; })
  	};
    renderPieChart(this.chartData, this.chartClass);

  }
}
</script>

<style>
  section {
    width: 100%;
    position: relative;
  }

.sdaDonutNoCtrl text {
  font-size: .875rem;
}

</style>
