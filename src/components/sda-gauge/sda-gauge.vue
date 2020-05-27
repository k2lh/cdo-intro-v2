<template>
  <section>
    <h5 class="h4">{{chartTitle}}</h5>
    <span v-if="chartData.arrow === 'down'">
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      	 viewBox="0 0 512.171 512.171" style="enable-background:new 0 0 512.171 512.171;" xml:space="preserve">
        <g>
        	<g>
        		<path d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971
        			c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627
        			l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504
        			C479.793,292.501,480.71,287.915,479.046,283.925z"/>
        	</g>
        </g>
      </svg>
    </span>
    <span v-else>
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      	 viewBox="0 0 512.171 512.171" style="enable-background:new 0 0 512.171 512.171;" xml:space="preserve">
        <g>
        	<g>
        		<path d="M476.723,216.64L263.305,3.115C261.299,1.109,258.59,0,255.753,0c-2.837,0-5.547,1.131-7.552,3.136L35.422,216.64
        			c-3.051,3.051-3.947,7.637-2.304,11.627c1.664,3.989,5.547,6.571,9.856,6.571h117.333v266.667c0,5.888,4.779,10.667,10.667,10.667
        			h170.667c5.888,0,10.667-4.779,10.667-10.667V234.837h116.885c4.309,0,8.192-2.603,9.856-6.592
        			C480.713,224.256,479.774,219.691,476.723,216.64z"/>
        	</g>
        </g>
      </svg>
    </span>
    <span class="surveyCount">{{chartData.count}}</span>
  </section>
</template>

<script>
export default {
  name: 'sdaGauge',
  props: ['chartData', 'chartClass', 'chartTitle'],
  data () {
    return {
      json: null
    }
  },
  mounted () {
    /* eslint-disable */
    var value = this.chartData.value;
    var text = Math.round(value * 100) + '%'
    var data = [value, 1 - value]
    var width = document.querySelector(this.chartClass).clientWidth - 20;
    var height = (width / 2) + 30;
    var anglesRange = 0.5 * Math.PI
    var radis = Math.min(width, 2 * height) / 2
    var thickness = width / 5;
    var colors = [this.chartData.color, "#F5F5F5"]
    var pies = d3.layout.pie()
    	.value(d => d)
    	.sort(null)
    	.startAngle(anglesRange * -1)
    	.endAngle(anglesRange)

		var arc = d3.svg.arc()
    	.outerRadius(radis)
    	.innerRadius(radis - thickness)

    var translation = (x, y) => `translate(${x}, ${y})`

    var svg = d3.select(this.chartClass).append("svg")
      .attr("width", width)
      .attr("height", height)
    	.attr("class", "half-donut")
			.append("g")
    	.attr("transform", translation(width / 2, height))

    svg.selectAll("path")
    	.data(pies(data))
    	.enter()
    	.append("path")
    	.attr("fill", (d, i) => colors[i])
    	.attr("d", arc)

		svg.append("text")
    	.text(d => text)
    	.attr("dy", "1")
    	.attr("class", "label")
    	.attr("text-anchor", "middle")

  }
}
</script>

<style>
  section {
    width: 100%;
    position: relative;
  }
  .gauge .half-donut {
    margin: 0 25px;
  }
  .gauge text.label {
    font-size: 2.5rem;
    font-weight: 600;
  }
  .gauge svg#Capa_1 {
    height: 3rem;
    position: absolute;
    top: 3rem;
    left: 0;
  }
  .gauge .surveyCount {
    font-size: 2rem;
    font-weight: 400;
    position: absolute;
    top: 2.5rem;
    right: 0;
  }
</style>
