<template>
  <section></section>
</template>

<script>
import * as cloud from 'd3-cloud'

export default {
  name: 'sdaWordCloud',
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

    cloud()
    	.size([width, height])
    	.words(dataset)
    	.rotate(function() {
    		return ~~(Math.random() * 2) * 90;
    	})
    	.font("Impact")
    	.fontSize(function(d) {
    		return d.size;
    	})
    	.on("end", drawSkillCloud)
    	.start();

    function drawSkillCloud(words) {
    	d3.select("#cloud").append("svg")
    		.attr("width", width)
    		.attr("height", height)
    		.append("g")
    		.attr("transform", "translate(" + ~~(width) + "," + ~~(height / 2) + ")")
    		.selectAll("text")
    		.data(words)
    		.enter().append("text")
    		.style("font-size", function(d) {
    			return d.size + "px";
    		})
    		.style("-webkit-touch-callout", "none")
    		.style("-webkit-user-select", "none")
    		.style("-khtml-user-select", "none")
    		.style("-moz-user-select", "none")
    		.style("-ms-user-select", "none")
    		.style("user-select", "none")
    		.style("cursor", "default")
    		.style("font-family", "Impact")
    		.style("fill", function(d, i) {
    			return fill(i);
    		})
    		.attr("text-anchor", "middle")
    		.attr("transform", function(d) {
    			return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
    		})
    		.text(function(d) {
    			return d.text;
    		});
        }

    // set the viewbox to content bounding box (zooming in on the content, effectively trimming whitespace)

        var svg = document.getElementsByTagName("svg")[0];
        var bbox = svg.getBBox();
        var viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
        svg.setAttribute("viewBox", viewBox);
  }
}
</script>

<style>
  section {
    width: 100%;
    position: relative;
  }

.sdaWordCloud {
 min-height: 20rem;
}
</style>
