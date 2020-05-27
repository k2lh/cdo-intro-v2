import pagehead from './pagehead';
// import LineChart from './LineChart'
// import LineBarChart from './LineBarChart'
// import PieChart from './PieChart'
// import HGBarChart from './HBarChart'
// import BarChart from './BarChart'
// import BubbleChart from './BubbleChart'
// import StackedAreaChart from './StackedAreaChart'

const components = [
  pagehead
];

export default {
  install(Vue, options) {
    if (typeof options === 'undefined') {
      components.forEach(c => Vue.component(c.name, c));
    } else {
      if (!(options instanceof Array)) {
        throw new TypeError('options must be an array');
      }
      components.forEach((c) => {
        if (options.indexOf(c.name) !== -1) {
          Vue.component(c.name, c);
        }
      });
    }
  },
};

export {
  pagehead
};

// export default (Vue, options) => {
//   Vue.component('vn-line', LineChart)
//   Vue.component('vn-line-bar', LineBarChart)
//   Vue.component('vn-pie', PieChart)
//   Vue.component('vn-hbar', HGBarChart)
//   Vue.component('vn-bar', BarChart)
//   Vue.component('vn-bubble', BubbleChart)
//   Vue.component('vn-stacked-area',StackedAreaChart)
// }
